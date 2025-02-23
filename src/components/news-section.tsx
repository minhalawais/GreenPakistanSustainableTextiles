import { FileText, ArrowRight, Clock } from "lucide-react";

const news = [
  {
    title: "Sustainable Manufacturing Initiative Launch",
    date: "March 15, 2024",
    summary: "New program launched to reduce carbon footprint in manufacturing.",
    pdf: "/pdfs/sustainable-manufacturing.pdf",
  },
  {
    title: "Gender Equality Program Success",
    date: "March 10, 2024",
    summary: "50% increase in women leadership roles across member companies.",
    pdf: "/pdfs/gender-equality-report.pdf",
  },
  {
    title: "LkSG Compliance Achievement",
    date: "March 5, 2024",
    summary: "80% of member companies now fully compliant with LkSG requirements.",
    pdf: "/pdfs/lksg-compliance.pdf",
  },
];

export function NewsSection() {
  return (
    <div className="h-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="border-b border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Latest Sustainability News
        </h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {news.map((item, i) => (
            <div 
              key={i} 
              className="p-4 rounded-lg border border-gray-100 hover:border-blue-100 transition-all duration-200 hover:shadow-sm bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.date}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.summary}
              </p>
              
              <div className="flex items-center gap-3">
                <button 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <button 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 border border-gray-200 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;