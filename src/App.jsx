import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronUp,
  Code2,
  Cpu,
  DatabaseZap,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Hand,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic,
  Network,
  Quote,
  Rocket,
  Send,
  ServerCog,
  Sparkles,
  TerminalSquare,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "AI Lab", "Services", "Testimonials", "Contact"];
const badges = ["Web Developer", "AI Builder", "Data Science", "Coding Instructor", "Problem Solver"];

const highlights = [
  { icon: Code2, title: "Software Development", text: "Clean web systems with polished interfaces, stable architecture, and business-ready workflows." },
  { icon: BrainCircuit, title: "AI & Data Science", text: "Practical AI concepts, analytics, automation, dashboards, and smart learning tools." },
  { icon: GraduationCap, title: "Teaching & Mentorship", text: "Programming guidance that makes complex technical topics simple, useful, and project-based." },
  { icon: Zap, title: "Problem Solving", text: "Focused engineering for business, education, inventory, automation, and productivity challenges." },
];

const skillGroups = [
  { title: "Frontend", icon: Layers3, skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", icon: ServerCog, skills: ["Python", "Django", "Flask", "REST APIs", "SQLite", "MySQL"] },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow basics", "OpenCV", "MediaPipe", "Hugging Face APIs"],
  },
  { title: "Tools", icon: Cpu, skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Google Colab"] },
];

const projects = [
  {
    title: "AI Exam Generator",
    status: "Featured AI",
    type: "exam",
    description:
      "An AI-powered system that allows teachers to input curriculum content and generate exam questions automatically with authentication, curriculum handling, and exam management.",
    tags: ["Django", "AI", "REST API", "Authentication", "Education Tech"],
    icon: Bot,
  },
  {
    title: "Inventory & Sales Management System",
    status: "Dashboard",
    type: "inventory",
    description:
      "A business web app for shops, bars, wines, and spirits stores to track stock, record sales, monitor low-stock products, view analytics, and prepare demand prediction.",
    tags: ["React", "Dashboard", "Data Analytics", "Business App"],
    icon: BarChart3,
  },
  {
    title: "Smart Voice Assistant",
    status: "AI Assistant",
    type: "voice",
    description:
      "A lightweight AI assistant supporting speech recognition, sentiment analysis, simple commands, and translation features.",
    tags: ["Python", "SpeechRecognition", "TextBlob", "Translation", "AI"],
    icon: Mic,
  },
  {
    title: "Hand Gesture Control System",
    status: "Computer Vision",
    type: "gesture",
    description:
      "A computer vision project that detects hand gestures using OpenCV and MediaPipe for gesture-based controls and interactive AI demos.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    icon: Hand,
  },
  {
    title: "AI Learning Dashboard",
    status: "Education AI",
    type: "learning",
    description:
      "A dashboard concept for students and teachers to track learning progress, performance trends, and AI-generated insights.",
    tags: ["React", "AI", "Dashboard", "Education"],
    icon: DatabaseZap,
  },
];

const aiFeatures = ["AI Exam Generator", "Voice Assistant", "Sentiment Analysis", "Computer Vision", "Predictive Analytics", "AI Dashboards", "Automation Tools"];

const services = [
  { icon: Code2, title: "Website Design & Development", text: "Premium responsive websites with refined UI, strong performance, and clean implementation." },
  { icon: BriefcaseBusiness, title: "Business Web Applications", text: "Inventory systems, dashboards, admin workflows, and tools that improve operations." },
  { icon: Bot, title: "AI-Powered Tools", text: "AI features for generation, analysis, classification, automation, and smarter user workflows." },
  { icon: BarChart3, title: "Data Dashboards", text: "Readable analytics for sales, learning progress, performance, and decision support." },
  { icon: GraduationCap, title: "Student Coding Mentorship", text: "Project-based mentorship for learners who want practical programming confidence." },
  { icon: ServerCog, title: "API Integration", text: "REST APIs, backend connections, auth flows, third-party services, and data sync." },
  { icon: Sparkles, title: "Portfolio & Landing Page Design", text: "Personal brands and product pages that look sharp, modern, and credible." },
];

const testimonials = [
  { quote: "Martin explains complex coding concepts in a simple and practical way.", role: "Student" },
  { quote: "His projects are clean, modern, and focused on solving real problems.", role: "Client" },
  { quote: "He combines software development, teaching, and AI knowledge very well.", role: "Collaborator" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function anchorFor(label) {
  return `#${label.toLowerCase().replace(/\s+/g, "-")}`;
}

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="section-title font-black tracking-normal text-white">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{intro}</p>}
    </div>
  );
}

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
      {children}
    </motion.section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.toLowerCase().replace(/\s+/g, "-"))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/20 bg-[#050816]/72 shadow-[0_12px_55px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(0,245,255,0.18)] transition group-hover:scale-105">
            <Code2 size={22} />
          </span>
          <span>
            <span className="block text-base font-black text-white">Code Lord</span>
            <span className="block text-xs font-semibold text-slate-400">Martin Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.toLowerCase().replace(/\s+/g, "-");
            const isActive = active === id;
            return (
              <a
                key={link}
                href={anchorFor(link)}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                  isActive ? "bg-cyan-300/15 text-cyan-100 shadow-[inset_0_0_18px_rgba(0,245,255,0.08)]" : "text-slate-400 hover:bg-white/6 hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        <a href="#contact" className="glow-button hidden rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-black text-[#050816] transition hover:-translate-y-0.5 lg:inline-flex">
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/40 lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-cyan-300/15 bg-[#070b1f]/96 px-5 py-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navLinks.map((link) => (
                <a key={link} href={anchorFor(link)} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-100">
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-black text-[#050816]">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroVisual() {
  const codeLines = [
    "const mission = 'intelligent systems';",
    "build({ business, education, automation });",
    "ai.generate(exams).ship();",
    "dashboard.predict(nextDecision);",
  ];

  return (
    <motion.div className="relative min-h-[540px] w-full sm:min-h-[600px]" initial={{ opacity: 0, scale: 0.95, rotateX: 8 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}>
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/5 shadow-[0_0_140px_rgba(0,245,255,0.2)]" />
      <div className="neural-card absolute inset-x-2 top-8 overflow-hidden rounded-2xl p-5 sm:inset-x-8 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_16px_rgba(251,113,133,0.55)]" />
            <span className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.55)]" />
            <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.55)]" />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">martin.ai/terminal</span>
        </div>
        <div className="space-y-3 font-mono text-xs text-slate-200 sm:text-sm">
          {codeLines.map((line, index) => (
            <motion.p
              key={line}
              className="flex min-w-0 gap-3 rounded-xl border border-white/7 bg-white/[0.04] px-3 py-3"
              animate={{ opacity: [0.58, 1, 0.72] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.28 }}
            >
              <span className="text-cyan-300">0{index + 1}</span>
              <span className="break-words">{line}</span>
              {index === codeLines.length - 1 && <span className="terminal-cursor ml-auto" />}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div className="glass absolute bottom-16 left-0 w-56 rounded-2xl p-4 shadow-[0_0_70px_rgba(139,92,246,0.16)]" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-purple-100">
          <BrainCircuit size={18} />
          Neural Build Map
        </div>
        <div className="relative h-28">
          {[12, 38, 64, 88].map((left, index) => (
            <span key={left} className="neural-dot absolute" style={{ left: `${left}%`, top: `${index % 2 ? 60 : 22}%` }} />
          ))}
          <span className="absolute left-[16%] top-[31%] h-px w-[48%] rotate-[18deg] bg-cyan-300/40" />
          <span className="absolute left-[42%] top-[62%] h-px w-[44%] -rotate-[18deg] bg-purple-300/40" />
          <span className="absolute left-[20%] top-[69%] h-px w-[62%] bg-emerald-300/30" />
        </div>
      </motion.div>

      <motion.div className="glass absolute bottom-0 right-0 w-[17rem] rounded-2xl p-4" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 0.5 }}>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-black text-emerald-100">Deployment Pulse</span>
          <Rocket size={18} className="text-cyan-200" />
        </div>
        {["Web Apps", "AI Tools", "Dashboards"].map((item, index) => (
          <div key={item} className="mb-3 last:mb-0">
            <div className="mb-1 flex justify-between text-xs font-semibold text-slate-400">
              <span>{item}</span>
              <span>{90 + index * 3}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-emerald-300" initial={{ width: 0 }} whileInView={{ width: `${90 + index * 3}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: index * 0.15 }} />
            </div>
          </div>
        ))}
      </motion.div>

      {["REST API", "AI Pipeline", "React UI"].map((label, index) => (
        <motion.span key={label} className="absolute hidden rounded-xl border border-cyan-300/20 bg-[#050816]/80 px-3 py-2 text-xs font-black text-cyan-100 shadow-[0_0_30px_rgba(0,245,255,0.12)] backdrop-blur-xl sm:block" style={{ top: `${18 + index * 21}%`, right: `${index % 2 ? 4 : 0}%` }} animate={{ x: [0, index % 2 ? -8 : 8, 0] }} transition={{ duration: 4 + index, repeat: Infinity }}>
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute left-5 top-32 h-44 w-44 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="absolute right-8 top-44 h-52 w-52 rounded-full bg-purple-400/12 blur-3xl" />
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, ease: "easeOut" }}>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 shadow-[0_0_32px_rgba(0,245,255,0.14)]">
            Martin Developer / Code Lord / Kenya
          </p>
          <h1 className="hero-title text-glow max-w-5xl font-black tracking-normal text-white">
            Hi, I&apos;m <span className="animated-gradient-text">Martin Munyao</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-bold text-cyan-100 sm:text-2xl">
            Software Engineer | AI & Data Science Enthusiast | Coding Instructor
          </p>
          <p className="mt-4 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl">
            Building intelligent web systems for business, education, and automation.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I build modern web applications, AI-powered tools, and data-driven systems that solve real-world problems.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#projects" className="glow-button group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-black text-[#050816] transition hover:-translate-y-1">
              View My Work <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/7 px-6 py-3 font-black text-white transition hover:-translate-y-1 hover:border-purple-300/60 hover:bg-purple-300/10">
              Let&apos;s Work Together <Send size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/25 bg-emerald-300/8 px-6 py-3 font-black text-emerald-100 transition hover:-translate-y-1 hover:border-emerald-300/60">
              Download CV <Download size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge, index) => (
              <motion.span key={badge} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200 shadow-[0_0_22px_rgba(37,99,235,0.1)]" animate={{ y: [0, -6, 0] }} transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.16 }}>
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About Martin"
      title="Practical software, intelligent tools, clear teaching."
      intro="Martin Munyao is a software engineer, web developer, AI/data science enthusiast, and coding instructor from Kenya."
    >
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
          <p className="relative text-lg leading-8 text-slate-300">
            Martin builds practical digital systems that solve real problems in business, education, and automation. His work blends web development, AI concepts, data science, and mentorship into systems people can actually use.
          </p>
          <div className="relative mt-8 grid grid-cols-3 gap-3">
            {["Web Apps", "AI Tools", "Dashboards"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} className="glass gradient-border rounded-2xl p-5" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Icon size={25} />
              </span>
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Stack" title="A sharp toolkit for modern product engineering." intro="Grouped for quick scanning across frontend, backend, AI/data science, and developer tooling.">
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <motion.article key={title} className="glass rounded-2xl p-6" whileHover={{ y: -5 }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={23} />
                </span>
                <h3 className="text-2xl font-black text-white">{title}</h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-slate-400">{skills.length} skills</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span key={skill} className="skill-pill rounded-xl border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm font-bold text-slate-200" whileHover={{ y: -4, scale: 1.02 }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectMockup({ type, icon: Icon }) {
  if (type === "exam") {
    return (
      <div className="mockup-panel">
        <div className="flex items-center justify-between">
          <span className="mockup-tab">Teacher Panel</span>
          <FileText size={18} className="text-cyan-200" />
        </div>
        <div className="mt-4 grid gap-2">
          {["Generated Question 01", "Bloom Level: Apply", "Marks: 10"].map((item) => (
            <span key={item} className="h-7 rounded-lg border border-white/8 bg-white/8 px-3 py-1 text-[11px] font-bold text-slate-300">{item}</span>
          ))}
        </div>
      </div>
    );
  }
  if (type === "inventory") {
    return (
      <div className="mockup-panel">
        <div className="grid grid-cols-3 gap-2">
          {["Sales", "Stock", "Alert"].map((item, index) => (
            <div key={item} className="rounded-lg border border-white/8 bg-white/8 p-2">
              <p className="text-[10px] font-bold text-slate-400">{item}</p>
              <div className={`mt-2 h-8 rounded-md ${index === 2 ? "bg-rose-400/30" : "bg-cyan-300/20"}`} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-16 items-end gap-2">
          {[42, 66, 50, 82, 72, 92].map((height) => <span key={height} className="flex-1 rounded-t bg-gradient-to-t from-cyan-300 to-purple-300" style={{ height: `${height}%` }} />)}
        </div>
      </div>
    );
  }
  if (type === "voice") {
    return (
      <div className="mockup-panel grid place-items-center">
        <Mic size={32} className="text-cyan-200" />
        <div className="mt-4 flex h-14 items-center gap-1">
          {Array.from({ length: 18 }).map((_, index) => (
            <motion.span key={index} className="w-1.5 rounded-full bg-cyan-300" animate={{ height: [10, 18 + (index % 5) * 7, 10] }} transition={{ duration: 0.9, repeat: Infinity, delay: index * 0.04 }} />
          ))}
        </div>
        <div className="mt-3 flex gap-2 text-[10px] font-black text-emerald-200">
          <span className="rounded-full bg-emerald-300/10 px-2 py-1">Sentiment</span>
          <span className="rounded-full bg-purple-300/10 px-2 py-1">Translate</span>
        </div>
      </div>
    );
  }
  if (type === "gesture") {
    return (
      <div className="mockup-panel relative overflow-hidden">
        <div className="absolute inset-4 rounded-xl border border-cyan-300/30" />
        <Hand className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-100" size={48} />
        {[30, 42, 52, 64, 72].map((left, index) => <span key={left} className="absolute h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(0,255,163,0.8)]" style={{ left: `${left}%`, top: `${32 + index * 8}%` }} />)}
        <span className="absolute bottom-5 left-5 rounded-full bg-cyan-300/15 px-3 py-1 text-[10px] font-black text-cyan-100">Gesture: Open Palm</span>
      </div>
    );
  }
  return (
    <div className="mockup-panel">
      <div className="grid grid-cols-3 gap-2">
        {[84, 71, 93].map((score) => <div key={score} className="rounded-lg border border-white/8 bg-white/8 p-2 text-center text-xs font-black text-cyan-100">{score}%</div>)}
      </div>
      <div className="mt-4 h-14 rounded-xl border border-emerald-300/15 bg-emerald-300/8 p-3 text-xs font-bold text-emerald-100">AI Insight: learner is improving in algorithms.</div>
      <div className="mt-3 h-8 rounded-lg bg-gradient-to-r from-cyan-300/30 via-purple-300/25 to-emerald-300/30" />
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <motion.article className="glass gradient-border flex min-h-[440px] flex-col rounded-2xl p-5" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 240, damping: 18 }}>
      <div className="project-thumb mb-5">
        <ProjectMockup type={project.type} icon={Icon} />
      </div>
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xl font-black text-white">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-cyan-100">{project.status}</span>
      </div>
      <p className="flex-1 leading-7 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-cyan-100">{tag}</span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a href="#contact" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-[#050816] transition hover:bg-cyan-200">
          View Project <ExternalLink size={16} />
        </a>
        <a href="#contact" className="grid h-11 w-12 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/60 hover:text-cyan-200" aria-label={`${project.title} GitHub`}>
          <GitBranch size={18} />
        </a>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Portfolio-worthy systems with product thinking." intro="Each project is framed around a real workflow: education, business operations, AI assistance, computer vision, or learning analytics.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </Section>
  );
}

function AiLab() {
  return (
    <Section id="ai-lab" eyebrow="AI Lab" title="An experimental AI control center." intro="A dedicated space for Martin's intelligent tools, automation experiments, computer vision demos, and data-driven systems.">
      <div className="ai-lab-shell relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <motion.div key={feature} className="rounded-2xl border border-white/10 bg-[#050816]/62 p-4" whileHover={{ y: -6, backgroundColor: "rgba(0,245,255,0.08)" }}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                  <CheckCircle2 size={22} />
                </span>
                <h3 className="font-black text-white">{feature}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">Experiment #{String(index + 1).padStart(2, "0")} online</p>
              </motion.div>
            ))}
          </div>
          <div className="scan-border rounded-2xl border border-emerald-300/20 bg-[#02040d]/78 p-5 shadow-[0_0_90px_rgba(0,255,163,0.1)]">
            <div className="mb-5 flex items-center gap-3">
              <TerminalSquare className="text-emerald-300" size={24} />
              <h3 className="text-xl font-black text-white">AI Status Panel</h3>
            </div>
            {[
              ["Model", "Active"],
              ["Data Pipeline", "Running"],
              ["Projects", "Building"],
              ["Innovation Mode", "Online"],
            ].map(([label, value]) => (
              <div key={label} className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 last:mb-0 last:border-0 last:pb-0">
                <span className="text-slate-400">{label}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-3 py-1 text-sm font-black text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(0,255,163,0.9)]" />
                  {value}
                </span>
              </div>
            ))}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-4 font-mono text-xs leading-6 text-slate-400">
              <p><span className="text-cyan-300">&gt;</span> loading curriculum vectors...</p>
              <p><span className="text-cyan-300">&gt;</span> listening for voice commands...</p>
              <p><span className="text-emerald-300">&gt;</span> automation pipeline online</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Client-focused engineering for useful launches." intro="Martin helps clients and learners turn ideas into clean, practical, intelligent digital products.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ icon: Icon, title, text }) => (
          <motion.article key={title} className="glass gradient-border rounded-2xl p-6" whileHover={{ y: -8 }}>
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-purple-300/20 text-cyan-100">
              <Icon size={24} />
            </span>
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{text}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200">Discuss service <ArrowRight size={15} /></span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Trusted for clarity, polish, and practical thinking.">
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map(({ quote, role }, index) => (
          <motion.blockquote key={quote} className="glass rounded-2xl p-6" whileHover={{ y: -8 }}>
            <Quote className="mb-5 text-cyan-200" size={28} />
            <p className="text-lg leading-8 text-slate-200">"{quote}"</p>
            <footer className="mt-7 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/25 bg-gradient-to-br from-cyan-300/20 to-purple-300/15 text-cyan-100">
                <UserRound size={20} />
              </span>
              <span>
                <span className="block font-black text-white">Portfolio Reviewer {index + 1}</span>
                <span className="block text-sm font-semibold text-slate-500">{role}</span>
              </span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const contacts = [
    [Mail, "Email", "munyao25@gmail.com"],
    [MapPin, "Location", "Kenya"],
    [ExternalLink, "Website", "martindeveloper.vercel.app"],
    [GitBranch, "GitHub", "github.com/your-username"],
    [Network, "LinkedIn", "linkedin.com/in/your-profile"],
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful, intelligent, and sharp." intro="For projects, mentorship, AI tools, dashboards, and collaboration opportunities.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-black text-white">Martin Munyao</h3>
          <p className="mt-3 leading-7 text-slate-400">Software Engineer, Web Developer, AI/Data Science enthusiast, and Coding Instructor from Kenya.</p>
          <div className="mt-7 grid gap-4">
            {contacts.map(([Icon, label, value]) => (
              <a key={label} href={label === "Email" ? "mailto:munyao25@gmail.com" : "#contact"} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</span>
                  <span className="block break-words font-bold text-slate-200">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="glass gradient-border rounded-2xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-300">
              Name
              <input className="form-input" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-300">
              Email
              <input type="email" className="form-input" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-bold text-slate-300">
            Subject
            <input className="form-input" placeholder="Project, mentorship, collaboration..." />
          </label>
          <label className="mt-4 grid gap-2 text-sm font-bold text-slate-300">
            Message
            <textarea rows="6" className="form-input resize-none" placeholder="Tell Martin what you want to build." />
          </label>
          <button type="button" className="glow-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-black text-[#050816] transition hover:-translate-y-1">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-cyan-300/15 px-5 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-slate-400">Built with passion, code, and AI by Martin Munyao.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {navLinks.slice(0, 5).map((link) => <a key={link} href={anchorFor(link)} className="text-sm font-bold text-slate-500 transition hover:text-cyan-200">{link}</a>)}
          </div>
          <div className="flex items-center gap-3">
            {[GitBranch, Network, Mail].map((Icon, index) => (
              <a key={index} href="#contact" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200">
                <Icon size={18} />
              </a>
            ))}
            <a href="#home" className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-[#050816]" aria-label="Back to top">
              <ChevronUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="grid-field" />
      <div className="circuit-field" />
      <div className="noise-field" />
      <div className="particle-field">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ "--x": `${(index * 17) % 100}%`, "--delay": `${index * 0.45}s`, "--size": `${2 + (index % 4)}px` }} />
        ))}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AiLab />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
