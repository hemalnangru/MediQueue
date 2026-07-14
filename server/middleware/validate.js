import { ZodError } from "zod";

const validate = (schema) => async (req, res, next) => {
  try {
    const validatedData = await schema.parseAsync({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    req.body = validatedData.body ?? req.body;
    req.params = validatedData.params ?? req.params;
    req.query = validatedData.query ?? req.query;

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    next(error);
  }
};

export default validate;