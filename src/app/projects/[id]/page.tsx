
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects } from '@/lib/projects-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = allProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <p className="text-lg text-foreground/80">{project.longDescription}</p>
              {project.liveLink !== '#' && (
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            <div>
              {projectImage && (
                <Image
                  src={projectImage.imageUrl}
                  alt={project.title}
                  data-ai-hint={projectImage.imageHint}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
