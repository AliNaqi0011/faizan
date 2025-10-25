"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, Tractor } from "lucide-react";

export function ProductsSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="products"
      className="py-24 sm:py-32 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our diverse range of high-quality imported products.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.div
                variants={buttonVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb), 0.3)" }}
                whileTap={{ scale: 0.95 }}
            >
                <Button size="lg" className="h-16 text-lg w-64">
                    <Car className="mr-4 h-6 w-6" />
                    Auto Parts
                </Button>
            </motion.div>
            <motion.div
                variants={buttonVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb), 0.3)" }}
                whileTap={{ scale: 0.95 }}
            >
                <Button size="lg" className="h-16 text-lg w-64">
                    <Tractor className="mr-4 h-6 w-6" />
                    Agriculture
                </Button>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
