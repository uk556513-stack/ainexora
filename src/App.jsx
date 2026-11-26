import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function useViewportWidth() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

const services = [
  { icon: "bi-cpu", title: "AI Development", desc: "Build intelligent applications powered by advanced artificial intelligence and machine learning.", tag: "01" },
  { icon: "bi-robot", title: "Machine Learning", desc: "Transform complex data into powerful predictions and automated business decisions.", tag: "02" },
  { icon: "bi-cloud", title: "Cloud Solutions", desc: "Scale your digital infrastructure with secure and reliable cloud technologies.", tag: "03" },
  { icon: "bi-shield-lock", title: "Cyber Security", desc: "Protect your applications, systems and business data with next-generation security.", tag: "04" },
  { icon: "bi-code-slash", title: "Web Development", desc: "Create beautiful, responsive and high-performance digital experiences.", tag: "05" },
  { icon: "bi-bar-chart-line", title: "Data Analytics", desc: "Discover meaningful insights and make smarter decisions using data.", tag: "06" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700",
  "https://images.unsplash.com/photo-1676299081847-824916de030a?w=700",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700",
];

const projects = [
  { title: "Neural Intelligence", category: "AI Research", image: "https://i.pinimg.com/736x/fb/5f/b5/fb5fb578c122e3974b0266d49b0243ff.jpg", number: "01" },
  { title: "Future Robotics", category: "Automation", image: "https://i.pinimg.com/736x/00/23/ce/0023ced78188e74e40011ab179ebb44f.jpg", number: "02" },
  { title: "Digital Universe", category: "Technology", image: "https://i.pinimg.com/736x/49/40/6f/49406f1fb7bf3769cb322f3ba2692732.jpg", number: "03" },
  { title: "Smart Networks", category: "Innovation", image: "https://i.pinimg.com/736x/af/7c/22/af7c220e5601f709e678d93445577cdb.jpg", number: "04" },
];

const processSteps = [
  { title: "Discover", text: "We understand your business, goals and challenges before creating a strategy.", icon: "bi-search" },
  { title: "Strategize", text: "Our experts plan the right technology and architecture for your solution.", icon: "bi-lightbulb" },
  { title: "Develop", text: "We transform ideas into powerful digital products using modern technologies.", icon: "bi-code-square" },
  { title: "Launch", text: "We deploy, optimize and continuously improve your digital experience.", icon: "bi-rocket-takeoff" },
];

const testimonials = [
  { name: "Uday", role: "Product Manager", text: "An amazing technology partner. Their AI solutions helped us transform our entire workflow.", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Vicky", role: "Startup Founder", text: "The creativity, technical knowledge and attention to detail exceeded all our expectations.", avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "Gopi", role: "Technology Director", text: "A professional team delivering modern solutions with impressive performance and quality.", avatar: "https://i.pravatar.cc/150?img=13" },
];

function SectionTitle({ label, title, highlight, desc }) {
  return (
    <div className="section-title text-center" data-aos="fade-up">
      <span className="section-label"><span /> {label}</span>
      <h2>{title} <span>{highlight}</span></h2>
      <p>{desc}</p>
    </div>
  );
}
/* ================= TILTED CARD ================= */

function TiltCard({ item }) {
  const [transform, setTransform] = useState("");

  const handleMove = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTransform(
      `perspective(900px) rotateX(${(0.5 - y) * 14}deg) rotateY(${(x - 0.5) * 14}deg) scale3d(1.03,1.03,1.03)`
    );
  };

  return (
    <div
      className="tilt-card"
      style={{ transform: transform || "perspective(900px) rotateX(0) rotateY(0)" }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("")}
    >
      <div className="tilt-icon">
        <i className={`bi ${item.icon}`} />
      </div>

      <h4>{item.title}</h4>
      <p>{item.desc}</p>

      <a href="#contact" className="card-arrow">
        <i className="bi bi-arrow-up-right" />
      </a>
    </div>
  );
}
/* ================= FLIP CARD ================= */

function FlipCard({ project }) {
  return (
    <div className="flip-card" data-aos="fade-up">
      <div className="flip-inner">
        <div className="flip-front">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="flip-overlay">
            <span>{project.category}</span>
            <h4>{project.title}</h4>
            <small>Hover to explore <i className="bi bi-arrow-right" /></small>
          </div>
        </div>

        <div className="flip-back">
          
          <i className="bi bi-stars" />
          <h4>{project.title}</h4>
          <p>Exploring the possibilities of next-generation digital innovation.</p>
          <a href="#contact">
            Explore project <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
/* ================= CHROMA GRID ================= */

function ChromaGrid() {
  return (
    <div className="chroma-grid">
      {services.map((item, index) => (
        <div
          className="chroma-card"
          key={item.tag}
          data-aos="zoom-in"
          data-aos-delay={index * 80}
        >
          <div className="chroma-top">
            <i className={`bi ${item.icon}`} />
          </div>

          <h4>{item.title}</h4>
          <p>{item.desc}</p>

          <div className="chroma-bottom">
            <span>Explore technology</span>
          </div>
        </div>
      ))}
    </div>
  );
}
/* ================= CIRCULAR GALLERY ================= */

function CircularGallery() {
  const [rotation, setRotation] = useState(0);
  const viewportWidth = useViewportWidth();

  const radius =
    viewportWidth <= 380 ? 92 :
    viewportWidth <= 480 ? 108 :
    viewportWidth <= 767 ? 125 :
    viewportWidth <= 991 ? 145 :
    viewportWidth <= 1439 ? 175 :
    viewportWidth <= 1919 ? 205 :
    viewportWidth <= 2559 ? 235 : 265;

  return (
    <div className="circular-gallery-wrap" data-aos="zoom-in">
      <div className="circular-gallery">
        <div
          className="circle-track"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {galleryImages.map((image, index) => (
            <div
              className="circle-image"
              key={image}
              style={{
                transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-${radius}px) rotate(${-index * 60}deg)`
              }}
            >
              <img
                src={image}
                alt={`Technology gallery ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="circle-center">
          <i className="bi bi-stars" />
          <span>FUTURE</span>
          <small>IS NOW</small>
        </div>
      </div>

      <div className="gallery-controls">
        <button
          onClick={() => setRotation(rotation - 60)}
          aria-label="Rotate gallery left"
        >
          <i className="bi bi-arrow-left" />
        </button>

        <span>EXPLORE THE UNIVERSE</span>

        <button
          onClick={() => setRotation(rotation + 60)}
          aria-label="Rotate gallery right"
        >
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  );
}

/* ================= DEPTH CAROUSEL ================= */

function DepthCarousel() {
  const [active, setActive] = useState(0);
  const viewportWidth = useViewportWidth();

  const sideOffset =
    viewportWidth <= 480 ? 38 :
    viewportWidth <= 767 ? 45 :
    viewportWidth <= 991 ? 55 : 68;

  const next = () => setActive((active + 1) % projects.length);
  const prev = () => setActive((active - 1 + projects.length) % projects.length);

  return (
    <div className="depth-carousel" data-aos="fade-up">
      <div className="depth-stage">
        {projects.map((project, index) => {
          const offset = (index - active + projects.length) % projects.length;

          return (
            <div
              key={project.number}
              className={`depth-slide ${offset === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${(
                  offset === 0 ? 0 :
                  offset === 1 ? sideOffset :
                  offset === 2 ? -sideOffset : 0
                )}%) scale(${
                  offset === 0 ? 1 :
                  viewportWidth <= 480 ? 0.68 : 0.76
                })`,
                opacity: offset === 0 ? 1 : offset === 1 || offset === 2 ? 0.4 : 0,
                zIndex: offset === 0 ? 4 : 3 - offset,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="depth-caption">
                <span>{project.category}</span>
                <h4>{project.title}</h4>
              </div>
            </div>
          );
        })}
      </div>

      <div className="depth-controls">
        <button onClick={prev} aria-label="Previous project">
          <i className="bi bi-arrow-left" />
        </button>

        <button onClick={next} aria-label="Next project">
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  );
}

/* ================= STEPPER ================= */

function Stepper() {
  const [step, setStep] = useState(0);
  const current = processSteps[step];

  return (
    <div className="stepper-box" data-aos="fade-up">
      <div className="stepper-track">
        {processSteps.map((item, index) => (
          <button
            key={item.title}
            className={`step-dot ${index <= step ? "completed" : ""} ${index === step ? "selected" : ""}`}
            onClick={() => setStep(index)}
          >
            <span>
              {index < step
                ? <i className="bi bi-check2" />
                : `0${index + 1}`}
            </span>
            <small>{item.title}</small>
          </button>
        ))}

        <div
          className="step-progress"
          style={{ width: `${step * 33.33}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="step-content"
          key={step}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <div className="step-icon">
            <i className={`bi ${current.icon}`} />
          </div>

          <span>OUR PROCESS</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </motion.div>
      </AnimatePresence>

      <div className="step-actions">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
        >
          Previous
        </button>

        <button onClick={() => setStep((step + 1) % 4)}>
          {step === 3 ? "Start Again" : "Next Step"}
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  );
}

/* ================= MAIN APP ================= */

export default function App() {
  const viewportWidth = useViewportWidth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sent, setSent] = useState(false);

  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 80,
      easing: "ease-out-cubic",
    });

    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(".hero-orb", {
        y: -35,
        x: 25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".reveal-line").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 35,
          opacity: 0,
          duration: 0.9,
        });
      });
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      AOS.refresh();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ai-site" ref={heroRef}>

      {/* ANIMATED BACKGROUND */}
      <div className="background-effects">
        <div className="bg-grid" />
        <div className="glow-orb orb-one" />
        <div className="glow-orb orb-two" />
        <div className="glow-orb orb-three" />

        <div className="particles">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 61) % 100}%`,
                animationDelay: `${(i % 8) * -1.3}s`,
                animationDuration: `${5 + (i % 6)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* NAVBAR - GOOEY NAV */}
      <nav className="ai-navbar">
        <div className="container-fluid nav-container">
          <a href="#home" className="ai-logo" onClick={closeMenu}>
            <span className="logo-icon">
              <i className="bi bi-stars" />
            </span>
            NEXORA<span className="logo-dot">.</span>
          </a>

          <button
            className="mobile-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
          </button>

          <div className={`gooey-menu ${menuOpen ? "menu-open" : ""}`}>
            {["Home", "About", "Services", "Gallery", "Projects", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={index === 0 ? "nav-active" : ""}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}

            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Let's Talk <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </nav>
{/* HERO */}
<section className="hero-section" id="home">
  <div className="container hero-container">
    <div className="row align-items-center">

      <div className="col-lg-7 hero-content">
        <div className="hero-badge">
          <span className="live-dot" />
          INNOVATION STARTS HERE
        </div>

        <h1>
          Build What's <br />
          <span>Next in Tech.</span>
        </h1>

        <p className="hero-description">
          Empowering businesses with intelligent solutions,
          next-generation technologies, and creative digital
          experiences that shape a smarter tomorrow.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="primary-btn">
            Discover Our Services <i className="bi bi-arrow-up-right" />
          </a>

          <a href="#about" className="secondary-btn">
            <i className="bi bi-play-circle" /> Explore Our Vision
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>150<span>+</span></h3>
            <p>Successful Projects</p>
          </div>

          <div>
            <h3>35<span>+</span></h3>
            <p>Technology Experts</p>
          </div>

          <div>
            <h3>99<span>%</span></h3>
            <p>Customer Trust</p>
          </div>
        </div>
      </div>

      <div
        className="col-lg-5 hero-visual"
        data-aos="zoom-in"
        data-aos-duration="1400"
      >
        <div className="hero-orb">
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <div className="orb-ring ring-three" />

          <div className="orb-core">
            <i className="bi bi-robot" />
          </div>

          <div className="orbit-tag tag-one">
            <i className="bi bi-cpu" /> SMART SYSTEMS
          </div>

          <div className="orbit-tag tag-two">
            <i className="bi bi-lightning-charge" /> NEXT GEN TECH
          </div>

          <div className="orbit-tag tag-three">
            <i className="bi bi-globe2" /> DIGITAL WORLD
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
     {/* TRUST BAR */}
<section className="trust-section">
  <div className="container">
    <p data-aos="fade-up">
      TRUSTED BY INNOVATORS. POWERED BY TECHNOLOGY.
    </p>

    <div className="trust-logos">
      {[
        "TECHNOVA",
        "INFINITY",
        "CYBERCORE",
        "DIGITALX",
        "FUTURIX",
      ].map((name, i) => (
        <span key={name} data-aos="fade-up" data-aos-delay={i * 100}>
          <i className="bi bi-stars" /> {name}
        </span>
      ))}
    </div>
  </div>
</section>
{/* ABOUT */}
<section className="about-section section-space" id="about">
  <div className="container">
    <div className="row align-items-center g-5">

      <div className="col-lg-6" data-aos="fade-right">
        <div className="about-visual">
          <div className="about-image">
            <img
              src="https://i.pinimg.com/736x/7e/66/f8/7e66f831be25dc6f7399b094409dad86.jpg"
              alt="Advanced digital innovation and global technology"
              loading="lazy"
            />
          </div>

          <div className="about-floating">
            <i className="bi bi-rocket-takeoff" />
            <div>
              <strong>Next Generation</strong>
              <small>Technology Solutions</small>
            </div>
          </div>

          <div className="about-outline" />
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <span className="section-label">
          <span /> ABOUT OUR COMPANY
        </span>

        <h2 className="about-heading">
          Transforming Ideas Into <span>Impact.</span>
        </h2>

        <p className="about-text">
          At Nexora, we believe technology should do more than
          solve problems. It should create possibilities. We
          develop powerful digital experiences that help
          businesses adapt, grow, and lead in a connected world.
        </p>

        <p className="about-text">
          Our team brings together intelligent engineering,
          creative thinking, and modern technology to deliver
          solutions that make a meaningful difference.
          From AI-powered platforms to scalable digital
          ecosystems, we turn complex challenges into
          opportunities for progress.
        </p>

        <div className="about-points">
          <div>
            <i className="bi bi-check-circle-fill" />
            Future-ready technology
          </div>

          <div>
            <i className="bi bi-check-circle-fill" />
            Intelligent digital experiences
          </div>

          <div>
            <i className="bi bi-check-circle-fill" />
            Innovation-driven development
          </div>
        </div>

        <a href="#contact" className="text-link">
          Let's Build the Future 
        </a>
      </div>

    </div>
  </div>
</section>

    {/* CHROMA GRID */}
<section className="services-section section-space" id="services">
  <div className="container">
    <SectionTitle
      label="OUR EXPERTISE"
      title="Innovative Solutions."
      highlight="Infinite Possibilities."
      desc="From intelligent automation to next-generation digital platforms, we create technology that accelerates growth and transforms the way businesses work."
    />

    <ChromaGrid />
  </div>
</section>
{/* CIRCULAR GALLERY */}
<section className="gallery-section section-space" id="gallery">
  <div className="container">
    <SectionTitle
      label="EXPLORE OUR WORLD"
      title="Discover The"
      highlight="Future Of Innovation."
      desc="Take a closer look at our creative ecosystem, advanced technologies, intelligent solutions, and groundbreaking digital experiences."
    />

    <CircularGallery />
  </div>
</section>
{/* SCROLL STACK */}
<section className="stack-section section-space" id="innovation">
  <div className="container">
    <SectionTitle
      label="WHAT DRIVES US"
      title="Powering Progress Through"
      highlight="Smart Technology."
      desc="We combine creativity, engineering, and intelligent systems to turn ambitious ideas into meaningful digital solutions."
    />

    <div className="stack-list">
      {[
        {
          no: "01",
          title: "Next-Gen AI Solutions",
          text: "Unlock new possibilities with intelligent applications, machine learning, and AI-powered experiences built for smarter decisions.",
          icon: "bi-cpu",
          color: "purple"
        },
        {
          no: "02",
          title: "Web & App Development",
          text: "Create powerful websites and applications with modern technologies, intuitive interfaces, and seamless user experiences.",
          icon: "bi-code-slash",
          color: "blue"
        },
        {
          no: "03",
          title: "Smart Business Automation",
          text: "Simplify complex operations, automate everyday processes, and improve productivity with connected digital workflows.",
          icon: "bi-gear-wide-connected",
          color: "pink"
        },
        {
          no: "04",
          title: "Cloud & Cyber Security",
          text: "Protect valuable digital assets with secure infrastructure, reliable cloud environments, and advanced security practices.",
          icon: "bi-shield-lock",
          color: "violet"
        },
      ].map((item, index) => (
        <div
          className={`stack-card ${item.color}`}
          key={item.no}
          style={{
            top: `${viewportWidth <= 767 ? 76 + index * 12 : 105 + index * 17}px`
          }}
          data-aos="fade-up"
        >
          
          <div className="stack-card-content">
            <span>OUR CORE EXPERTISE</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#contact">
              Explore Solutions <i className="bi bi-arrow-up-right" />
            </a>
          </div>

          <div className="stack-card-icon">
            <i className={`bi ${item.icon}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* DEPTH CAROUSEL */}
<section className="projects-section section-space" id="projects">
  <div className="container">
    <SectionTitle
      label="OUR DIGITAL SHOWCASE"
      title="Creating Tomorrow,"
      highlight="Starting Today."
      desc="Discover our innovative digital projects, intelligent platforms, and creative technology solutions designed to solve real-world challenges and shape the future."
    />

    <DepthCarousel />
  </div>
</section>

      {/* FLIP CARDS */}
<section className="showcase-section section-space">
  <div className="container">
    <SectionTitle
      label="BEHIND THE INNOVATION"
      title="Technology That"
      highlight="Makes A Difference."
      desc="Discover the ideas, engineering, and intelligent technologies behind our solutions. Explore each card to uncover what makes every innovation unique."
    />

    <div className="row g-4">
      {projects.map(project => (
        <div className="col-md-6 col-lg-3" key={project.number}>
          <FlipCard project={project} />
        </div>
      ))}
    </div>
  </div>
</section>

{/* STEPPER */}
<section className="process-section section-space" id="process">
  <div className="container">
    <SectionTitle
      label="OUR WORKFLOW"
      title="Turning Great Ideas Into"
      highlight="Digital Success."
      desc="From understanding your vision to delivering powerful digital solutions, our structured approach ensures quality, creativity, and results at every stage."
    />

    <Stepper />
  </div>
</section>
{/* TILTED CARDS */}
<section className="expertise-section section-space">
  <div className="container">
    <SectionTitle
      label="OUR TECHNOLOGY EDGE"
      title="Designed To Create"
      highlight="What's Next."
      desc="Discover the expertise, advanced tools, and innovative technologies that help businesses grow, adapt, and stay ahead in a rapidly changing digital world."
    />

    <div className="row g-4">
      {services.slice(0, 4).map(item => (
        <div className="col-md-6 col-lg-3" key={item.tag}>
          <TiltCard item={item} />
        </div>
      ))}
    </div>
  </div>
</section>
   {/* STATISTICS */}
<section className="stats-section section-space">
  <div className="container">
    <div className="stats-panel" data-aos="zoom-in">

      <div>
        <i className="bi bi-globe-americas" />
        <h3>20+</h3>
        <p>Markets Served</p>
      </div>

      <div>
        <i className="bi bi-person-workspace" />
        <h3>50+</h3>
        <p>Technology Specialists</p>
      </div>

      <div>
        <i className="bi bi-rocket-takeoff" />
        <h3>150+</h3>
        <p>Solutions Delivered</p>
      </div>

      <div>
        <i className="bi bi-trophy" />
        <h3>99%</h3>
        <p>Customer Experience</p>
      </div>

    </div>
  </div>
</section>
    {/* TESTIMONIALS */}
<section className="testimonial-section section-space" id="testimonials">
  <div className="container">
    <SectionTitle
      label="SUCCESS STORIES"
      title="Experiences That"
      highlight="Inspire Trust."
      desc="Discover how our technology, creativity, and commitment help businesses achieve meaningful digital transformation."
    />

    <div className="testimonial-card" data-aos="fade-up">
     
      <div className="testimonial-stars">★★★★★</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
        >
          <h3>"{testimonials[activeTestimonial].text}"</h3>

          <div className="testimonial-person">
            <img
              src={testimonials[activeTestimonial].avatar}
              alt={testimonials[activeTestimonial].name}
              loading="lazy"
            />

            <div>
              <strong>{testimonials[activeTestimonial].name}</strong>
              <span>{testimonials[activeTestimonial].role}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="testimonial-controls">
        <button
          onClick={() => setActiveTestimonial((activeTestimonial + 2) % 3)}
          aria-label="Previous testimonial"
        >
          <i className="bi bi-arrow-left" />
        </button>

        <button
          onClick={() => setActiveTestimonial((activeTestimonial + 1) % 3)}
          aria-label="Next testimonial"
        >
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  </div>
</section>
      {/* CTA */}
<section className="cta-section section-space">
  <div className="container">
    <div className="cta-panel" data-aos="zoom-in">
      <div className="cta-glow" />

      <span className="section-label">
        <span /> LET'S CREATE SOMETHING EXTRAORDINARY
      </span>

      <h2>
        Your Vision. <span>Our Innovation.</span>
      </h2>

      <p>
        Ready to transform your ideas into intelligent digital
        solutions? Partner with Nexora and take the next step
        towards a smarter, more innovative future.
      </p>

      <a href="#contact" className="primary-btn">
        Let's Get Started <i className="bi bi-arrow-up-right" />
      </a>
    </div>
  </div>
</section>
     {/* CONTACT */}
<section className="contact-section section-space" id="contact">
  <div className="container">
    <SectionTitle
      label="CONNECT WITH NEXORA"
      title="Let's Shape The"
      highlight="Future Together."
      desc="Have an innovative idea or a business challenge? Connect with our team and let's create something meaningful through technology."
    />

    <div className="row g-5">
      <div className="col-lg-5" data-aos="fade-right">
        <h3 className="contact-heading">
          Let's turn your vision into the next big innovation.
        </h3>

        <p className="contact-desc">
          From intelligent digital solutions to advanced technology
          development, we're here to understand your goals, explore
          new possibilities, and bring your ideas to life.
          Let's start building something extraordinary together.
        </p>

        <div className="contact-info">
          <div>
            <span><i className="bi bi-envelope" /></span>
            <div>
              <small>EMAIL ADDRESS</small>
              <p>Uday@nexora.ai</p>
            </div>
          </div>

          <div>
            <span><i className="bi bi-telephone" /></span>
            <div>
              <small>PHONE NUMBER</small>
              <p>+91 93425 68375</p>
            </div>
          </div>

          <div>
            <span><i className="bi bi-geo-alt" /></span>
            <div>
              <small>OUR LOCATION</small>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          {[
            "bi-linkedin",
            "bi-instagram",
            "bi-twitter-x",
            "bi-github"
          ].map(icon => (
            <a href="#contact" key={icon} aria-label={icon}>
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className="col-lg-7" data-aos="fade-left">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label>Full Name</label>
              <input required type="text" placeholder="Enter your full name" />
            </div>

            <div className="col-md-6">
              <label>Work Email</label>
              <input required type="email" placeholder="Enter your email address" />
            </div>

            <div className="col-12">
              <label>Project Type</label>
              <input required type="text" placeholder="AI, Web Development, Automation..." />
            </div>

            <div className="col-12">
              <label>Project Details</label>
              <textarea
                required
                rows="5"
                placeholder="Describe your idea, goals, or requirements..."
              />
            </div>

            <div className="col-12">
              <button type="submit" className="primary-btn">
                Let's Connect <i className="bi bi-arrow-up-right" />
              </button>
            </div>

            {sent && (
              <div className="col-12 form-message">
                Thank you for reaching out! Your message has been prepared.
                Connect a backend to receive submissions.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
     {/* NEWSLETTER */}
<section className="newsletter-section">
  <div className="container">
    <div className="newsletter-box" data-aos="fade-up">
      <div>
        <span>INSIGHTS THAT INSPIRE</span>
        <h3>Stay Connected To What's Next.</h3>
        <p>
          Subscribe to Nexora updates and discover the latest
          breakthroughs in AI, emerging technologies, digital
          innovation, and smarter business solutions.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubscribed(true);
        }}
      >
        <input
          type="email"
          required
          placeholder="Enter your business email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          <i className="bi bi-arrow-right" />
        </button>
      </form>

      {subscribed && (
        <small className="newsletter-success">
          You're on the list! Stay tuned for exciting updates.
        </small>
      )}
    </div>
  </div>
</section>
     {/* FOOTER */}
<footer className="ai-footer">
  <div className="container">
    <div className="row g-4 footer-main">

      <div className="col-lg-5">
        <a href="#home" className="ai-logo">
          <span className="logo-icon">
            <i className="bi bi-stars" />
          </span>
          NEXORA<span className="logo-dot">.</span>
        </a>

        <p className="footer-description">
          Empowering businesses with intelligent technology,
          innovative digital experiences, and future-ready
          solutions that transform ideas into possibilities.
        </p>

        <div className="footer-socials">
          <a href="#contact" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
          <a href="#contact" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#contact" aria-label="GitHub">
            <i className="bi bi-github" />
          </a>
        </div>
      </div>

      <div className="col-6 col-lg-2">
        <h5>Discover</h5>
        <a href="#home">Home</a>
        <a href="#about">Our Company</a>
        <a href="#services">What We Do</a>
        <a href="#projects">Our Work</a>
      </div>

      <div className="col-6 col-lg-2">
        <h5>Technologies</h5>
        <a href="#services">Artificial Intelligence</a>
        <a href="#services">Web Development</a>
        <a href="#services">Smart Automation</a>
        <a href="#services">Cloud & Security</a>
      </div>

      <div className="col-lg-3">
        <h5>Contact Us</h5>
        <a href="mailto:hello@nexora.ai">Uday@nexora.ai</a>
        <a href="tel:+919342568375">+91 93425 68375</a>
        <a href="#contact">Bengaluru, Karnataka, India</a>
      </div>

    </div>

    <div className="footer-bottom">
      <p>© 2026 NEXORA. Crafted For The Future.</p>

      <div>
        <a href="#home">Privacy Policy</a>
        <a href="#home">Terms Of Service</a>
      </div>

      <a href="#home" className="back-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}