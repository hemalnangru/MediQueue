import Appointment from "../models/Appointment.js";

/**
 * Create a new appointment
 */
export const createAppointment = async ({
  patient,
  doctor,
  department,
  appointmentDate,
  appointmentTime,
  notes = "",
}) => {
  const existingAppointment = await Appointment.findOne({
    doctor,
    appointmentDate: new Date(appointmentDate),
    appointmentTime,
    status: {
      $in: ["pending", "confirmed"],
    },
  });

  if (existingAppointment) {
    throw new Error("Selected time slot is already booked.");
  }

  const appointment = await Appointment.create({
    patient,
    doctor,
    department,
    appointmentDate,
    appointmentTime,
    notes,
  });

  return appointment.populate([
    {
      path: "patient",
      select: "name email",
    },
    {
      path: "doctor",
      select: "name email",
    },
  ]);
};

/**
 * Get all appointments for a patient
 */
export const getPatientAppointments = async (patientId) => {
  return Appointment.find({ patient: patientId })
    .populate("doctor", "name email")
    .sort({
      appointmentDate: -1,
      appointmentTime: 1,
    })
    .lean();
};

/**
 * Get all appointments for a doctor
 */
export const getDoctorAppointments = async (doctorId) => {
  return Appointment.find({ doctor: doctorId })
    .populate("patient", "name email")
    .sort({
      appointmentDate: -1,
      appointmentTime: 1,
    })
    .lean();
};

/**
 * Get appointment by ID
 */
export const getAppointmentById = async (appointmentId) => {
  const appointment = await Appointment.findById(appointmentId)
    .populate("patient", "name email")
    .populate("doctor", "name email");

  if (!appointment) {
    throw new Error("Appointment not found.");
  }

  return appointment;
};

/**
 * Update appointment status
 */
export const updateAppointmentStatus = async (
  appointmentId,
  status
) => {
  const allowedStatuses = [
    "pending",
    "confirmed",
    "completed",
    "cancelled",
    "rescheduled",
    "no-show",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid appointment status.");
  }

  const appointment = await Appointment.findById(appointmentId);

  if (!appointment) {
    throw new Error("Appointment not found.");
  }

  appointment.status = status;

  await appointment.save();

  return appointment.populate([
    {
      path: "patient",
      select: "name email",
    },
    {
      path: "doctor",
      select: "name email",
    },
  ]);
};

/**
 * Cancel appointment
 */
export const cancelAppointment = async (
  appointmentId,
  userId,
  role
) => {
  const appointment = await Appointment.findById(appointmentId);

  if (!appointment) {
    throw new Error("Appointment not found.");
  }

  const isPatient =
    appointment.patient.toString() === userId.toString();

  const isDoctor =
    appointment.doctor.toString() === userId.toString();

  const isAdmin = role === "admin";

  if (!isPatient && !isDoctor && !isAdmin) {
    throw new Error("Unauthorized to cancel this appointment.");
  }

  appointment.status = "cancelled";

  await appointment.save();

  return appointment.populate([
    {
      path: "patient",
      select: "name email",
    },
    {
      path: "doctor",
      select: "name email",
    },
  ]);
};