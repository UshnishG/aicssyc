import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/site/SiteNav'
import { Footer } from '@/components/site/Footer'
import { AmbassadorDashboard } from '@/components/ambassador/AmbassadorDashboard'

export const Route = createFileRoute('/ambassador')({
  component: AmbassadorRoute,
})

function AmbassadorRoute() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <AmbassadorDashboard />
      </main>
      <Footer />
    </div>
  )
}

