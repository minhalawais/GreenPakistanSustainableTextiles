import { Header } from "@/components/header"
import { TitleSection } from "@/components/title-section"
import { DurationBanner } from "@/components/duration-banner"
import { AdvisoryPanel } from "@/components/advisory-panel"
import  MilestoneRoad  from "@/components/project-roadmap"
import { ActivityTimeline } from "@/components/activity-timeline"
import { ProjectOutcomes } from "@/components/project-outcomes"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <TitleSection />
      <DurationBanner />

      {/* Set max width to 95% and center the content */}
      <div className="max-w-[95%] mx-auto py-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* AdvisoryPanel - 1/4 width */}
        <div className="lg:col-span-1">
          <AdvisoryPanel />
        </div>

        {/* ProjectRoadmap and ProjectOutcomes - 2/4 width */}
        <div className="lg:col-span-2">
          <MilestoneRoad />
          <ProjectOutcomes />
        </div>

        {/* ActivityTimeline - 1/4 width */}
        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
      </div>

      <Footer />
    </div>
  )
}