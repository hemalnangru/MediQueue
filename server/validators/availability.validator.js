import { z } from "zod";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const slotDurations = [15, 20, 30, 45, 60];

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const createAvailabilitySchema = z
  .object({
    body: z.object({
      doctor: z
        .string({
          required_error: "Doctor ID is required",
        })
        .regex(objectIdRegex, "Invalid doctor ID"),

      dayOfWeek: z.enum(daysOfWeek),

      startTime: z
        .string({
          required_error: "Start time is required",
        })
        .regex(timeRegex, "Invalid start time"),

      endTime: z
        .string({
          required_error: "End time is required",
        })
        .regex(timeRegex, "Invalid end time"),

      slotDuration: z
        .number({
          required_error: "Slot duration is required",
        })
        .refine(
          (value) => slotDurations.includes(value),
          "Invalid slot duration"
        ),

      breakStart: z
        .string()
        .regex(timeRegex, "Invalid break start time")
        .optional()
        .or(z.literal("")),

      breakEnd: z
        .string()
        .regex(timeRegex, "Invalid break end time")
        .optional()
        .or(z.literal("")),

      maxPatientsPerSlot: z
        .number()
        .int()
        .min(1)
        .max(20)
        .default(1),

      isActive: z.boolean().optional(),
    }),
  })
  .superRefine(({ body }, ctx) => {
    if (
      timeToMinutes(body.startTime) >=
      timeToMinutes(body.endTime)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["body", "endTime"],
        message: "End time must be later than start time",
      });
    }

    if (body.breakStart && body.breakEnd) {
      if (
        timeToMinutes(body.breakStart) >=
        timeToMinutes(body.breakEnd)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["body", "breakEnd"],
          message: "Break end must be later than break start",
        });
      }

      if (
        timeToMinutes(body.breakStart) <
          timeToMinutes(body.startTime) ||
        timeToMinutes(body.breakEnd) >
          timeToMinutes(body.endTime)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["body", "breakStart"],
          message:
            "Break must be within working hours",
        });
      }
    }
  });

export const availabilityIdSchema = z.object({
  params: z.object({
    id: z.string().regex(objectIdRegex, "Invalid availability ID"),
  }),
});

export const updateAvailabilitySchema = createAvailabilitySchema.partial();

export const availabilityQuerySchema = z.object({
  query: z.object({
    doctor: z.string().regex(objectIdRegex).optional(),
    dayOfWeek: z.enum(daysOfWeek).optional(),
    isActive: z
      .enum(["true", "false"])
      .optional()
      .transform((value) =>
        value === undefined ? undefined : value === "true"
      ),
  }),
});