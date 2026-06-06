import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/site/SiteNav'
import { Footer } from '@/components/site/Footer'

export const Route = createFileRoute('/privacy')({
  component: PrivacyComponent,
})

function PrivacyComponent() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <main className="container-narrow py-32 md:py-40">
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-ivory mb-10">
          Privacy Policy
        </h1>
        <div className="text-ivory/80 leading-[1.75] space-y-6 text-lg">
          <p>
            At the All India Computer Society Student & Young Professional Congress (AICSSYC) 2026, 
            we are committed to protecting your personal information and your right to privacy.
          </p>
          <h2 className="font-display text-2xl text-ivory mt-10 mb-4">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when registering for the 
            congress, expressing an interest in obtaining information about us or our events, or otherwise 
            contacting us.
          </p>
          <h2 className="font-display text-2xl text-ivory mt-10 mb-4">How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes 
            described below. We process your personal information for these purposes in reliance on our 
            legitimate business interests, in order to enter into or perform a contract with you, with 
            your consent, and/or for compliance with our legal obligations.
          </p>
          <p>
            For any privacy-related concerns, please contact us at <a href="mailto:ieeecomputersocietysrmist@gmail.com" className="text-gold hover:underline">ieeecomputersocietysrmist@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
