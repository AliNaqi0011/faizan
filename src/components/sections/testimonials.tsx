"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechCorp",
    quote: "Ali's expertise was pivotal in launching our flagship product. His architectural insights and leadership are second to none. A true master of his craft.",
    avatar: "JD",
  },
  {
    name: "Jane Smith",
    title: "Project Manager, Innovate LLC",
    quote: "Working with Ali is a masterclass in web development. He consistently delivers high-quality, scalable solutions and elevates the entire team's performance.",
    avatar: "JS",
  },
  {
    name: "Samuel Green",
    title: "Lead Designer, CreativeMinds",
    quote: "His ability to translate complex designs into flawless, performant code is simply remarkable. Ali is the developer you want on your most ambitious projects.",
    avatar: "SG",
  },
  {
    name: "Emily White",
    title: "CTO, StartUpX",
    quote: "Ali's deep experience with Laravel and cloud infrastructure was a game-changer for us. He built a system that's not only robust but also incredibly efficient.",
    avatar: "EW",
  },
];

export function TestimonialsSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-24 sm:py-32 bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What They Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Words from colleagues and clients who have witnessed the impact of my work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-background/50 border-border/50">
                    <CardContent className="p-6 text-lg text-foreground/80 flex-grow">
                      <p className="italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="p-6 pt-0 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </motion.section>
  );
}
