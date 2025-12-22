"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/Rupeshkumar_Bhosale.pdf";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name : "Certifications", href: "#certifications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map((link) => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (!element) continue;
                const rect = element.getBoundingClientRect();
                if (rect.top <= 120) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
                        : "py-6 bg-transparent"
                }`}
            >
                <div className="container px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* LOGO */}
                        <motion.a
                            href="#home"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xl font-bold gradient-text cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("#home");
                            }}
                        >
                            RB<span className="text-foreground">.</span>
                        </motion.a>

                        {/* DESKTOP NAV */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        whileHover={{ y: -2 }}
                                        className={`relative text-sm font-medium transition-colors ${
                                            isActive
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {link.name}

                                        {/* Animated underline */}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: isActive ? "100%" : 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.25 }}
                                        />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* DESKTOP RESUME */}
                        <div className="hidden md:block">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="hero" size="sm" asChild>
                                    <a
                                        href={resumePdf}
                                        download="Rupesh_Bhosale_Resume.pdf"
                                        className="relative overflow-hidden"
                                    >
                                        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
                                        <Download className="w-4 h-4 mr-1" />
                                        Resume
                                    </a>
                                </Button>
                            </motion.div>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-foreground"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <motion.div
                            initial={{ y: -30 }}
                            animate={{ y: 0 }}
                            exit={{ y: -30 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <nav className="relative flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    className={`text-2xl font-medium ${
                                        activeSection === link.href.substring(1)
                                            ? "text-primary"
                                            : "text-foreground"
                                    }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* MOBILE RESUME */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                            >
                                <Button variant="hero" size="lg" asChild>
                                    <a
                                        href={resumePdf}
                                        download="Rupesh_Bhosale_Resume.pdf"
                                    >
                                        <Download className="w-4 h-4 mr-1" />
                                        Download Resume
                                    </a>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
