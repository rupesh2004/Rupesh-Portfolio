"use client";

import { motion, useInView, type Easing, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {ExternalLink, X} from "lucide-react";

import devtownFullStack from "@/assets/certifications/devtown-fullstack.png";
import metaKotlin from "@/assets/certifications/meta-kotlin.png";
import metaFullstack from "@/assets/certifications/meta-fullstack.png";
import metaGit from "@/assets/certifications/meta-git.png";
import genAI from "@/assets/certifications/genAi.jpg";
import aiForIndia from "@/assets/certifications/ai-for-india.png";
import {Button} from "@/components/ui/button.tsx";

/* ===================== TYPES ===================== */
interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
}

/* ===================== DATA ===================== */
const certifications: Certification[] = [
    {
        id: "devtown-fullstack-training",
        title: "Certificate of Training – Full Stack Web Development",
        issuer: "DevTown",
        date: "2024-02",
        description:
            "Completed an intensive hands-on training program covering frontend and backend development, RESTful APIs, authentication, databases, and real-world project development using modern web technologies.",
        image: devtownFullStack,
    },
    {
        id: "genAi",
        title: "Generative AI",
        issuer: "RIT, Sangli",
        date: "2024-02",
        description:
            "Completed a Generative AI program covering large language models, prompt engineering, text and image generation, real-world AI use cases, and ethical considerations in AI systems.",
        image: genAI,
    },
    {
        id: "meta-kotlin-advanced",
        title: "Advanced Fundamentals in Kotlin",
        issuer: "Meta",
        date: "2023-12",
        description:
            "Learned advanced Kotlin concepts including OOP, functional programming, collections, null safety, and best practices for Android development.",
        image: metaKotlin,
    },
    {
        id: "meta-fullstack",
        title: "The Full Stack",
        issuer: "Meta",
        date: "2023-11",
        description:
            "Gained a comprehensive understanding of frontend frameworks, backend services, databases, APIs, and deployment workflows.",
        image: metaFullstack,
    },
    {
        id: "meta-git",
        title: "GIT Version Control",
        issuer: "Meta",
        date: "2023-10",
        description:
            "Developed strong proficiency in Git including branching, merging, pull requests, conflict resolution, and collaborative workflows.",
        image: metaGit,
    },
    {
        id: "ai-for-india",
        title: "AI for India 2.0",
        issuer: "Skill India",
        date: "2023-08",
        description:
            "Completed a national-level initiative focused on artificial intelligence fundamentals and real-world applications.",
        image: aiForIndia,
    },
];

/* ===================== COMPONENT ===================== */
export default function CertificationsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as Easing,
            },
        },
    };

    return (
        <>
            {/* ===================== SECTION ===================== */}
            <section id="certifications" className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Header */}
                        <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-wider">
                Achievements
              </span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                                My <span className="gradient-text">Certifications</span>
                            </h2>
                            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                                Verified certifications showcasing my technical expertise and
                                learning journey.
                            </p>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certifications.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                    className="
                    rounded-2xl p-6 bg-card/80 backdrop-blur
                    border border-border shadow-md
                    transition-all duration-300
                  "
                                >
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-40 object-cover rounded-lg cursor-pointer"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setActiveImage(cert.image)}
                                    />

                                    <h3 className="text-lg font-semibold mt-4">{cert.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {cert.issuer}
                                    </p>
                                    <span className="text-xs text-primary font-medium">
                    {cert.date}
                  </span>

                                    <p className="text-sm text-muted-foreground mt-3">
                                        {cert.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* View More Button */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center mt-16"
                        >
                            <Button variant="hero" size="xl" asChild>
                                <a href="https://www.linkedin.com/in/rupeshkumar-bhosale-681b63255/details/certifications/" target="_blank">
                                    View more certificate
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===================== IMAGE MODAL ===================== */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                        onClick={() => setActiveImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-3xl mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveImage(null)}
                                className="absolute -top-4 -right-4 bg-background rounded-full p-2 shadow"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <img
                                src={activeImage}
                                alt="Certificate Preview"
                                className="w-full max-h-[70vh] object-contain rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
