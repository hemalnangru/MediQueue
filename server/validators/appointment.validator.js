import { z } from "zod";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const appointmentStatuses = [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
  "rescheduled",
  "no-show",
];

export const createAppointmentSchema = z.object({
  body: z.object({
    doctor: z
      .string({
        required_error: "Doctor is required",
      })
      .regex(objectIdRegex, "Invalid doctor ID"),

    department: z
      .string({
        required_error: "Department is required",
      })
      .trim()
      .min(2)
      .max(100),

    appointmentDate: z
      .string({
        required_error: "Appointment date is required",
      })
      .refine(
        (value) => !Number.isNaN(Date.parse(value)),
        "Invalid appointment date"
      ),

    appointmentTime: z
      .string({
        required_error: "Appointment time is required",
      })
      .regex(timeRegex, "Time must be in HH:MM (24-hour) format"),

    notes: z
      .string()
      .trim()
      .max(1000)
      .optional(),
  }),
});

export const updateAppointmentSchema = z.object({
  body: z.object({
    doctor: z
      .string()
      .regex(objectIdRegex, "Invalid doctor ID")
      .optional(),

    department: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .optional(),

    appointmentDate: z
      .string()
      .refine(
        (value) => !Number.isNaN(Date.parse(value)),
        "Invalid appointment date"
      )
      .optional(),

    appointmentTime: z
      .string()
      .regex(timeRegex, "Time must be in HH:MM format")
      .optional(),

    notes: z
      .string()
      .trim()
      .max(1000)
      .optional(),
  }),
});

export const updateAppointmentStatusSchema = z.object({
  body: z.object({
    status: z.enum(appointmentStatuses),
  }),
});

export const appointmentIdSchema = z.object({
  params: z.object({
    id: z.string().regex(objectIdRegex, "Invalid appointment ID"),
  }),
});

export const appointmentQuerySchema = z.object({
  query: z.object({
    status: z.enum(appointmentStatuses).optional(),
    department: z.string().optional(),
    doctor: z.string().regex(objectIdRegex).optional(),
    patient: z.string().regex(objectIdRegex).optional(),
    date: z.string().optional(),
  }),
});