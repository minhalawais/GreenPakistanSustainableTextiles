import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  title: string;
  date: string;
  location: string;
  type: "upcoming" | "past";
}

const events: Event[] = [
  {
    title: "LkSG Compliance Workshop",
    date: "2024-03-25",
    location: "Berlin, Germany",
    type: "upcoming",
  },
  {
    title: "EU Green Deal Seminar",
    date: "2024-04-15",
    location: "Brussels, Belgium",
    type: "upcoming",
  },
  {
    title: "Sustainability Forum",
    date: "2024-02-10",
    location: "Hamburg, Germany",
    type: "past",
  },
];

export function EventCalendar() {
  const [selectedType, setSelectedType] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = events.filter((event) =>
    selectedType === "all" ? true : event.type === selectedType
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString("en-US", { day: "numeric" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.toLocaleDateString("en-US", { year: "numeric" }),
    };
  };

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            Knowledge-Sharing Events
          </CardTitle>
          <div className="flex gap-2">
            {["all", "upcoming", "past"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedType === type
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4">
          {filteredEvents.map((event, i) => {
            const formattedDate = formatDate(event.date);
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all bg-white hover:shadow-md"
              >
                <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <span className="text-2xl font-bold">{formattedDate.day}</span>
                  <span className="text-sm">{formattedDate.month}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.type === "upcoming" ? (
                        <span className="text-green-600 font-medium">Upcoming</span>
                      ) : (
                        <span className="text-gray-500">Past</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default EventCalendar;