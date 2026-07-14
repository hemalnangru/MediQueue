import { z } from "zod";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const createAppointmentSchema = z.object({
  doctor: z
    .string()
    .regex(objectIdRegex, "Invalid doctor ID"),

  department: z
    .string()
    .trim()
    .min(2, "Department must be at least 2 characters")
    .max(100, "Department cannot exceed 100 characters"),

  appointmentDate: z
    .string()
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Invalid appointment date"
    ),

  appointmentTime: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Appointment time must be in HH:MM (24-hour) format"
    ),

  visitType: z
    .enum(["consultation", "follow-up", "emergency", "checkup"])
    .default("consultation"),

  symptoms: z
    .string()
    .trim()
    .max(1000, "Symptoms cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),

  notes: z
    .string()
    .trim()
    .max(1000, "Notes cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),

  emergency: z
    .boolean()
    .default(false),
});

export const updateAppointmentStatusSchema = z.object({
  status: z.enum([
    "pending",
    "confirmed",
    "completed",
    "cancelled",
    "rescheduled",
    "no-show",
  ]),
});