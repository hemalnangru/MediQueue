/**
 * Role Based Authorization Middleware
 * Usage:
 * router.get("/admin", protect, authorize("admin"), controller);
 * router.get("/doctor", protect, authorize("doctor", "admin"), controller);
 */

export const authorize = (...roles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Please login first.",
        });
      }
  
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to access this resource.",
        });
      }
  
      next();
    };
  };