"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { Calendar, Download } from "lucide-react";
import { Header } from "@/components/Header";
import { StatsSlider } from "@/components/StatsSlider";
import Image from "next/image";

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23333333'%3EPlaceholder%3C/text%3E%3C/svg%3E";

const Dashboard = () => {
  const [kpiData] = useState({
    companiesAdvised: [
      { quarter: "Q1 2023", advised: 20, target: 25 },
      { quarter: "Q2 2023", advised: 35, target: 30 },
      { quarter: "Q3 2023", advised: 50, target: 40 },
      { quarter: "Q4 2023", advised: 65, target: 50 },
    ],
    staffCertified: [
      { name: "Certified", value: 75 },
      { name: "Non-Certified", value: 25 },
    ],
    sustainabilityReports: [
      { month: "Jan", reports: 10 },
      { month: "Feb", reports: 15 },
      { month: "Mar", reports: 20 },
      { month: "Apr", reports: 25 },
      { month: "May", reports: 30 },
      { month: "Jun", reports: 35 },
    ],
    events: [
      { date: "2023-10-15", title: "LkSG Compliance Workshop", city: "Berlin" },
      { date: "2023-11-05", title: "EU Green Deal Seminar", city: "Brussels" },
      { date: "2023-12-10", title: "Sustainability Reporting Training", city: "Hamburg" },
    ],
    implementationStages: [
      { stage: "Strategy", companies: 50 },
      { stage: "Risk Analysis", companies: 40 },
      { stage: "Complaints System", companies: 30 },
      { stage: "Full Implementation", companies: 20 },
    ],
    genderMeasures: [
      { year: 2022, companies: 30 },
      { year: 2023, companies: 75 },
    ],
    reports: [
      { title: "Q2 2023 Sustainability Report", url: "/reports/q2-2023.pdf" },
      { title: "Annual Sustainability Overview 2022", url: "/reports/annual-2022.pdf" },
      { title: "Gender Equality Initiative Results", url: "/reports/gender-equality-2023.pdf" },
    ],
  });

  const COLORS = ["#30B9AD", "#C5A46D", "#1D3F8A", "#4A5568"];

  return (
    <div className="min-h-screen bg-background-primary">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-text-heading mb-8">Association Dashboard</h1>

        <StatsSlider />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Companies Advised on Compliance */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">
              Companies Advised on LkSG/EU Green Deal Compliance
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kpiData.companiesAdvised}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
                <XAxis dataKey="quarter" tick={{ fill: COLORS[3] }} />
                <YAxis tick={{ fill: COLORS[3] }} />
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Legend />
                <Bar dataKey="advised" fill={COLORS[0]} name="Advised" />
                <Bar dataKey="target" fill={COLORS[1]} name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Staff Certified in Sustainability */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">Staff Certified in Sustainability</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={kpiData.staffCertified}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {kpiData.staffCertified.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Sustainability Reports Growth */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">Growth in Sustainability Reports</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={kpiData.sustainabilityReports}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
                <XAxis dataKey="month" tick={{ fill: COLORS[3] }} />
                <YAxis tick={{ fill: COLORS[3] }} />
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Legend />
                <Area type="monotone" dataKey="reports" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-text-heading mb-2">Download Reports</h3>
              <ul className="space-y-2">
                {kpiData.reports.map((report, index) => (
                  <li key={index} className="flex items-center justify-between bg-background-primary p-2 rounded">
                    <span>{report.title}</span>
                    <a
                      href={report.url}
                      download
                      className="flex items-center text-button-primary hover:text-button-accent"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Knowledge-Sharing Events */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">Knowledge-Sharing Events</h2>
            <div className="space-y-4 mb-4">
              {kpiData.events.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background-primary rounded-lg">
                  <Calendar className="w-6 h-6 text-button-primary" />
                  <div>
                    <p className="text-sm text-text-muted">{event.date}</p>
                    <p className="font-medium text-text-body">{event.title}</p>
                    <p className="text-sm text-text-muted">{event.city}</p>
                  </div>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={kpiData.events}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
                <XAxis dataKey="city" tick={{ fill: COLORS[3] }} />
                <YAxis tick={{ fill: COLORS[3] }} />
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Bar dataKey="title" fill={COLORS[1]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* LkSG/Green Deal Framework Implementation */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">LkSG/Green Deal Framework Implementation</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kpiData.implementationStages} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
                <XAxis type="number" tick={{ fill: COLORS[3] }} />
                <YAxis dataKey="stage" type="category" tick={{ fill: COLORS[3] }} />
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Legend />
                <Bar dataKey="companies" fill={COLORS[2]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender-Sensitive Measures Adoption */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-heading mb-4">Gender-Sensitive Measures Adoption</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kpiData.genderMeasures}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
                <XAxis dataKey="year" tick={{ fill: COLORS[3] }} />
                <YAxis tick={{ fill: COLORS[3] }} />
                <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderColor: "#E4E7EB" }} />
                <Legend />
                <Bar dataKey="companies" fill={COLORS[0]} name="Companies Adopting Measures" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Innovative Sustainability Measures */}
        <div className="mt-8 bg-background-secondary p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-text-heading mb-4">Innovative Sustainability Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-text-heading mb-2">Recent Success Stories</h3>
              <ul className="list-disc list-inside space-y-2 text-text-body">
                <li>Company A reduced carbon emissions by 30% through innovative manufacturing processes</li>
                <li>Company B implemented a circular economy model, recycling 90% of their textile waste</li>
                <li>
                  Company C launched a water conservation initiative, reducing water usage by 40% in their production
                  facilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-heading mb-2">Case Studies & Reports</h3>
              <ul className="space-y-2">
                {kpiData.reports.map((report, index) => (
                  <li key={index} className="flex items-center justify-between bg-background-primary p-2 rounded">
                    <span>{report.title}</span>
                    <a
                      href={report.url}
                      download
                      className="flex items-center text-button-primary hover:text-button-accent"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Placeholder for missing image */}
        <div className="mt-8">
          <Image
            src="/images/jacob_arretz.jpg"
            alt="Jacob Arretz"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;