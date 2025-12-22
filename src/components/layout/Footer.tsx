import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/rupesh2004", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rupeshkumar-bhosale-681b63255/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:bhosalerupesh67@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              RB<span className="text-foreground">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {new Date().getFullYear()} Rupeshkumar Bhosale. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>in India</span>
          </div>
        </div>

        {/* Scroll to top */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-6 -top-6 p-3 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_hsl(175_80%_50%/0.3)] hover:shadow-[0_0_30px_hsl(175_80%_50%/0.4)] transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
