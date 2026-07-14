import Availability from "../models/Availability.js";

class AvailabilityService {
  async createAvailability(data) {
    const existing = await Availability.findOne({
      doctor: data.doctor,
      dayOfWeek: data.dayOfWeek,
      startTime: data.startTime,
    });

    if (existing) {
      throw new Error(
        "Availability already exists for this doctor, day and start time."
      );
    }

    return await Availability.create(data);
  }

  async getAvailabilityById(id) {
    return await Availability.findById(id).populate(
      "doctor",
      "fullName email role"
    );
  }

  async getDoctorAvailability(doctorId) {
    return await Availability.find({
      doctor: doctorId,
      isActive: true,
    })
      .sort({
        dayOfWeek: 1,
        startTime: 1,
      })
      .populate("doctor", "fullName email");
  }

  async getAllAvailability(filters = {}) {
    const query = {};

    if (filters.doctor) {
      query.doctor = filters.doctor;
    }

    if (filters.dayOfWeek) {
      query.dayOfWeek = filters.dayOfWeek;
    }

    if (filters.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    return await Availability.find(query)
      .populate("doctor", "fullName email")
      .sort({
        dayOfWeek: 1,
        startTime: 1,
      });
  }

  async updateAvailability(id, data) {
    return await Availability.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).populate("doctor", "fullName email");
  }

  async deleteAvailability(id) {
    return await Availability.findByIdAndDelete(id);
  }

  async toggleAvailability(id, isActive) {
    return await Availability.findByIdAndUpdate(
      id,
      { isActive },
      {
        new: true,
        runValidators: true,
      }
    ).populate("doctor", "fullName email");
  }
}

export default new AvailabilityService();