import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { CapacityBuildingPanel } from "@/components/capacity-building-panel"
import MilestoneRoad from "@/components/project-roadmap"
import { ProjectOutcomes } from "@/components/project-outcomes"
import { Footer } from "@/components/footer"
import {GermanImporterSection} from "@/components/about-german-importers"
import {FlowOfActivities} from "@/components/flow-of-activities"
import { NominatedAssociations } from "@/components/nominated-associations"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <HeroSection />

      {/* Capacity Building Panel - Full Width */}
      <CapacityBuildingPanel />
      <NominatedAssociations />

      <ProjectOutcomes />
      <GermanImporterSection/>
      
        {/* Project Roadmap and Outcomes - 2/4 width */}
        <MilestoneRoad />


      <Footer />
    </div>
  )
}

