import DoctorProfile from "../models/DoctorProfile.js";

class DoctorProfileService {
  async createProfile(data) {
    return await DoctorProfile.create(data);
  }

  async getProfileById(id) {
    return await DoctorProfile.findById(id).populate(
      "user",
      "name email phone role"
    );
  }

  async getProfileByUserId(userId) {
    return await DoctorProfile.findOne({ user: userId }).populate(
      "user",
      "name email phone role"
    );
  }

  async getAllProfiles(filters = {}) {
    const query = {};

    if (filters.department) {
      query.department = filters.department;
    }

    if (filters.specialization) {
      query.specialization = filters.specialization;
    }

    if (filters.isAvailable !== undefined) {
      query.isAvailable = filters.isAvailable;
    }

    return await DoctorProfile.find(query)
      .populate("user", "name email phone role")
      .sort({
        experience: -1,
        consultationFee: 1,
      });
  }

  async updateProfile(id, data) {
    return await DoctorProfile.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).populate("user", "name email phone role");
  }

  async deleteProfile(id) {
    return await DoctorProfile.findByIdAndDelete(id);
  }

  async profileExists(userId) {
    return await DoctorProfile.exists({ user: userId });
  }

  async updateAvailability(id, isAvailable) {
    return await DoctorProfile.findByIdAndUpdate(
      id,
      { isAvailable },
      {
        new: true,
        runValidators: true,
      }
    ).populate("user", "name email phone role");
  }
}

export default new DoctorProfileService();