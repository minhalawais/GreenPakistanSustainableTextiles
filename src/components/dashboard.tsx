"use client"

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventCalendar } from "@/components/calendar-view";
import { NewsSection } from "@/components/news-section";
import { CertifiedStaff } from "@/components/certified-staff";
import { SustainabilityMeasures } from "@/components/sustainability-measures";
import { Header } from "@/components/header"

// Theme configuration
const theme = {
  colors: {
    primary: "#30B9AD",
    secondary: "#1D3F8A",
    accent: "#C5A46D",
    dark: "#125643",
    background: "bg-gray-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-500",
      accent: "text-gray-600"
    }
  },
  spacing: {
    container: "p-8",
    section: "mb-8",
    grid: "gap-6"
  }
};

// Stats data component with TypeScript-like prop types
const StatCard = ({ label, value, color }) => (
  <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-32">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="text-xl font-bold" style={{ color }}>
        {value}
      </p>
    </CardContent>
  </Card>
);

const SlideIndicator = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-2 rounded-full transition-all duration-300 ${
      active ? "bg-primary w-4" : "bg-gray-300 hover:bg-gray-400 w-2"
    }`}
  />
);

const ComplianceChart = ({ data }) => (
  <Card className={theme.spacing.section}>
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">Companies Advised on LkSG/EU Green Deal</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[data]} layout="vertical">
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "0.5rem",
                padding: "0.5rem"
              }}
            />
            <Bar dataKey="target" fill="#E2E8F0" radius={[0, 4, 4, 0]} name="Target" />
            <Bar dataKey="advised" fill={theme.colors.primary} radius={[0, 4, 4, 0]} name="Advised" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Memoized data
  const stats = useMemo(() => [
    {
      label: "Association Name",
      value: "PSGMEA",
      color: theme.colors.primary,
    },
    {
      label: "Total Member Companies",
      value: "550+",
      color: theme.colors.secondary,
    },
    {
      label: "Total Factories Represented",
      value: "1,000+",
      color: theme.colors.accent,
    },
    {
      label: "Total Employees in Member Companies",
      value: "550+",
      color: theme.colors.dark,
    },
    {
      label: "Annual Revenue of Member Companies",
      value: "$58 Million",
      color: theme.colors.primary,
    },
    {
      label: "Major Export Destinations",
      value: "Germany, EU, USA",
      color: theme.colors.secondary,
    },
    {
      label: "Key Products Manufactured",
      value: "Apparel, Footwear, Accessories",
      color: theme.colors.accent,
    },
    {
      label: "Current Sustainability Initiatives",
      value: "5 Major Programs",
      color: theme.colors.dark,
    },
  ], []);

  const totalSlides = Math.ceil(stats.length / 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const currentStats = stats.slice(currentSlide * 4, currentSlide * 4 + 4);

  return (
    <div className={`min-h-screen bg-white flex flex-col ${theme.colors.background} px-8`}>
            <Header />

     <div className="text-center space-y-2 mt-8">
        <h1 className="text-3xl font-bold text-gray-900">
          PSGMEA Association Dashboard
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Stats Carousel */}
      <div className="mb-12 mt-8">
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {currentStats.map((stat, i) => (
                  <StatCard key={i} {...stat} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <SlideIndicator
                key={i}
                active={i === currentSlide}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Charts and Metrics */}
      <ComplianceChart data={{ advised: 25, target: 15 }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CertifiedStaff />
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Gender-Sensitive Measures Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { year: 2022, before: 30, after: 45 },
                  { year: 2023, before: 45, after: 65 },
                  { year: 2024, before: 65, after: 85 },
                ]}
              >
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="before"
                  stroke={theme.colors.secondary}
                  strokeWidth={2}
                  name="Before Implementation"
                />
                <Line
                  type="monotone"
                  dataKey="after"
                  stroke={theme.colors.primary}
                  strokeWidth={2}
                  name="After Implementation"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Sections */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Innovative Sustainability Measures
        </h2>
        <SustainabilityMeasures />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventCalendar />
        <NewsSection />
      </div>
    </div>
  );
};

export default Dashboard;