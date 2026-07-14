import express from "express";

import {
  createAppointment,
  getAppointmentById,
  getMyAppointments,
  getAllAppointments,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

import { protect } from "../middleware/protect.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Patient Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  protect,
  authorize("patient"),
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
| Admin Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  protect,
  authorize("admin"),
  getAllAppointments
);

/*
|--------------------------------------------------------------------------
| Shared Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  protect,
  authorize("admin", "doctor", "patient"),
  getAppointmentById
);

router.put(
  "/:id",
  protect,
  authorize("admin", "doctor"),
  updateAppointment
);

router.patch(
  "/:id/status",
  protect,
  authorize("admin", "doctor"),
  updateAppointmentStatus
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteAppointment
);

export default router;