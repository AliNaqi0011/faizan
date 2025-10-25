"use client";

import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
  Settings,
} from "lucide-react";
import {
  LaravelIcon,
  PhpIcon,
  WordpressIcon,
  JQueryIcon,
  FirebaseIcon,
} from "@/components/icons";

const skillsData = [
  { subject: "Laravel", A: 95, fullMark: 100 },
  { subject: "PHP", A: 98, fullMark: 100 },
  { subject: "WordPress", A: 90, fullMark: 100 },
  { subject: "JavaScript", A: 92, fullMark: 100 },
  { subject: "API Integration", A: 95, fullMark: 100 },
  { subject: "Firebase", A: 85, fullMark: 100 },
  { subject: "Cloud", A: 88, fullMark: 100 },
];

const otherSkills = [
  { icon: <LaravelIcon className="h-8 w-8" />, name: "Laravel" },
  { icon: <PhpIcon className="h-8 w-8" />, name: "PHP" },
  { icon: <WordpressIcon className="h-8 w-8" />, name: "WordPress" },
  { icon: <Code className="h-8 w-8" />, name: "JavaScript" },
  { icon: <JQueryIcon className="h-8 w-8" />, name: "jQuery" },
  { icon: <Database className="h-8 w-8" />, name: "API Integrations" },
  { icon: <Cloud className="h-8 w-8" />, name: "Cloud Deployment" },
  { icon: <FirebaseIcon className="h-8 w-8" />, name: "Firebase" },
  { icon: <Smartphone className="h-8 w-8" />, name: "AJAX" },
  { icon: <GitBranch className="h-8 w-8" />, name: "Git" },
  { icon: <Settings className="h-8 w-8" />, name: "CI/CD" },
  { icon: <Code className="h-8 w-8" />, name: "React/Next.js" },
];

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
            A master of the craft, fluent in the languages of the web.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={itemVariants} className="w-full h-[400px] md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <defs>
                  <radialGradient id="skillGradient">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.5}/>
                  </radialGradient>
                </defs>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Proficiency" dataKey="A" stroke="hsl(var(--primary))" fill="url(#skillGradient)" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                  }}
                  labelStyle={{ color: 'hsl(var(--primary))' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div variants={itemVariants} className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <Card key={index} className="flex flex-col items-center justify-center p-4 gap-2 aspect-square bg-background/50 hover:bg-background transition-colors duration-300 group">
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{skill.icon}</div>
                <p className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill.name}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
