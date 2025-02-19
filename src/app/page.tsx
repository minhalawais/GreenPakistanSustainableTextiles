import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { AdvisoryPanel } from "@/components/advisory-panel"
import { CapacityBuildingPanel } from "@/components/capacity-building-panel"
import MilestoneRoad from "@/components/project-roadmap"
import { ActivityTimeline } from "@/components/activity-timeline"
import { ProjectOutcomes } from "@/components/project-outcomes"
import { Footer } from "@/components/footer"
import {GermanImporterSection} from "@/components/about-german-importers"
import {FlowOfActivities} from "@/components/flow-of-activities"
export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <HeroSection />

      {/* Capacity Building Panel - Full Width */}
      <CapacityBuildingPanel />
      <ProjectOutcomes />
      <GermanImporterSection/>
      
        {/* Project Roadmap and Outcomes - 2/4 width */}
        <MilestoneRoad />
        <FlowOfActivities/>


      <Footer />
    </div>
  )
}

