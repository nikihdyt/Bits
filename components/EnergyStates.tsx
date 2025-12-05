export default function EnergyStates() {
  const states = [
    {
      name: "Peak Flow State",
      hrv: "68 ms • Great 🚀",
      description: "Your energy is peak. Focus on one big thing.",
      task: "Write Q1 Strategy",
      taskType: "Deep Work",
      gradient: "gradient-peak",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: "Steady Rhythm",
      hrv: "56 ms • Normal ✅",
      description: "Balanced energy. Maintain momentum.",
      task: "Review pull requests",
      taskType: "Focused Work",
      gradient: "gradient-steady",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: "Careful Pace",
      hrv: "42 ms • Pay Attention ⚠️",
      description: "Energy below normal. Keep tasks light.",
      task: "Organize files",
      taskType: "Shallow Work",
      gradient: "gradient-attention",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      name: "Recovery Mode",
      hrv: "38 ms • Overload 🛑",
      description: "Energy very low. Prioritize rest.",
      task: "Breathing Exercise",
      taskType: "Recovery",
      gradient: "gradient-recovery",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Adaptive Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The right task, at the right time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {states.map((state, index) => (
            <div key={index} className="card overflow-hidden">
              {/* Gradient Header */}
              <div className={`${state.gradient} p-8 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  {state.icon}
                  <div className="text-sm opacity-80">{state.hrv}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{state.name}</h3>
                <p className="opacity-90">{state.description}</p>
              </div>

              {/* White Card Content */}
              <div className="p-8 bg-white">
                <div className="space-y-3">
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="text-xl font-bold">{state.task}</div>
                  <div className="text-sm text-gray-600">{state.taskType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
