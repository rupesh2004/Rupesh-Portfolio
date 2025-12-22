"use client";

import { motion, useInView, type Easing } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import secrateMgnt from "@/assets/secrate_mgnt.png";
import todo from "@/assets/todo.png";

interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    techStack: string[];
    features: string[];
    challenges: string;
    architecture: string;
    liveUrl: string;
    githubUrl: string;
    category: string;
}

const projects: Project[] = [
    { id: "flipdeals", title: "FlipDeals", shortDescription: "Full-featured MERN e-commerce platform with authentication, payments, and admin dashboard.", fullDescription: "A comprehensive e-commerce solution built from the ground up featuring user authentication, product management, shopping cart, multiple payment options (Stripe & COD), order tracking, and a complete admin dashboard for inventory management.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop", techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Nodemailer", "Tailwind CSS"], features: [ "User authentication with JWT & refresh tokens", "Product catalog with search & filters", "Shopping cart with persistent storage", "Stripe integration for card payments", "Cash on Delivery option", "Order confirmation emails via Nodemailer", "Admin dashboard for product/order management", "Responsive design for all devices" ], challenges: "Implementing secure payment processing while handling edge cases like payment failures, order cancellations, and inventory management in real-time was the main challenge. Solved by implementing idempotent transactions and webhook handlers.", architecture: "Three-tier architecture with React frontend, Express API layer, and MongoDB database. Uses Redux for state management and implements the Repository pattern for data access.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/FlipDeals-React.git", category: "Full Stack" }, { id: "typing-tutor", title: "Typing Tutor", shortDescription: "Multilingual typing practice application with real-time accuracy tracking.", fullDescription: "An interactive typing practice application supporting multiple languages including Hindi, Marathi, and English. Features real-time WPM calculation, accuracy tracking, progressive difficulty levels, and detailed performance analytics.", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=500&fit=crop", techStack: ["Vue.js", "Go (Golang)", "MongoDB","Gin","Lottie", "WebSocket", "Chart.js", "i18n"], features: [ "Support for Hindi, Marathi, and English", "Real-time WPM and accuracy calculation", "Progressive difficulty levels", "User progress tracking", "Performance analytics with charts", "Custom practice text upload", "Keyboard layout visualization", "Leaderboard system" ], challenges: "Handling real-time input validation for non-Latin scripts required implementing custom IME handling and Unicode normalization. The Go backend was optimized for low-latency WebSocket communication.", architecture: "Vue.js SPA with Go backend using Gorilla WebSocket for real-time communication. MongoDB stores user progress and lesson content with proper indexing for fast retrieval.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/typing-tutor", category: "Full Stack" }, { id: "placement-cell", title: "Placement Cell App", shortDescription: "Campus placement management app for students and administrators.", fullDescription: "A comprehensive mobile application for managing campus placements, allowing students to view and apply to companies, track application status, and receive notifications. Admins can manage companies, schedule interviews, and track placement statistics.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop", techStack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "FCM", "Provider","Authentication","Data Management"], features: [ "Student and Admin role-based access", "Company listings with eligibility criteria", "One-click application submission", "Real-time application status updates", "Push notifications for new opportunities", "Interview schedule management", "Placement statistics dashboard", "Resume upload and management" ], challenges: "Implementing complex eligibility filtering based on multiple criteria (CGPA, backlogs, branch) while maintaining good UX. Used Firebase Security Rules extensively for role-based access control.", architecture: "Flutter frontend with Firebase backend (Firestore, Auth, Storage, Functions). Uses Provider for state management and follows clean architecture principles with separate layers for presentation, domain, and data.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/Placement-Cell.git", category: "Mobile App" }, { id: "littlelemon", title: "Little Lemon", shortDescription: "Restaurant website with lunch and dinner slot reservation system.", fullDescription: "Little Lemon is a full-stack restaurant web application that enables users to reserve slots for both lunch and dinner seamlessly. The platform provides an intuitive interface for customers to check availability and make reservations, while the backend ensures proper handling of booking data and validation. The project demonstrates strong integration between frontend interactivity and backend logic.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop", techStack: [ "HTML", "CSS", "JavaScript", "Django", "Python", "SQLite" ], features: [ "Lunch and dinner slot reservation system", "Interactive and responsive restaurant website", "Client-side validation using JavaScript", "Backend reservation handling with Django", "Dynamic slot availability management", "Clean and user-friendly UI design" ], challenges: "Designing a reliable reservation system that prevents double booking and ensures data consistency between frontend interactions and backend storage was the main challenge. This was solved using proper form validation and server-side checks in Django.", architecture: "Client-server architecture with a static frontend built using HTML, CSS, and JavaScript, and a Django backend handling routing, business logic, and database operations.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/Little-Lemon", category: "Full Stack" }, { id: "secretmanagerapis", title: "Secret Manager REST APIs", shortDescription: "Express-based REST API server for managing application secrets securely.", fullDescription: "A Node.js and Express application that exposes REST endpoints for securely storing and retrieving secrets, intended as a backend service for secret management use cases. It uses server-side rendering with EJS views and includes routes to demonstrate basic secret operations.", image: secrateMgnt, techStack: [ "Node.js", "Express", "EJS", "JavaScript", "REST API" ], features: [ "REST endpoints for secret storage and retrieval", "EJS server-side views for interaction/testing", "Lightweight Express setup with middleware", "Error handling and basic routing", "Template views to display stored secret data" ], challenges: "Balancing secure handling of sensitive data with simplicity in a demo API project. Common challenges include preventing accidental logging of secrets and ensuring routes validate input before processing.", architecture: "Single-tier Express server that handles HTTP requests, interactive EJS views for demonstration, and in-memory or simple configuration storage for secrets.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/Secret-Manager-RestAPIs", category: "Backend API" }, { id: "todoapp-android", title: "To-Do App (Android)", shortDescription: "Android task management application with Firebase authentication and cloud-based storage.", fullDescription: "The To-Do App is a full-featured Android application built using Java and XML that enables users to manage their daily tasks efficiently. It leverages Firebase Authentication for secure user login and Firebase Firestore for real-time cloud-based data storage. Users can create, edit, and delete tasks seamlessly, with data synchronized across sessions and devices. The app also integrates external API libraries to enhance performance and user experience, making it a scalable and reliable productivity tool.", image: todo, techStack: [ "Android", "Java", "XML", "Firebase Authentication", "Firebase Firestore", "Firebase Storage", "External API Libraries" ], features: [ "User authentication using Firebase (Email/Password)", "Create, edit, and delete tasks in real time", "Cloud-based task storage using Firestore", "Data persistence across sessions and devices", "Clean and intuitive Android UI using XML layouts", "Secure user-specific task management", "Scalable architecture with Firebase backend" ], challenges: "Implementing real-time synchronization while maintaining data security and performance was a key challenge. This was addressed by structuring Firestore collections per user and applying proper Firebase security rules.", architecture: "MVVM-based Android architecture with Java for business logic, XML for UI layouts, Firebase Authentication for user management, and Firestore as a real-time NoSQL cloud database.", liveUrl: "#", githubUrl: "https://github.com/rupesh2004/To-Do-App", category: "Mobile App" } ];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
        },
    };

    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            My <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A selection of production-ready applications showcasing my
                            full-stack and mobile development expertise.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                    <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-black backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium">
                      {project.category}
                    </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    {/* Tech Stack Preview */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                                            >
                        {tech}
                      </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                                        )}
                                    </div>

                                    {/* View Details */}
                                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                        View Case Study
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ===================== View More Certificate Button ===================== */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mt-16"
                    >
                        <Button variant="hero" size="xl" asChild>
                            <a
                                href="https://github.com/rupesh2004?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                View more projects
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="relative h-64 md:h-80">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium mb-3 inline-block">
                  {selectedProject.category}
                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    {selectedProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {selectedProject.fullDescription}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Key Features
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-2">
                                    {selectedProject.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-muted-foreground text-sm"
                                        >
                                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Architecture
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {selectedProject.architecture}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Challenges & Solutions
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {selectedProject.challenges}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                                <Button variant="hero" asChild>
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Code
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default ProjectsSection;
