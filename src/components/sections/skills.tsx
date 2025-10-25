"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Cpu, TestTube2, SlidersHorizontal } from "lucide-react";

const skills = {
  "Power & Electronics": {
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["Power System Analysis", "Circuit Design & Simulation", "PCB Layout (Altium, Eagle)", "Control Systems", "Microcontrollers (Arduino, STM32)", "Power Electronics", "AutoCAD Electrical"],
  },
  "Automation & Software": {
    icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["PLC Programming (Siemens, Allen-Bradley)", "HMI/SCADA Development", "MATLAB & Simulink", "Python (for scripting & data analysis)", "C/C++", "VHDL/Verilog", "LabVIEW"],
  },
  "Testing & Methodologies": {
    icon: <TestTube2 className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["Root Cause Analysis", "FAT & SAT Protocols", "Quality Assurance", "Agile Project Management", "Six Sigma (Fundamentals)", "Technical Documentation"],
  },
};


export function SkillsSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="skills"
      className="py-24 sm:py-32 bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Technical Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A specialized skill set for modern electrical and automation engineering challenges.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
             <motion.div variants={itemVariants} key={category}>
                <Card className="h-full bg-background/50 hover:bg-background transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            {icon}
                        </div>
                        <CardTitle className="font-headline text-lg md:text-xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <li key={item} className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
             </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
