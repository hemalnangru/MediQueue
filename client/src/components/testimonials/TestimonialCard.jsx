import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-2xl
      "
    >
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="text-sm text-slate-500">
            {testimonial.city}
          </p>
        </div>
      </div>

      <div className="mt-6 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 leading-relaxed text-slate-600">
        "{testimonial.review}"
      </p>
    </div>
  );
};

export default TestimonialCard;