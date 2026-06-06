import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/site/SiteNav'
import { Footer } from '@/components/site/Footer'

export const Route = createFileRoute('/code-of-conduct')({
  component: CodeOfConductComponent,
})

function CodeOfConductComponent() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <main className="container-narrow py-32 md:py-40">
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-ivory mb-10">
          Code of Conduct
        </h1>
        <div className="text-ivory/80 leading-[1.75] space-y-6 text-lg">
          <p>
            AICSSYC 2026 is dedicated to providing a harassment-free congress experience for everyone, 
            regardless of gender, gender identity and expression, age, sexual orientation, disability, 
            physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
          </p>
          <h2 className="font-display text-2xl text-ivory mt-10 mb-4">Expected Behavior</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be considerate, respectful, and collaborative.</li>
            <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
            <li>Be mindful of your surroundings and of your fellow participants.</li>
          </ul>
          <h2 className="font-display text-2xl text-ivory mt-10 mb-4">Unacceptable Behavior</h2>
          <p>
            Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory, 
            or demeaning speech or actions by any participant.
          </p>
          <p>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, 
            please contact a member of the congress staff immediately or email us at <a href="mailto:ieeecomputersocietysrmist@gmail.com" className="text-gold hover:underline">ieeecomputersocietysrmist@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
