import express from "express";

import {
  createAppointment,
  getAppointmentById,
  getMyAppointments,
  getAllAppointments,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  createAppointmentSchema,
  updateAppointmentSchema,
  updateAppointmentStatusSchema,
  appointmentIdSchema,
  appointmentQuerySchema,
} from "../validators/appointment.validator.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Patient
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  protect,
  authorize("patient"),
  validate(createAppointmentSchema),
  createAppointment
);

router.get(
  "/my",
  protect,
  authorize("patient", "doctor"),
  getMyAppointments
);

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  protect,
  authorize("admin"),
  validate(appointmentQuerySchema),
  getAllAppointments
);

/*
|--------------------------------------------------------------------------
| Shared
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  protect,
  authorize("admin", "doctor", "patient"),
  validate(appointmentIdSchema),
  getAppointmentById
);

router.put(
  "/:id",
  protect,
  authorize("admin", "doctor"),
  validate(appointmentIdSchema),
  validate(updateAppointmentSchema),
  updateAppointment
);

router.patch(
  "/:id/status",
  protect,
  authorize("admin", "doctor"),
  validate(appointmentIdSchema),
  validate(updateAppointmentStatusSchema),
  updateAppointmentStatus
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  validate(appointmentIdSchema),
  deleteAppointment
);

export default router;