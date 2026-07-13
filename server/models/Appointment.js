import mongoose from "mongoose";

const { Schema, model } = mongoose;

const APPOINTMENT_STATUSES = [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
  "rescheduled",
  "no-show",
];

const appointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Patient is required"],
      index: true,
    },

    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
      index: true,
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    appointmentDate: {
      type: Date,
      required: [true, "Appointment date is required"],
      index: true,
      validate: {
        validator(value) {
          return value instanceof Date && !isNaN(value.getTime());
        },
        message: "Invalid appointment date",
      },
    },

    appointmentTime: {
      type: String,
      required: [true, "Appointment time is required"],
      trim: true,
      match: [
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        "Time must be in HH:MM (24-hour) format",
      ],
    },

    status: {
      type: String,
      enum: APPOINTMENT_STATUSES,
      default: "pending",
      index: true,
    },

    notes: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound indexes for faster dashboard queries
appointmentSchema.index({
  patient: 1,
  appointmentDate: -1,
});

appointmentSchema.index({
  doctor: 1,
  appointmentDate: 1,
});

appointmentSchema.index({
  department: 1,
  status: 1,
});

appointmentSchema.index({
  appointmentDate: 1,
  appointmentTime: 1,
});

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;