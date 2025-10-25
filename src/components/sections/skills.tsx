"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Server, Wrench, BrainCircuit } from "lucide-react";
import {
  LaravelIcon,
  PhpIcon,
  WordpressIcon,
  JQueryIcon,
  FirebaseIcon,
} from "@/components/icons";

const skills = {
  "Languages & Frameworks": {
    icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["C++", "C", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "NodeJS", "MERN Stack", "SQL", "JUnit", "UML", "Laravel", "PHP", "Vue.js", "Inertia.js"],
  },
  "Tools & Platforms": {
    icon: <Wrench className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["IntelliJ IDEA", "VS Code", "NetBeans", "PyCharm", "StarUML", "Figma", "Canva", "CodeBlocks", "Git", "Linux", "MySQL", "WordPress", "jQuery", "Firebase"],
  },
  "Core Areas": {
    icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />,
    items: ["OOP", "Data Structures", "Software Quality Assurance", "Agile Methodologies", "ER Diagrams", "Version Control"],
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Technical Proficiency</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A versatile skill set for building robust and innovative solutions.
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
                        <CardTitle className="font-headline text-xl md:text-2xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <li key={item} className="bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full">
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
