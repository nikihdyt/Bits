import Link from "next/link";

export default function SupportPage() {
  const faqs = [
    {
      question: "What is HRV and why does it matter?",
      answer: "Heart Rate Variability (HRV) measures the variation in time between your heartbeats. Higher HRV indicates better stress resilience and cognitive capacity. Lower HRV signals mental fatigue or physical stress. By tracking HRV throughout the day, Bits helps you make informed decisions about when to push and when to rest."
    },
    {
      question: "Do I need an Apple Watch?",
      answer: "Yes, Bits requires an Apple Watch (Series 1 or later) to track your HRV data. The app uses HealthKit to access your HRV measurements from your Apple Watch."
    },
    {
      question: "How does Bits recommend tasks?",
      answer: "Bits analyzes your current HRV against your personal baseline to determine your cognitive capacity. Based on this, it recommends Deep Work during high HRV periods, Focused Work during moderate periods, Shallow Work during low periods, and Recovery exercises when overload is detected."
    },
    {
      question: "Is my health data private?",
      answer: "Absolutely. All your HRV data and task information is stored locally on your device. We never transmit your health data to our servers. If you enable iCloud, your data syncs through Apple's secure infrastructure, but we still don't have access to it."
    },
    {
      question: "What are the different work types?",
      answer: "Bits categorizes work into four types: (1) Deep Work - complex problem-solving and strategic thinking, (2) Focused Work - writing, meetings, and analysis, (3) Shallow Work - email, organizing, and administrative tasks, and (4) Recovery - breathing exercises and rest."
    },
    {
      question: "How accurate are the recommendations?",
      answer: "Bits uses scientifically validated HRV measurements to assess your stress and cognitive capacity. The accuracy of recommendations improves over time as the app learns your personal baseline and patterns. For best results, wear your Apple Watch consistently and sync your HRV data daily."
    },
    {
      question: "Can I use Bits without HRV tracking?",
      answer: "While Bits is designed to work with HRV data, you can still use it as a task manager. However, you won't receive personalized energy-based recommendations without connecting your Apple Watch and enabling HealthKit access."
    },
    {
      question: "How do focus sessions work?",
      answer: "When you start a focus session, Bits begins tracking your time. You can take breaks during the session, and the app will log the total duration. When you finish, you can mark the task as complete or just end the session while keeping the task in your list."
    },
    {
      question: "What are breathing exercises?",
      answer: "Bits includes Box Breathing exercises (4-4-4-4 pattern) that are scientifically proven to reduce stress and restore cognitive function. When your HRV indicates overload, the app will suggest taking a breathing break."
    },
    {
      question: "How do I export my data?",
      answer: "Currently, all data is stored locally in SwiftData. You can delete all data by uninstalling the app. Data export features may be added in future updates."
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 gradient-peak rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-xl">Bits</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="gradient-peak text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-xl opacity-90">Find answers to common questions about Bits</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 gradient-peak rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6 opacity-90">We're here to help! Reach out to our support team.</p>
          <a
            href="mailto:support@bits.app"
            className="inline-block bg-white text-peak px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </div>

        <div className="mt-16 pt-8 border-t">
          <Link href="/" className="text-peak hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
