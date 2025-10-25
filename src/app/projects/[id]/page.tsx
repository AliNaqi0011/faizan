
"use client";

import { useEffect } from 'react';
import { notFound, useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { allProjects } from '@/lib/projects-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const project = allProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }
  
  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <motion.div
          className="container mx-auto px-4 md:px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Button variant="ghost" onClick={() => router.push('/#projects')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Button>
          </motion.div>
          
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => <Badge key={t} variant="secondary" className="px-3 py-1 text-xs sm:text-sm">{t}</Badge>)}
              </div>
              <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert text-foreground/80 max-w-none text-justify">
                <p className="whitespace-pre-wrap">{project.longDescription}</p>
              </div>
              
              {project.liveLink && project.liveLink !== '#' && (
                 <motion.div variants={itemVariants}>
                    <Button asChild size="lg">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Visit Live Site <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                    </Button>
                 </motion.div>
              )}
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-2 relative group order-first lg:order-last"
            >
              {projectImage && (
                <div className="lg:sticky lg:top-28">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    data-ai-hint={projectImage.imageHint}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover shadow-2xl relative w-full h-auto"
                    />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
