"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us – Faizan Enterprises</h2>
            <div className="text-lg text-foreground/80 space-y-4 text-justify">
                <p>
                Faizan Enterprises, established in 2022 and headquartered in Karachi, Pakistan, is a professionally registered import and export company engaged in the trade of automotive parts, agricultural machinery, and horticultural materials. Since its inception, the company has been driven by a clear mission — to deliver high-quality products, ensure customer satisfaction, and build lasting business relationships across international markets.
                </p>
                <p>
                Under the visionary leadership of Mr. Faizan Ali (CEO), Faizan Enterprises has developed a strong reputation for reliability, integrity, and commitment. As an active member of the Karachi Chamber of Commerce & Industry (Membership No. 134246), the company operates with full compliance to national and international trade standards, ensuring transparency and trust in every transaction.
                </p>
                <p>
                Over the years, Faizan Enterprises has expanded its business network through frequent market research visits and trade interactions in various Asian countries including Thailand, Malaysia, Cambodia, and Sri Lanka. These visits have strengthened our market understanding and enabled us to identify and introduce innovative, high-performance products suited to our clients’ evolving needs.
                </p>
                <p>
                Our product portfolio covers a diverse range of auto parts, agricultural tools and equipment, and horticulture materials that meet modern industry demands. Whether it’s sourcing durable automotive components or importing advanced agricultural solutions, we focus on quality assurance, timely delivery, and competitive pricing.
                </p>
                <p>
                At Faizan Enterprises, we firmly believe that business growth is achieved through integrity, dedication, and strong partnerships. Our goal is to expand further into new markets such as Korea and the broader Asian region, exploring import/export opportunities that benefit both local and international stakeholders.
                </p>
                <p>
                We remain committed to excellence, innovation, and trust — fulfilling every promise we make to our clients and partners.
                </p>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
