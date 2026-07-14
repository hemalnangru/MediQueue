import appointmentService from "../services/appointment.service.js";

export const createAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.createAppointment({
      ...req.body,
      patient: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment created successfully.",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const getAppointmentById = async (req, res, next) => {
  try {
    const appointment = await appointmentService.getAppointmentById(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyAppointments = async (req, res, next) => {
  try {
    const appointments =
      req.user.role === "doctor"
        ? await appointmentService.getDoctorAppointments(req.user._id)
        : await appointmentService.getPatientAppointments(req.user._id);

    return res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await appointmentService.getAllAppointments(req.query);

    return res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.updateAppointment(
      req.params.id,
      req.body
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment updated successfully.",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const appointment = await appointmentService.updateAppointmentStatus(
      req.params.id,
      status
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment status updated successfully.",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.deleteAppointment(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};