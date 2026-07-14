import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DAYS_OF_WEEK = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const availabilitySchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
      index: true,
    },

    dayOfWeek: {
      type: String,
      enum: DAYS_OF_WEEK,
      required: [true, "Day of week is required"],
      lowercase: true,
      trim: true,
    },

    startTime: {
      type: String,
      required: [true, "Start time is required"],
      match: [
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        "Start time must be in HH:MM (24-hour) format",
      ],
    },

    endTime: {
      type: String,
      required: [true, "End time is required"],
      match: [
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        "End time must be in HH:MM (24-hour) format",
      ],
    },

    slotDuration: {
      type: Number,
      enum: [15, 20, 30, 45, 60],
      default: 30,
    },

    breakStart: {
      type: String,
      default: "",
    },

    breakEnd: {
      type: String,
      default: "",
    },

    maxPatientsPerSlot: {
      type: Number,
      default: 1,
      min: 1,
      max: 20,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

availabilitySchema.index({
  doctor: 1,
  dayOfWeek: 1,
});

availabilitySchema.index({
  doctor: 1,
  isActive: 1,
});

availabilitySchema.index(
  {
    doctor: 1,
    dayOfWeek: 1,
    startTime: 1,
  },
  {
    unique: true,
  }
);

export default model("Availability", availabilitySchema);