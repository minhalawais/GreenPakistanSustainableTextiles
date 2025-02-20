"use client"
import { useState } from "react";
import Image from "next/image";
import { Building2, Leaf, TrendingUp, LogIn, X } from "lucide-react";

export function HeroSection() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Stronger Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/green_pakistan.jpeg"
          alt="Aerial view of green forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Association Login */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={openLoginModal}
          className="group flex items-center gap-2 bg-emerald-600/30 hover:bg-emerald-500/40 rounded-full px-4 py-2 transition-all duration-300 border border-emerald-400/20 hover:border-emerald-300/30 shadow-lg hover:shadow-emerald-500/20"
        >
          <LogIn className="w-5 h-5 text-emerald-100 group-hover:text-white transition-colors duration-300" />
          <span className="text-sm font-medium text-emerald-100 group-hover:text-white transition-colors duration-300">
            Association Login
          </span>
        </button>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-gradient-to-br from-emerald-600/90 to-emerald-800/90 rounded-xl p-8 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-emerald-500/20 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-emerald-100 hover:text-white" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Association Login
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-100"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-emerald-100"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-emerald-500/30 hover:bg-emerald-500/40 rounded-lg text-white font-medium transition-all duration-300 border border-emerald-400/20 hover:border-emerald-300/30 shadow-lg hover:shadow-emerald-500/20"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 text-white">
        {/* Main Content */}
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center justify-center gap-4">
            GREEN PAKISTAN PROJECT
            <Image
              className="rounded-sm shadow-xl"
              src="/images/pakistan_logo.jpg"
              alt="Pakistan Flag"
              width={48}
              height={32}
              quality={100}
            />
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 font-medium">
            Pakistan&apos;s Gateway to 300+ German Brands &amp; Companies
          </p>

          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            By aligning with global sustainability and compliance standards (LkSG
            &amp; EU Green Deal), this project is not just about meeting
            regulations—it&apos;s about unlocking new export markets, increasing
            trade potential, and building long-term partnerships with European
            buyers.
          </p>

        </div>

        {/* Enhanced Feature Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { icon: Building2, text: "Capacity Building" },
            { icon: Leaf, text: "Sustainability & Compliance" },
            { icon: TrendingUp, text: "Strengthening Trade" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-emerald-600/30 to-emerald-800/30
                         hover:from-emerald-500/40 hover:to-emerald-700/40
                         rounded-xl p-5 transition-all duration-300
                         border border-emerald-400/20 hover:border-emerald-300/30
                         shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-emerald-400/20 p-3 rounded-full group-hover:bg-emerald-300/30 transition-colors duration-300">
                  <feature.icon
                    className="w-8 h-8 text-emerald-100 group-hover:text-white 
                              transition-colors duration-300"
                  />
                </div>
                <p className="font-medium text-lg tracking-wide text-center text-white group-hover:text-emerald-100 transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}