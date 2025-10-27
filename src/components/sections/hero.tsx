"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, Award, Users, Star, CheckCircle, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-100/60 to-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-indigo-100/50 to-blue-100/60 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-20 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-r from-cyan-100/40 to-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Enhanced Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 md:space-y-10 text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold border border-blue-200 shadow-lg"
            >
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
              <span className="hidden sm:inline">Trusted Global Import & Export Partner Since 2022</span>
              <span className="sm:hidden">Trusted Partner Since 2022</span>
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            </motion.div>

            {/* Enhanced Main Heading */}
         <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="space-y-4 text-left sm:text-center lg:text-left"
>
  <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 leading-none">
    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
      Premium
    </span>
    <br />
    <span className="text-gray-800">Auto Parts</span>
    <br />
    <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600 flex items-center justify-start sm:justify-center lg:justify-start gap-2 md:gap-4">
      & Agriculture
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center"
      >
        <Globe className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </motion.div>
    </span>
  </h1>
</motion.div>

            {/* Enhanced Description */}
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-left sm:text-center lg:text-left text-base md:text-2xl text-black leading-relaxed max-w-2xl font-medium"
>
  Connecting global markets with exceptional quality automotive components, agricultural machinery, and horticultural materials. 
  <span className="text-red-600 font-semibold">
    {" "}Your trusted partner for international trade excellence.
  </span>
</motion.p>


            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8"
            >
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                <div className="text-2xl md:text-4xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-semibold">Happy Clients</div>
                <div className="flex justify-center mt-2">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                <div className="text-2xl md:text-4xl font-black text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600 font-semibold">Countries</div>
                <div className="flex justify-center mt-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                <div className="text-2xl md:text-4xl font-black text-blue-600 mb-2">150%</div>
                <div className="text-sm text-gray-600 font-semibold">Growth Rate</div>
                <div className="flex justify-center mt-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col gap-4 md:gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                Explore Products
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-3 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Award className="w-6 h-6" />
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container with Advanced Effects */}
              <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
                <Image
                  src="/revo.jpeg"
                  alt="Faizan Enterprises - Professional Import Export"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20">
                    <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-2">Global Excellence</h3>
                    <p className="text-sm md:text-base text-gray-600 font-medium">Connecting markets worldwide with premium quality products</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-gradient-to-r from-white to-blue-50 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-blue-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-lg md:text-xl text-gray-900">Certified Partner</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">KCCI Member #134246</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-r from-white to-purple-50 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-purple-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-lg md:text-xl text-gray-900">Quality Assured</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Premium Products Only</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-4 w-6 h-6 md:w-8 md:h-8 border-2 border-blue-400 rounded-full opacity-60"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -left-4 w-4 h-4 md:w-6 md:h-6 border-2 border-purple-400 rounded-full opacity-40"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}