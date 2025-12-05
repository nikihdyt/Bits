export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      avatar: "SC",
      quote: "I didn't realize how much I was forcing it until Bits showed me my patterns. Now I do design work at 9 AM when my HRV peaks, and admin stuff in the afternoon. Game changer.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      avatar: "MR",
      quote: "Finally, a productivity app that doesn't make me feel guilty. When Bits says rest, I rest. When it says go deep, I trust it. My HRV doesn't lie.",
      rating: 5,
    },
    {
      name: "Jennifer Park",
      role: "Software Engineer",
      avatar: "JP",
      quote: "The breathing exercises when I'm overloaded? Absolute game changer. I used to just power through. Now I prevent crashes before they happen.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 space-y-6">
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <div className="w-12 h-12 gradient-peak rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
