import bcrypt from "bcryptjs";

/**
 * Hash a plain text password
 * @param {string} password
 * @returns {Promise<string>}
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

/**
 * Compare plain text password with hashed password
 * @param {string} enteredPassword
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
export const comparePassword = async (
  enteredPassword,
  hashedPassword
) => {
  return await bcrypt.compare(
    enteredPassword,
    hashedPassword
  );
};