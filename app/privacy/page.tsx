import Link from "next/link";

export default function PrivacyPage() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: December 5, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Bits ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Health Data (HRV)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bits accesses your Heart Rate Variability (HRV) data through Apple HealthKit to provide personalized task recommendations. This data includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Heart Rate Variability measurements</li>
              <li>Timestamps of HRV readings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Task Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We store the following task-related data locally on your device:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Task titles and descriptions</li>
              <li>Task duration estimates</li>
              <li>Task attributes (focus level, energy type)</li>
              <li>Focus session records</li>
              <li>Recovery session records</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We may collect anonymized usage statistics to improve the app, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>App feature usage</li>
              <li>Session duration</li>
              <li>Error logs (anonymized)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide HRV-based task recommendations</li>
              <li>Calculate your cognitive capacity</li>
              <li>Track your focus sessions and productivity patterns</li>
              <li>Provide daily insights and analytics</li>
              <li>Improve app functionality and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Local Storage:</strong> All your health data and task information is stored locally on your device using SwiftData. We do not transmit your HRV data or task information to our servers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>iCloud Sync:</strong> If you enable iCloud, your data may be synced across your devices through Apple's secure iCloud infrastructure. We do not have access to this data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or transfer your personal information or health data to third parties. Your HRV data and task information remain on your device and are never shared with external parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your data stored in the app</li>
              <li>Delete your data at any time by deleting the app</li>
              <li>Revoke HealthKit access permissions through iOS Settings</li>
              <li>Export your task data (if feature is available)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Bits is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              Email: <a href="mailto:privacy@bits.app" className="text-peak hover:underline">privacy@bits.app</a>
            </p>
          </section>
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
