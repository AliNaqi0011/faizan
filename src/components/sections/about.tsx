"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe, Users, TrendingUp, Shield, Target, Building, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900">
              FAIZAN <span className="text-blue-600">ENTERPRISES</span>
            </h2>
          </div>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 text-lg md:text-xl">Excellence in Import & Export Since 2022</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-20">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative p-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl md:rounded-3xl shadow-2xl">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/about us.jpeg"
                  alt="About Faizan Enterprises"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* CEO Badge */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-6 border border-gray-200 shadow-xl">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg md:text-xl">Mr. Faizan Ali</h3>
                        <p className="text-blue-600 font-medium text-sm md:text-base">CEO & Founder</p>
                        <div className="flex items-center gap-1 md:gap-2 mt-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                          <span className="text-gray-600 text-xs md:text-sm">Karachi, Pakistan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            {/* Mission Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Delivering exceptional quality automotive parts, agricultural machinery, and horticultural materials while building lasting international partnerships across global markets.
              </p>
            </div>

            {/* Excellence Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Karachi Chamber of Commerce member (No. 134246) with extensive market research across Thailand, Malaysia, Cambodia, and Sri Lanka ensuring innovative solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 md:p-12 rounded-2xl md:rounded-3xl border border-gray-200 shadow-xl max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
              OUR VISION
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
              Expanding into Korea and broader Asian markets, creating import/export opportunities that benefit local and international stakeholders through integrity, dedication, and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 font-bold text-sm md:text-base">EXCELLENCE</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 font-bold text-sm md:text-base">INNOVATION</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 font-bold text-sm md:text-base">TRUST</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}