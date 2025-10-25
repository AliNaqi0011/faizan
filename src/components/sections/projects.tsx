"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { allProjects } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export function ProjectsSection() {
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
        
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map(project => {
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
                  <Link href={`/projects/${project.id}`} className="block h-full">
                    <Card className="overflow-hidden h-full group bg-card border-border/50 hover:border-primary transition-all duration-300">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative overflow-hidden">
                          {projectImage && (
                            <Image
                              src={projectImage.imageUrl}
                              alt={project.title}
                              data-ai-hint={projectImage.imageHint}
                              width={600}
                              height={400}
                              className="object-cover w-full h-48 md:h-60 transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-4 md:p-6 flex flex-col flex-grow">
                          <h3 className="text-lg md:text-xl font-bold font-headline mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                          <div className="flex flex-wrap gap-2 my-4">
                            {project.tech.slice(0, 4).map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                          </div>
                          <div className="text-primary flex items-center mt-auto text-sm font-semibold">
                              View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </motion.section>
  );
}
