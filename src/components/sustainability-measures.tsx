import { Download, ArrowRight, CheckCircle, FileText, Droplet, Recycle } from "lucide-react";

const successStories = [
  {
    company: "Factory A",
    title: "Carbon Emission Reduction",
    description: "Reduced carbon emissions by 30% through innovative manufacturing processes",
    icon: CheckCircle,
    color: "#34D399",
  },
  {
    company: "Factory B",
    title: "Circular Economy Model",
    description: "Implemented a circular economy model, recycling 90% of their textile waste",
    icon: Recycle,
    color: "#60A5FA",
  },
  {
    company: "Factory C",
    title: "Water Conservation Initiative",
    description: "Reduced water usage by 40% in their production facilities",
    icon: Droplet,
    color: "#818CF8",
  },
];

const reports = [
  {
    title: "Q2 2023 Sustainability Report",
    type: "PDF",
    size: "2.4 MB",
    url: "#",
  },
  {
    title: "Annual Sustainability Overview 2022",
    type: "PDF",
    size: "3.8 MB",
    url: "#",
  },
  {
    title: "Gender Equality Initiative Results",
    type: "PDF",
    size: "1.7 MB",
    url: "#",
  },
];

export function SustainabilityMeasures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            Recent Success Stories
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-blue-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-lg transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: `${story.color}15` }}
                  >
                    <story.icon
                      className="w-6 h-6"
                      style={{ color: story.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{story.company}</h3>
                </div>
                <h4 className="font-medium text-gray-800 mb-3">{story.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            Case Studies & Reports
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                      <span className="font-medium">{report.type}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{report.size}</span>
                    </p>
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors">
                      <Download className="mr-2 w-4 h-4" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityMeasures;