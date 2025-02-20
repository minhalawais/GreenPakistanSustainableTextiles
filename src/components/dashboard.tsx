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
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { Calendar, CheckCircle, FileText, Users } from "lucide-react";

const Dashboard = () => {
  // Dummy data for KPIs
  const [kpiData] = useState({
    companiesAdvised: [
      { quarter: "Q1 2023", advised: 20 },
      { quarter: "Q2 2023", advised: 35 },
      { quarter: "Q3 2023", advised: 50 },
      { quarter: "Q4 2023", advised: 65 },
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
      { date: "2023-10-15", title: "LkSG Compliance Workshop" },
      { date: "2023-11-05", title: "EU Green Deal Seminar" },
      { date: "2023-12-10", title: "Sustainability Reporting Training" },
    ],
  });

  const COLORS = ["#30B9AD", "#C5A46D"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Association Dashboard</h1>

      {/* Key Achievements Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Member Companies</h2>
          <p className="text-3xl font-bold text-gray-900">300+</p>
          <p className="text-sm text-gray-500">Aligned with sustainability policies</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Certified Staff</h2>
          <p className="text-3xl font-bold text-gray-900">75%</p>
          <p className="text-sm text-gray-500">Trained in sustainability</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Sustainability Reports</h2>
          <p className="text-3xl font-bold text-gray-900">120</p>
          <p className="text-sm text-gray-500">Prepared by member companies</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Events Held</h2>
          <p className="text-3xl font-bold text-gray-900">15+</p>
          <p className="text-sm text-gray-500">Knowledge-sharing events</p>
        </div>
      </div>

      {/* KPI Progress Tracking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Companies Advised on Compliance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Companies Advised on LkSG/EU Green Deal Compliance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={kpiData.companiesAdvised}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="advised" fill="#30B9AD" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Staff Certified in Sustainability */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Staff Certified in Sustainability
          </h2>
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
              >
                {kpiData.staffCertified.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sustainability Reports Growth */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Growth in Sustainability Reports
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={kpiData.sustainabilityReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="reports" stroke="#30B9AD" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Knowledge-Sharing Events */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Knowledge-Sharing Events
        </h2>
        <div className="space-y-4">
          {kpiData.events.map((event, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="font-medium text-gray-800">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;