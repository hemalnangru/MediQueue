import doctorProfileService from "../services/doctorProfile.service.js";

export const createDoctorProfile = async (req, res, next) => {
  try {
    const existingProfile = await doctorProfileService.profileExists(req.user._id);

    if (existingProfile) {
      return res.status(409).json({
        success: false,
        message: "Doctor profile already exists.",
      });
    }

    const profile = await doctorProfileService.createProfile({
      ...req.body,
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Doctor profile created successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const getDoctorProfile = async (req, res, next) => {
  try {
    const profile = await doctorProfileService.getProfileById(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyDoctorProfile = async (req, res, next) => {
  try {
    const profile = await doctorProfileService.getProfileByUserId(req.user._id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllDoctorProfiles = async (req, res, next) => {
  try {
    const profiles = await doctorProfileService.getAllProfiles(req.query);

    return res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDoctorProfile = async (req, res, next) => {
  try {
    const profile = await doctorProfileService.updateProfile(
      req.params.id,
      req.body
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Doctor profile updated successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDoctorAvailability = async (req, res, next) => {
  try {
    const profile = await doctorProfileService.updateAvailability(
      req.params.id,
      req.body.isAvailable
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Availability updated successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteDoctorProfile = async (req, res, next) => {
  try {
    const profile = await doctorProfileService.deleteProfile(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Doctor profile deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};