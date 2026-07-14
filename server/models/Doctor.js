import mongoose from "mongoose";

const { Schema, model } = mongoose;

const doctorProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor user is required"],
      unique: true,
      index: true,
    },

    specialization: {
      type: String,
      required: [true, "Specialization is required"],
      trim: true,
      maxlength: 100,
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
      maxlength: 100,
    },

    qualification: {
      type: String,
      required: [true, "Qualification is required"],
      trim: true,
      maxlength: 150,
    },

    experience: {
      type: Number,
      required: [true, "Experience is required"],
      min: 0,
      max: 60,
    },

    consultationFee: {
      type: Number,
      required: [true, "Consultation fee is required"],
      min: 0,
    },

    licenseNumber: {
      type: String,
      required: [true, "License number is required"],
      trim: true,
      unique: true,
      uppercase: true,
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },

    languages: [
      {
        type: String,
        trim: true,
      },
    ],

    profileImage: {
      type: String,
      default: "",
    },

    hospitalLocation: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },

    isAvailable: {
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

doctorProfileSchema.index({
  specialization: 1,
  department: 1,
});

doctorProfileSchema.index({
  consultationFee: 1,
});

doctorProfileSchema.index({
  experience: -1,
});

export default model("DoctorProfile", doctorProfileSchema);