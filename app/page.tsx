export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest border border-[#58a6ff]/20">
          Health Safety Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Before You Mix.<br />
          <span className="text-[#58a6ff]">Medication Interaction Tracker</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Input your current prescriptions and instantly see severity-coded alerts for dangerous drug combinations and food interactions — powered by FDA interaction data.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $7/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>Critical Alerts</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>Moderate Warnings</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>Safe Combinations</span>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-20 grid sm:grid-cols-3 gap-4">
        {[
          { label: 'FDA-Referenced Data', desc: 'Cross-referenced against official drug interaction databases.' },
          { label: 'Severity Levels', desc: 'Color-coded critical, moderate, and minor interaction alerts.' },
          { label: 'Food Interactions', desc: 'Know which foods to avoid with your current medications.' }
        ].map((f) => (
          <div key={f.label} className="rounded-xl border border-[#21262d] bg-[#161b22] p-5">
            <p className="font-semibold text-white mb-1">{f.label}</p>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff]/40 bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited medications tracked',
              'Real-time interaction alerts',
              'Food & supplement interactions',
              'Detailed interaction reports',
              'Export to PDF for your doctor',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How accurate is the interaction data?',
              a: 'Our database is cross-referenced against FDA drug interaction data and updated regularly. Always consult your pharmacist or physician before making medication changes.'
            },
            {
              q: 'Can I use this instead of asking my pharmacist?',
              a: 'MedSafe is a decision-support tool, not a replacement for professional medical advice. Use it to prepare informed questions for your healthcare provider.'
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You can cancel anytime from your account dashboard. You retain access until the end of your billing period with no additional charges.'
            }
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-[#21262d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} MedSafe. Not a substitute for professional medical advice.
      </footer>
    </main>
  )
}
