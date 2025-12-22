"use client";

import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import {
    Layout,
    Server,
    Smartphone,
    Database,
    Wrench,
} from "lucide-react";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiVuedotjs,
    SiJavascript,
    SiNodedotjs,
    SiGo,
    SiFlutter,
    SiDart,
    SiAndroid,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiGit,
    SiDocker,
    SiPostman,
    SiJquery,
    SiDjango,
    SiPython,
    SiPhp,
    SiCplusplus, SiDsautomobiles, SiLoop, SiListmonk, SiLinear, SiC,

} from "react-icons/si";
import {
    ArrowsRightLeftIcon,
    ShieldCheckIcon,
    CubeIcon,
    ServerStackIcon,
} from "@heroicons/react/24/outline";


const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
        },
    };

    const skillCategories = [
        {
            title: "Frontend",
            color: "primary",
            skills: [
                { name: "React / Next.js", level: 95, logo: SiReact },
                { name: "TypeScript", level: 90, logo: SiTypescript },
                { name: "Tailwind CSS", level: 92, logo: SiTailwindcss },
                { name: "Vue.js", level: 80, logo: SiVuedotjs },
                { name: "JavaScript", level: 85, logo: SiJavascript },
            ],
        },
        {
            title: "Backend",
            color: "accent",
            skills: [
                { name: "Node.js / Express", level: 88, logo: SiNodedotjs },
                { name: "Go (Golang)", level: 75, logo: SiGo },
                { name: "REST APIs", level: 92 , logo : ArrowsRightLeftIcon},
                { name: "Gin", level: 70 , logo : ServerStackIcon},
                { name: "Authentication", level: 85, logo: ShieldCheckIcon },
            ],
        },
        {
            title: "Mobile",
            color: "primary",
            skills: [
                { name: "Flutter", level: 88, logo: SiFlutter },
                { name: "Dart", level: 80, logo: SiDart },
                { name: "Android (Kotlin)", level: 85, logo: SiAndroid },
                { name: "Firebase", level: 90, logo: SiFirebase },
                { name: "App Architecture", level: 82 ,logo :CubeIcon},
            ],
        },
        {
            title: "Database & Tools",
            color: "accent",
            skills: [
                { name: "MongoDB", level: 90, logo: SiMongodb },
                { name: "SQL", level: 78, logo: SiMysql },
                { name: "Git / GitHub", level: 92, logo: SiGit },
                { name: "Docker", level: 72, logo: SiDocker },
                { name: "Postman", level : 89, logo: SiPostman },
            ],
        },
    ];

    const otherSkills = [
        { name: "C", logo: SiC },
        { name: "C++", logo: SiCplusplus },
        { name: "JAVA", logo: SiPostman },
        { name: "Python", logo: SiPython },
        { name: "PHP", logo: SiPhp },
        { name: "C#", logo: SiC },
        { name: "Django", logo: SiDjango },
        { name: "jQuery", logo: SiJquery },
        { name: "DSA", logo: SiLinear },
    ];

    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
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
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Technical Skills
            </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            My <span className="gradient-text">Tech Stack</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A comprehensive toolkit spanning frontend, backend, mobile
                            development, and DevOps.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="glass rounded-2xl p-8 hover-lift"
                            >
                                <h3
                                    className={`text-xl font-semibold mb-6 ${
                                        category.color === "primary"
                                            ? "text-primary"
                                            : "text-accent"
                                    }`}
                                >
                                    {category.title}
                                </h3>

                                <div className="space-y-5">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                        <span className="flex items-center gap-2 text-foreground font-medium text-sm">
                          {skill.logo && (
                              <skill.logo className="w-4 h-4" />
                          )}
                            {skill.name}
                        </span>
                                                <span className="text-muted-foreground text-xs">
                          {skill.level}%
                        </span>
                                            </div>

                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full rounded-full ${
                                                        category.color === "primary"
                                                            ? "bg-gradient-to-r from-primary to-primary/70"
                                                            : "bg-gradient-to-r from-accent to-accent/70"
                                                    }`}
                                                    initial={{ width: 0 }}
                                                    animate={
                                                        isInView
                                                            ? { width: `${skill.level}%` }
                                                            : { width: 0 }
                                                    }
                                                    transition={{
                                                        duration: 1,
                                                        delay:
                                                            categoryIndex * 0.2 + skillIndex * 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Skills */}
                    <motion.div variants={itemVariants} className="mt-12 text-center">
                        <p className="text-muted-foreground mb-6">
                            Also experienced with:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {otherSkills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                                >
                  <skill.logo className="w-4 h-4" />
                                    {skill.name}
                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
