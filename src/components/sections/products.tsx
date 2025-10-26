"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Tractor, Sparkles } from "lucide-react";
import { autoParts, type AutoPart } from "@/lib/autoparts-data";
import { agriculturalProducts, type AgriculturalProduct } from "@/lib/agriculture-data";
import Image from "next/image";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<'autoparts' | 'agriculture'>('autoparts');

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="products"
      className="py-24 sm:py-32 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Explore our diverse range of high-quality imported products.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.div
                variants={buttonVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                <Button 
                  size="lg" 
                  className={`h-20 text-xl w-72 font-bold relative overflow-hidden transition-all duration-500 ${
                    activeCategory === 'autoparts' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setActiveCategory('autoparts')}
                >
                    <Car className="mr-4 h-8 w-8" />
                    Premium Auto Parts
                    {activeCategory === 'autoparts' && <Sparkles className="ml-3 h-6 w-6 animate-pulse" />}
                </Button>
            </motion.div>
            <motion.div
                variants={buttonVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button 
                  size="lg" 
                  className={`h-20 text-xl w-72 font-bold relative overflow-hidden transition-all duration-500 ${
                    activeCategory === 'agriculture' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setActiveCategory('agriculture')}
                >
                    <Tractor className="mr-4 h-8 w-8" />
                    Agriculture Solutions
                    {activeCategory === 'agriculture' && <Sparkles className="ml-3 h-6 w-6 animate-pulse" />}
                </Button>
            </motion.div>
        </div>

        {activeCategory === 'autoparts' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {autoParts.map((part, index) => (
              <motion.div 
                key={part.id} 
                variants={cardVariants}
                whileHover={{ y: -12, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-blue-600 text-white font-bold px-3 py-1 shadow-lg">
                        {part.code}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
                    
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {part.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-medium border-blue-200 text-blue-700 bg-blue-50">
                          {part.category}
                        </Badge>
                        <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {part.description}
                    </p>
                    
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-xs font-medium text-gray-500">Premium Quality</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeCategory === 'agriculture' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {agriculturalProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                variants={cardVariants}
                whileHover={{ y: -12, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-blue-600 text-white font-bold px-3 py-1 shadow-lg">
                        {product.code}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
                    
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-medium border-blue-200 text-blue-700 bg-blue-50">
                          {product.category}
                        </Badge>
                        <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-xs font-medium text-gray-500">Premium Quality</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}