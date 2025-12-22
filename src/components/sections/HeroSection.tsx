"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const fullName = "Rupeshkumar";

const HeroSection = () => {
    const [typedName, setTypedName] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    /* Typing effect */
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setTypedName(fullName.slice(0, index + 1));
            index++;
            if (index === fullName.length) {
                clearInterval(typingInterval);
            }
        }, 120);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

            {/* Animated orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[80px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Status badge */}
                    <motion.div variants={itemVariants} className="mb-6">

                    </motion.div>

                    {/* Heading with typing effect */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                    >
                        <span className="text-foreground">Hi, I'm </span>
                        <span className="gradient-text">
              {typedName}
                            <span className="ml-1">
                {showCursor ? "|" : "\u00A0"}
              </span>
            </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              <span className="text-foreground font-medium">
                Full Stack Developer
              </span>
                            <span className="mx-3 text-primary">|</span>
                            <span>Android & Flutter Expert</span>
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Building scalable web and mobile applications with modern technologies.
                        Passionate about creating exceptional user experiences and writing clean,
                        maintainable code.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button variant="hero" size="xl" asChild>
                            <a href="#projects">
                                View My Work
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button variant="heroOutline" size="xl" asChild>
                            <a href="#contact">
                                Get In Touch
                                <Mail className="w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4"
                    >
                        {[
                            { icon: Github, href: "https://github.com/rupesh2004", label: "GitHub" },
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/in/rupeshkumar-bhosale-681b63255/",
                                label: "LinkedIn",
                            },
                            { icon: Mail, href: "mailto:bhosalerupesh67@gmail.com", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}

                {/*<motion.div*/}
                {/*    animate={{ y: [-10, 10, -10] }}*/}
                {/*    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}*/}
                {/*    className="absolute bottom-8 left-1/2 -translate-x-1/2"*/}
                {/*>*/}
                {/*    <a*/}
                {/*        href="#about"*/}
                {/*        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"*/}
                {/*    >*/}
                {/*        <span className="text-xs uppercase tracking-widest">Scroll</span>*/}
                {/*        <ArrowDown className="w-4 h-4" />*/}
                {/*    </a>*/}
                {/*</motion.div>*/}

            </div>
        </section>
    );
};

export default HeroSection;
