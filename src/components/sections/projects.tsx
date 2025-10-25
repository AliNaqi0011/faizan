"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const allProjects = [
  { id: 1, title: "Enterprise CRM Platform", category: "Laravel", tech: ["Laravel", "Vue.js", "MySQL"], imageId: "project-1", liveLink: "#" },
  { id: 2, title: "E-commerce Marketplace", category: "PHP", tech: ["PHP", "jQuery", "Stripe"], imageId: "project-3", liveLink: "#" },
  { id: 3, title: "Real-time Analytics Dashboard", category: "JS", tech: ["Next.js", "Firebase", "D3.js"], imageId: "project-2", liveLink: "#" },
  { id: 4, title: "Multi-tenant CMS", category: "WordPress", tech: ["WordPress", "ACF", "PHP"], imageId: "project-4", liveLink: "#" },
  { id: 5, title: "SaaS Application for Fintech", category: "Laravel", tech: ["Laravel", "React", "API"], imageId: "project-6", liveLink: "#" },
  { id: 6, title: "Interactive Web App", category: "JS", tech: ["JavaScript", "AJAX", "GSAP"], imageId: "project-5", liveLink: "#" },
];

const filters = ["All", "Laravel", "WordPress", "JS", "PHP"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="projects"
      className="py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase my dedication to quality and innovation.
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-12">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full group bg-card border-border/50 hover:border-primary transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        {projectImage && (
                          <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            data-ai-hint={projectImage.imageHint}
                            width={600}
                            height={400}
                            className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                        </div>
                        <Button variant="link" asChild className="p-0 h-auto text-primary">
                          <Link href={project.liveLink}>
                            View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
