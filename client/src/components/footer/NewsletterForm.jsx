import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Successfully subscribed!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="flex overflow-hidden rounded-xl bg-slate-800 border border-slate-700">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
          className="w-full bg-transparent px-4 py-3 text-white placeholder:text-slate-400 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 px-5 transition hover:bg-blue-700"
        >
          <Send size={20} className="text-white" />
        </button>
      </div>

      {errors.email && (
        <p className="mt-2 text-sm text-red-400">
          {errors.email.message}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;