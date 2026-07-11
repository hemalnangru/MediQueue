import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../constants/testimonials";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Patient Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Thousands of patients trust MediQueue for compassionate care,
            experienced doctors, and world-class medical facilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;