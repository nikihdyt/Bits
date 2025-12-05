export default function Stats() {
  const stats = [
    { value: "36%", label: "More Productive Hours", subtext: "Without working more" },
    { value: "78%", label: "Burnout Prevention", subtext: "Among active users" },
    { value: "91%", label: "User Satisfaction", subtext: "Would recommend" },
    { value: "6h 15m", label: "Avg Focus Time", subtext: "Per day" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-peak to-steady bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-900">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
