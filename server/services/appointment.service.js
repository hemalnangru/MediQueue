import Appointment from "../models/Appointment.js";

class AppointmentService {
  async createAppointment(data) {
    return await Appointment.create(data);
  }

  async getAppointmentById(id) {
    return await Appointment.findById(id)
      .populate("patient", "name email phone")
      .populate("doctor", "name email specialization");
  }

  async getPatientAppointments(patientId) {
    return await Appointment.find({ patient: patientId })
      .populate("doctor", "name email specialization")
      .sort({ appointmentDate: -1, appointmentTime: -1 });
  }

  async getDoctorAppointments(doctorId) {
    return await Appointment.find({ doctor: doctorId })
      .populate("patient", "name email phone")
      .sort({ appointmentDate: 1, appointmentTime: 1 });
  }

  async getAllAppointments(filters = {}) {
    const query = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.department) {
      query.department = filters.department;
    }

    if (filters.doctor) {
      query.doctor = filters.doctor;
    }

    if (filters.patient) {
      query.patient = filters.patient;
    }

    if (filters.date) {
      const start = new Date(filters.date);
      start.setHours(0, 0, 0, 0);

      const end = new Date(filters.date);
      end.setHours(23, 59, 59, 999);

      query.appointmentDate = {
        $gte: start,
        $lte: end,
      };
    }

    return await Appointment.find(query)
      .populate("patient", "name email phone")
      .populate("doctor", "name email specialization")
      .sort({
        appointmentDate: 1,
        appointmentTime: 1,
      });
  }

  async updateAppointment(id, data) {
    return await Appointment.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
      .populate("patient", "name email phone")
      .populate("doctor", "name email specialization");
  }

  async updateAppointmentStatus(id, status) {
    return await Appointment.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  async deleteAppointment(id) {
    return await Appointment.findByIdAndDelete(id);
  }

  async appointmentExists(id) {
    return await Appointment.exists({ _id: id });
  }
}

export default new AppointmentService();