"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe, Users, TrendingUp, Shield, Target, Building, MapPin } from "lucide-react";

export function AboutSection() {


  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              FAIZAN ENTERPRISES
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-xl">Excellence in Import & Export Since 2022</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-black">
                <Image
                  src="/about us.jpeg"
                  alt="About Faizan Enterprises"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* CEO Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Mr. Faizan Ali</h3>
                        <p className="text-blue-400 font-medium">CEO & Founder</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">Karachi, Pakistan</span>
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
            className="space-y-8"
          >
            {/* Mission Card */}
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Delivering exceptional quality automotive parts, agricultural machinery, and horticultural materials while building lasting international partnerships across global markets.
              </p>
            </div>

            {/* Excellence Card */}
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Excellence</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
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
          <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl p-12 rounded-3xl border border-gray-700 max-w-5xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              OUR VISION
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Expanding into Korea and broader Asian markets, creating import/export opportunities that benefit local and international stakeholders through integrity, dedication, and strategic partnerships.
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400 font-bold">EXCELLENCE</span>
              </div>
              <div className="w-px h-6 bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-purple-400 font-bold">INNOVATION</span>
              </div>
              <div className="w-px h-6 bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                <span className="text-pink-400 font-bold">TRUST</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}