import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Mail, 
  Star, 
  Calendar, 
  Grid, 
  Compass, 
  Award,
  Layers
} from 'lucide-react';

const IMAGES = {
  hero: "/src/assets/images/hero_living_tv_wall_1791203848436.jpg",
  bedroom: "/src/assets/images/project_luxury_bedroom_1791203861595.jpg",
  kitchen: "/src/assets/images/project_modular_kitchen_1791203876177.jpg",
  balcony: "/src/assets/images/project_balcony_terrace_1791203886367.jpg",
  office: "/src/assets/images/project_office_texture_wall_1791203897394.jpg"
};

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  location: string;
  image: string;
  description: string;
  area: string;
  timeline: string;
}

const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "The Marble Residence",
    category: "Living Rooms",
    tag: "Living Room",
    location: "Jubilee Hills, Hyderabad",
    image: IMAGES.hero,
    description: "An expansive, open-concept living space highlighting custom backlit marble cladding, brass metal inserts, and bespoke velvet modular seating.",
    area: "1,200 sq.ft.",
    timeline: "12 Weeks"
  },
  {
    id: "proj-2",
    title: "The Ivory Suite",
    category: "Bedrooms",
    tag: "Bedroom",
    location: "Gachibowli, Hyderabad",
    image: IMAGES.bedroom,
    description: "A serene, boutique hotel-inspired bedroom utilizing tactile upholstered wall panels, custom walnut details, and elegant sheer draping.",
    area: "450 sq.ft.",
    timeline: "8 Weeks"
  },
  {
    id: "proj-3",
    title: "The Culinary Atelier",
    category: "Kitchen & Wardrobes",
    tag: "Kitchen & Wardrobes",
    location: "Kondapur, Hyderabad",
    image: IMAGES.kitchen,
    description: "A premium kitchen combining sleek matte-charcoal cabinets, gold accents, state-of-the-art Blum fittings, and premium quartz surfaces.",
    area: "350 sq.ft.",
    timeline: "10 Weeks"
  },
  {
    id: "proj-4",
    title: "The Sanctuary Balcony",
    category: "Balcony & Terrace",
    tag: "Balcony & Terrace",
    location: "Banjara Hills, Hyderabad",
    image: IMAGES.balcony,
    description: "A private outdoor extension with solid teak wood decking, built-in ivory seating, and lush local flora arranged to optimize spatial flow.",
    area: "250 sq.ft.",
    timeline: "4 Weeks"
  },
  {
    id: "proj-5",
    title: "The Executive Bureau",
    category: "Office & Walls",
    tag: "Office & Walls",
    location: "HiTech City, Hyderabad",
    image: IMAGES.office,
    description: "A professional yet comfortable home office showcasing a textured microcement wall, floating oak joinery, and warm, indirect accentuation.",
    area: "300 sq.ft.",
    timeline: "6 Weeks"
  }
];

interface Service {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  image: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    id: "serv-1",
    num: "01",
    title: "Wardrobes & Modular Kitchens",
    shortDesc: "Smart storage and functional kitchen solutions with Blum partnerships.",
    detailedDesc: "We engineer highly optimized, ergonomic kitchens and custom wardrobe systems. Our setups utilize soft-close automation, intelligent drawer dividers, and premium finishes that resist wear and tear while elevating cooking and storage into a luxurious daily experience.",
    image: IMAGES.kitchen,
    tags: ["Blum Hardware", "Acrylic Finishes", "Space Optimization", "Anti-Scratch Surfaces"]
  },
  {
    id: "serv-2",
    num: "02",
    title: "Living Rooms",
    shortDesc: "Comfortable, premium, and functional living spaces built around family life.",
    detailedDesc: "The centerpiece of your home, crafted to inspire rest and connection. We design custom media walls, integrated ambient lighting schemes, and curate high-end material palettes that unify comfort, modern luxury, and structural harmony.",
    image: IMAGES.hero,
    tags: ["TV Wall Cladding", "Custom Joinery", "Ambient LED Layouts", "Bespoke Lounging"]
  },
  {
    id: "serv-3",
    num: "03",
    title: "Texture Walls",
    shortDesc: "Decorative, premium, and architectural wall finishes.",
    detailedDesc: "We bring dull surfaces to life using state-of-the-art textures, custom microcement finishes, Venetian plasters, and bespoke wooden/stone paneling that add tangible depth, tactile luxury, and artistic character to any space.",
    image: IMAGES.office,
    tags: ["Microcement Finish", "Fluted Panels", "Italian Marble Powder", "Acoustic Solutions"]
  },
  {
    id: "serv-4",
    num: "04",
    title: "Office Spaces",
    shortDesc: "Highly productive, ergonomic, and elegant corporate/home workspaces.",
    detailedDesc: "Whether it is a corporate suite in HiTech City or a peaceful home office retreat, we integrate ergonomic ergonomics, hidden cable routing, premium task lighting, and elegant shelving layouts that empower high performance.",
    image: IMAGES.office,
    tags: ["Ergonomic Layouts", "Wire Management", "Premium Task Lighting", "Bespoke Desks"]
  },
  {
    id: "serv-5",
    num: "05",
    title: "Accessories",
    shortDesc: "Interior accessories, customized fittings, and finishing elements.",
    detailedDesc: "A space is not complete without the perfect finishing details. We carefully select, custom-source, and install unique lighting fixtures, architectural hardware, curtains, rugs, and bespoke design accents that complete the architectural theme.",
    image: IMAGES.bedroom,
    tags: ["Designer Lighting", "Architectural Hardware", "Bespoke Textiles", "Curated Accents"]
  },
  {
    id: "serv-6",
    num: "06",
    title: "Outer Walls",
    shortDesc: "Premium exterior wall treatments and architectural cladding.",
    detailedDesc: "Protect and elevate the architectural envelope. We utilize premium, high-durability exterior materials, porcelain tiles, wood composite panels, and weatherproof cladding to deliver an impressive, long-lasting external presence.",
    image: IMAGES.balcony,
    tags: ["HPL Cladding", "Porcelain Panels", "Weatherproofing", "Architectural Façades"]
  },
  {
    id: "serv-7",
    num: "07",
    title: "Balcony & Terrace",
    shortDesc: "Bespoke outdoor extensions of your luxury indoor living spaces.",
    detailedDesc: "Turn your balconies, sky terraces, and outdoor decks into private serene sanctuaries. We design custom weather-resistant teak wood deck solutions, vertical green screens, ambient night lighting, and integrated premium lounge seating.",
    image: IMAGES.balcony,
    tags: ["Teak Wood Decking", "Vertical Gardens", "Weatherproof Seating", "Warm Uplighting"]
  }
];

const TESTIMONIALS = [
  {
    id: "t-1",
    quote: "Space Interiors India completely transformed our home in Jubilee Hills. Their design model is incredibly thorough, from initial sketches to selecting top-tier materials. The custom kitchen using Blum fittings has completely redefined how we live. Truly a luxury editorial experience.",
    author: "Rohan & Priyamvada Reddy",
    location: "Jubilee Hills, Hyderabad",
    project: "Full-Home Redesign"
  },
  {
    id: "t-2",
    quote: "The team showed absolute professionalism. They designed our new penthouse balcony and master bedroom. The attention to detail in their textured microcement walls is breathtaking. Their end-to-end execution took away all our stress.",
    author: "Ananya Deshmukh",
    location: "Gachibowli, Hyderabad",
    project: "Penthouse & Master Suite"
  },
  {
    id: "t-3",
    quote: "Our corporate home office feels like a high-end luxury studio. It has raised our work productivity and looks stunning in video calls. Highly recommend Space Interiors for anyone who appreciates real premium craftsmanship.",
    author: "Vikram Malhotra",
    location: "HiTech City, Hyderabad",
    project: "Executive Workspace Redesign"
  },
  {
    id: "t-4",
    quote: "What sets CasaRico apart is their material partnerships. Knowing we got authentic Stonelam and Blum fittings directly engineered with absolute precision gave us immense peace of mind. Every single guest is awed by our living room TV wall.",
    author: "Dr. Srinivas Rao",
    location: "Kondapur, Hyderabad",
    project: "Living & Kitchen Redesign"
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We begin with an in-depth conversation at your convenience. We discuss your spatial requirements, personal style, and the functional realities of how you intend to utilize and live in your space."
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Our interior architects translate your lifestyle requirements into custom concepts, curated spatial floorplans, structural color palettes, and preliminary architectural drawings."
  },
  {
    num: "03",
    title: "REFINE",
    desc: "We review layout details together. We touch and compare real wood, stone, marble, and fabric samples, fine-tuning your design to ensure every material is authentic, premium, and sustainable."
  },
  {
    num: "04",
    title: "EXECUTE",
    desc: "Our master craftsmen and certified project engineers take over. We handle procurement from our premium global brand partners and manage end-to-end installation with absolute precision."
  },
  {
    num: "05",
    title: "DELIVER",
    desc: "We hand over your finished, immaculate space. Every detail is carefully inspected, cleaned, and perfectly arranged, bringing your personalized concept into a timeless physical reality."
  }
];

const PARTNERS = [
  { name: "Blum", desc: "Austrian engineered modular hardware & soft-close runner systems." },
  { name: "Stonelam", desc: "Ultra-thin, elegant architectural porcelain slabs for exquisite surfaces." },
  { name: "Welspun", desc: "Premium designer flooring solutions and luxury residential textiles." },
  { name: "King Koil", desc: "High-end bespoke sleep systems engineered for ultimate comfort." },
  { name: "Raumplus", desc: "German precision-engineered premium sliding doors and wardrobe systems." }
];

export default function App() {
  // Navigation state
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter state for selected projects
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Hover state for services listing (Desktop)
  const [hoveredServiceId, setHoveredServiceId] = useState<string>("serv-1");

  // Accordion state for services listing (Mobile)
  const [mobileActiveServiceId, setMobileActiveServiceId] = useState<string | null>("serv-1");

  // Testimonial slider state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Lightbox view state for project gallery
  const [activeLightboxProject, setActiveLightboxProject] = useState<Project | null>(null);

  // Consultation modal state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Wardrobes & Modular Kitchens',
    budget: '₹10 Lakhs - ₹15 Lakhs',
    message: ''
  });

  // Disclaimer acknowledgment
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Monitor scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects list based on chosen category
  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx(prev => prev === TESTIMONIALS.length - 1 ? 0 : prev + 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Wardrobes & Modular Kitchens',
      budget: '₹10 Lakhs - ₹15 Lakhs',
      message: ''
    });
    setConsultationSubmitted(false);
    setIsConsultationOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] font-sans antialiased text-[#111111]">
      
      {/* 15% Mobile Sticky Cap & Sticky Nav header - TOP BAR CONTRACT IN LIGHT REDESIGN */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#FAF8F5]/10 py-4 shadow-md' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex flex-col select-none group">
            <span className={`text-xl md:text-2xl font-bold tracking-[0.18em] font-display transition-colors ${
              isScrolled ? 'text-[#111111] group-hover:text-[#9A7B52]' : 'text-white group-hover:text-[#BCA374]'
            }`}>
              SPACE INTERIORS INDIA
            </span>
            <span className={`text-[9px] tracking-[0.45em] font-sans mt-0.5 uppercase ${
              isScrolled ? 'text-[#9A7B52]' : 'text-[#BCA374]'
            }`}>
              CASARICO
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (No capsules, unboxed text) */}
          <nav className={`hidden lg:flex items-center gap-10 text-xs tracking-[0.2em] font-medium uppercase transition-colors duration-200 ${
            isScrolled ? 'text-[#111111]/70' : 'text-white/85'
          }`}>
            <a href="#about" className={`relative py-2 transition-colors hover:text-[#9A7B52] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A7B52] hover:after:w-full after:transition-all after:duration-300`}>
              About
            </a>
            <a href="#services" className={`relative py-2 transition-colors hover:text-[#9A7B52] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A7B52] hover:after:w-full after:transition-all after:duration-300`}>
              Services
            </a>
            <a href="#projects" className={`relative py-2 transition-colors hover:text-[#9A7B52] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A7B52] hover:after:w-full after:transition-all after:duration-300`}>
              Projects
            </a>
            <a href="#process" className={`relative py-2 transition-colors hover:text-[#9A7B52] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A7B52] hover:after:w-full after:transition-all after:duration-300`}>
              Process
            </a>
            <a href="#contact" className={`relative py-2 transition-colors hover:text-[#9A7B52] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A7B52] hover:after:w-full after:transition-all after:duration-300`}>
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className={`border text-xs font-semibold tracking-[0.2em] px-6 py-3 uppercase transition-all duration-300 whitespace-nowrap ${
                isScrolled 
                  ? 'border-[#9A7B52]/30 hover:border-[#9A7B52] text-[#9A7B52] hover:bg-[#9A7B52] hover:text-white' 
                  : 'border-white/30 hover:border-white text-white hover:bg-white hover:text-[#111111]'
              }`}
            >
              BOOK A CONSULTATION
            </button>
          </div>

          {/* Hamburger Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors focus:outline-none ${
              isScrolled ? 'text-[#111111] hover:text-[#9A7B52]' : 'text-white hover:text-[#BCA374]'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF8F5] z-50 shadow-2xl p-8 flex flex-col justify-between border-l border-[#FAF8F5]/10 lg:hidden animate-fade-in text-[#111111]">
          <div>
            <div className="flex items-center justify-between pb-8 border-b border-black/5">
              <span className="font-display text-lg tracking-widest text-[#9A7B52] uppercase">Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#111111]/60 hover:text-[#9A7B52]">
                <X size={20} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 pt-10 text-sm tracking-widest uppercase font-medium">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#9A7B52] transition-colors py-2 border-b border-black/5"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#9A7B52] transition-colors py-2 border-b border-black/5"
              >
                Services
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#9A7B52] transition-colors py-2 border-b border-black/5"
              >
                Projects
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#9A7B52] transition-colors py-2 border-b border-black/5"
              >
                Process
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#9A7B52] transition-colors py-2 border-b border-black/5"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConsultationOpen(true);
              }}
              className="w-full text-center bg-[#9A7B52] text-white font-semibold tracking-wider text-xs uppercase py-4 hover:bg-[#111111] transition-colors"
            >
              BOOK CONSULTATION
            </button>
            <div className="text-center text-[10px] tracking-widest text-[#111111]/40 uppercase">
              HYDERABAD, INDIA
            </div>
          </div>
        </div>
      )}

      {/* Floating Demo Disclaimer / Warning Note */}
      {showDisclaimer && (
        <div className="fixed bottom-20 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white border-l-2 border-[#9A7B52] p-4 z-40 rounded shadow-2xl flex items-start gap-3 transition-opacity">
          <div className="p-1 bg-[#9A7B52]/10 text-[#9A7B52] rounded">
            <Star size={16} />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-semibold text-[#111111] uppercase tracking-wider mb-1 text-[10px]">CLIENT SALES DEMO NOTE</p>
            <p className="text-[#111111]/75 leading-relaxed text-[11px]">
              This redesign features the stats <span className="text-[#9A7B52] font-semibold">23+ Years</span> of Experience, <span className="text-[#9A7B52] font-semibold">5,000+ Completed Projects</span>, and <span className="text-[#9A7B52] font-semibold">50 Designers</span>. 
              Please confirm these with Space Interiors India before taking the website live.
            </p>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="mt-2 text-[10px] text-[#9A7B52] hover:underline font-bold uppercase tracking-widest"
            >
              Dismiss Note
            </button>
          </div>
          <button onClick={() => setShowDisclaimer(false)} className="text-black/30 hover:text-black">
            <X size={14} />
          </button>
        </div>
      )}

      {/* SECTION 7: HERO SECTION (LUXURY DARK EDITORIAL BACKDROP) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background image overlay with controlled dark gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Space Interiors India Luxury Living Room Redesign" 
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-50 opacity-90 transition-transform duration-10000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-black/40 to-black/60 z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Small brand label / Corner markers */}
        <div className="absolute top-28 left-6 md:left-12 z-20 hidden md:block">
          <span className="text-[10px] font-medium tracking-[0.3em] text-white/80 uppercase block">
            CASA RICO — SPACE INTERIORS INDIA
          </span>
        </div>
        
        <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:flex flex-col items-end text-right">
          <span className="text-xs font-semibold tracking-[0.2em] text-white">HYDERABAD / TELANGANA</span>
          <span className="text-[10px] tracking-[0.1em] text-white/50 mt-1 uppercase">Interior Design &amp; Modular Solutions</span>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 z-20 hidden md:flex items-center gap-6 text-[10px] tracking-widest text-white/50">
          <span>01 / HOME</span>
          <span className="w-12 h-[1px] bg-white/20"></span>
          <span className="hover:text-white transition-colors"><a href="#projects">PORTFOLIO</a></span>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl px-6 pt-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-[#BCA374]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#BCA374] font-semibold">PREMIUM RESIDENTIAL &amp; COMMERCIAL DESIGN</span>
            <span className="h-[1px] w-8 bg-[#BCA374]" />
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-8 text-wrap: balance">
            SPACES DESIGNED<br />
            <span className="font-display italic font-light text-[#BCA374]">around you.</span>
          </h1>

          <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Thoughtfully designed interiors that bring together functionality, premium material partnerships, and contemporary Indian aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#projects" 
              className="w-full sm:w-auto bg-[#9A7B52] hover:bg-white text-white hover:text-black font-semibold tracking-[0.15em] text-xs py-4 px-8 uppercase transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
            >
              EXPLORE OUR WORK
              <ArrowRight size={14} />
            </a>
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="w-full sm:w-auto border border-white/30 hover:border-white hover:bg-white/5 text-white font-semibold tracking-[0.15em] text-xs py-4 px-8 uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              START YOUR PROJECT
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRUST STRIP - LUXURY LIGHT */}
      <section className="relative z-20 bg-[#F5F1EC] py-8 border-y border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-x-0 md:divide-x divide-[#E5DED4]">
            
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="flex items-center gap-1 text-[#9A7B52] mb-1">
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#111111]">4.5 ★ GOOGLE RATING</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-2">
              <span className="text-xl font-bold tracking-widest text-[#9A7B52]">62+</span>
              <span className="text-xs uppercase tracking-widest text-[#111111]/60">VERIFIED CLIENT REVIEWS</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-2">
              <span className="text-xl font-bold tracking-widest text-[#9A7B52]">MADEENAGUDA</span>
              <span className="text-xs uppercase tracking-widest text-[#111111]/60">HYDERABAD SHOWROOM</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-2">
              <span className="text-xl font-bold tracking-widest text-[#9A7B52]">PREMIUM</span>
              <span className="text-xs uppercase tracking-widest text-[#111111]/60">MATERIAL WARRANTY</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: BRAND INTRODUCTION - ALABASTER CLEAN LIGHT */}
      <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Image in asymmetric layout */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] bg-[#F5F1EC] overflow-hidden relative group">
                <img 
                  src={IMAGES.bedroom} 
                  alt="CasaRico Luxury Bedroom Portfolio Hyderabad" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-85" />
                
                {/* Visual caption matching our zero-pill metadata rule */}
                <div className="absolute bottom-6 left-6 text-xs text-white/90">
                  <span className="font-semibold uppercase tracking-wider block text-[#BCA374]">REDEFINING COMFORT</span>
                  <span className="mt-1 block font-light">The Ivory Suite, Gachibowli</span>
                </div>
              </div>
              
              {/* Offset decorative element to create "Luxury Editorial" mood */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#9A7B52]/30 -z-10 pointer-events-none hidden md:block" />
            </div>

            {/* Right Column: Copy & Presentation */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                  SPACE INTERIORS INDIA
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#111111] text-wrap: balance">
                  DESIGN THAT WORKS <br />
                  <span className="font-display italic text-[#9A7B52]">Beautifully.</span>
                </h2>
              </div>

              <div className="space-y-6 text-[#111111]/80 font-light leading-relaxed text-sm md:text-base">
                <p>
                  Every space has its own unique character. We believe your interiors should not only reflect your distinct personality but should seamlessly align with how you actually move, work, and thrive.
                </p>
                <p>
                  For over two decades, we have designed customized living rooms, architectural kitchens, luxury bedrooms, and creative outdoor spaces across Hyderabad. We deliver end-to-end transparency with meticulous attention to detail, fine timber joinery, and premium brand partnerships.
                </p>
              </div>

              {/* Four Pillars Quick View */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/10">
                <div className="space-y-1">
                  <span className="text-[#9A7B52] text-sm font-semibold tracking-wider block">PERSONALIZED</span>
                  <p className="text-xs text-[#111111]/60">Tailored completely around your individual lifestyle.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#9A7B52] text-sm font-semibold tracking-wider block">END-TO-END</span>
                  <p className="text-xs text-[#111111]/60">Flawless execution from concept visits to delivery.</p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#9A7B52] hover:text-[#111111] font-semibold transition-colors duration-300"
                >
                  EXPLORE OUR SERVICES 
                  <ArrowRight size={14} className="mt-0.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: SERVICES - LUXURY SAND CANVASES */}
      <section id="services" className="py-24 md:py-32 bg-[#F5F1EC] border-t border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                SPECIALIST CAPABILITIES
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111]">
                OUR EXPERTISE
              </h2>
            </div>
            <p className="text-[#111111]/60 text-sm max-w-md font-light leading-relaxed">
              We specialize in custom interior execution utilizing high-end brand hardware and architectural finishes for luxury homes and contemporary workspaces.
            </p>
          </div>

          {/* Service Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Floating Interactive Image Viewer (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32">
              <div className="aspect-[4/5] bg-[#FAF8F5] overflow-hidden relative shadow-2xl group border border-[#E5DED4]">
                {SERVICES.map((service) => (
                  <div 
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      hoveredServiceId === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[9px] tracking-widest text-[#BCA374] uppercase border border-[#BCA374]/30 px-2.5 py-1 bg-black/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        {service.detailedDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Services List (Desktop Hover, Mobile Accordion) */}
            <div className="lg:col-span-7 divide-y divide-[#E5DED4] border-y border-[#E5DED4]">
              {SERVICES.map((service) => {
                const isHovered = hoveredServiceId === service.id;
                const isMobileActive = mobileActiveServiceId === service.id;

                return (
                  <div 
                    key={service.id}
                    className="transition-colors duration-300"
                    onMouseEnter={() => setHoveredServiceId(service.id)}
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => {
                        setMobileActiveServiceId(isMobileActive ? null : service.id);
                        setHoveredServiceId(service.id);
                      }}
                      className="w-full flex items-center justify-between py-6 md:py-8 text-left group focus:outline-none"
                    >
                      <div className="flex items-start gap-6 md:gap-10">
                        {/* Numeral */}
                        <span className="text-xs md:text-sm font-mono tracking-widest text-[#9A7B52]/75 pt-1">
                          {service.num}
                        </span>
                        
                        {/* Title & Short Description */}
                        <div>
                          <h3 className={`text-xl md:text-2xl font-light tracking-wide transition-colors duration-200 ${
                            isHovered || isMobileActive ? 'text-[#9A7B52]' : 'text-[#111111]'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-xs md:text-sm text-[#111111]/60 mt-1.5 font-light max-w-lg">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Animated indicator */}
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline-block text-[10px] tracking-widest text-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity uppercase font-semibold">
                          View details
                        </span>
                        <div className={`p-2 rounded-full border border-[#E5DED4] transition-all duration-300 ${
                          isHovered || isMobileActive ? 'bg-[#9A7B52] text-white' : 'text-[#111111]/40'
                        }`}>
                          <ArrowUpRight size={14} className={`transform transition-transform duration-300 ${
                            isHovered || isMobileActive ? 'rotate-45' : ''
                          }`} />
                        </div>
                      </div>
                    </button>

                    {/* Expandable Panel for Mobile */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isMobileActive ? 'max-h-[500px] pb-8' : 'max-h-0'
                    } lg:hidden`}>
                      <div className="pl-12 pr-4 space-y-4">
                        <div className="aspect-[16/10] bg-[#FAF8F5] overflow-hidden mb-4 border border-[#E5DED4]">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        <p className="text-xs text-[#111111]/75 leading-relaxed">
                          {service.detailedDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-[9px] tracking-widest text-[#9A7B52] uppercase border border-[#9A7B52]/30 px-2 py-0.5 bg-[#FAF8F5]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11 & 12: FEATURED PROJECTS & GALLERY - ALABASTER LUXURY */}
      <section id="projects" className="py-24 md:py-32 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                PORTFOLIO
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111]">
                SELECTED WORK
              </h2>
            </div>

            {/* Segmented filter tabs - Ivory styling */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F1EC] rounded-lg border border-[#E5DED4]">
              {["All", "Living Rooms", "Bedrooms", "Kitchen & Wardrobes", "Balcony & Terrace", "Office & Walls"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[10px] md:text-xs font-medium uppercase tracking-widest rounded transition-all duration-300 ${
                    selectedCategory === cat 
                      ? 'bg-[#9A7B52] text-white font-bold shadow' 
                      : 'text-[#111111]/60 hover:text-[#111111] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {cat.split(' & ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {filteredProjects.map((project, index) => {
              let itemClass = "lg:col-span-6";
              if (index === 0) itemClass = "lg:col-span-8";
              if (index === 1) itemClass = "lg:col-span-4";
              if (index === 2) itemClass = "lg:col-span-4";
              if (index === 3) itemClass = "lg:col-span-8";
              if (index === 4) itemClass = "lg:col-span-12";

              return (
                <div 
                  key={project.id}
                  className={`${itemClass} group cursor-pointer`}
                  onClick={() => setActiveLightboxProject(project)}
                >
                  <div className="relative aspect-[16/10] md:aspect-[4/3] lg:aspect-auto lg:h-[450px] overflow-hidden bg-[#F5F1EC] border border-[#E5DED4]">
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Premium Dark Scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                    
                    {/* Content on hover */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                      
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] tracking-[0.2em] text-[#BCA374] uppercase font-bold">
                          {project.category}
                        </span>
                        <div className="text-white/80">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs text-white/60 tracking-widest uppercase block mb-1">
                          {project.location}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-display font-light text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/70 mt-2 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                          {project.description}
                        </p>
                        
                        <div className="mt-4 flex items-center gap-6 text-[10px] tracking-widest text-[#BCA374] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase font-semibold">
                          <span>VIEW PROJECT SPECIFICATIONS</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Metadata outside the image */}
                  <div className="mt-4 flex items-center justify-between text-xs text-[#111111]/60 px-1">
                    <span className="font-display text-base text-[#111111] tracking-wide group-hover:text-[#9A7B52] transition-colors">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span>{project.tag}</span>
                      <span aria-hidden="true" className="text-black/10">·</span>
                      <span>{project.location.split(',')[0]}</span>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* LIGHTBOX SPECIFICATIONS MODAL - LUXURY LIGHT EDITION */}
      {activeLightboxProject && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="bg-[#FAF8F5] border border-[#E5DED4] max-w-5xl w-full relative rounded-lg overflow-hidden shadow-2xl animate-scale-up text-[#111111]">
            
            <button 
              onClick={() => setActiveLightboxProject(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-[#9A7B52] text-[#111111] hover:text-white p-2.5 rounded-full border border-black/10 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-7 bg-black">
                <div className="aspect-[4/3] lg:h-full relative flex items-center">
                  <img 
                    src={activeLightboxProject.image} 
                    alt={activeLightboxProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-8 bg-[#FAF8F5]">
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#9A7B52] uppercase font-bold block mb-1">
                      {activeLightboxProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-normal text-[#111111]">
                      {activeLightboxProject.title}
                    </h3>
                    <p className="text-xs text-[#111111]/50 tracking-wider mt-1.5 uppercase font-semibold">
                      {activeLightboxProject.location}
                    </p>
                  </div>

                  <p className="text-sm text-[#111111]/80 leading-relaxed font-light">
                    {activeLightboxProject.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-black/10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#111111]/40 uppercase">SPATIAL AREA</span>
                      <span className="font-mono text-[#111111]/90 font-medium">{activeLightboxProject.area}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#111111]/40 uppercase">TIMELINE</span>
                      <span className="text-[#111111]/90 font-medium">{activeLightboxProject.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#111111]/40 uppercase">SERVICE MODEL</span>
                      <span className="text-[#9A7B52] font-semibold">End-To-End Execution</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#111111]/40 uppercase">ENGINEERED BY</span>
                      <span className="text-[#111111]/90">Space Interiors India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <button 
                    onClick={() => {
                      setActiveLightboxProject(null);
                      setIsConsultationOpen(true);
                    }}
                    className="w-full text-center bg-[#9A7B52] hover:bg-[#111111] text-white font-bold tracking-widest text-xs uppercase py-4 transition-colors"
                  >
                    INQUIRE ABOUT THIS DESIGN
                  </button>
                  <p className="text-[10px] text-center text-[#111111]/40 uppercase tracking-widest">
                    Consultation includes free initial visit &amp; custom sketch
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* SECTION 14: EXPERIENCE / CREDIBILITY - WARM SAND EDITORIAL */}
      <section className="relative py-24 md:py-32 bg-[#F5F1EC] overflow-hidden border-t border-[#E5DED4]">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9A7B52]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          
          <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block mb-4">
            OUR HISTORICAL TRACK RECORD
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-[#111111] mb-16 text-wrap: balance">
            VERIFIED INDUSTRY EXPERIENCE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            
            <div className="space-y-3">
              <span className="text-5xl md:text-7xl font-light font-display text-[#9A7B52] block tracking-tight">
                23+
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#111111]/50 block uppercase">
                YEARS OF CRAFTSMANSHIP
              </span>
              <p className="text-xs text-[#111111]/60 leading-relaxed max-w-xs mx-auto">
                Decades spent perfecting luxury material curation and high-precision execution in Hyderabad.
              </p>
            </div>

            <div className="space-y-3 border-y md:border-y-0 md:border-x border-[#E5DED4] py-8 md:py-0">
              <span className="text-5xl md:text-7xl font-light font-display text-[#9A7B52] block tracking-tight">
                5000+
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#111111]/50 block uppercase">
                COMPLETED SPACES
              </span>
              <p className="text-xs text-[#111111]/60 leading-relaxed max-w-xs mx-auto">
                Bespoke modular kitchens, living rooms, terraces, and commercial spaces.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-5xl md:text-7xl font-light font-display text-[#9A7B52] block tracking-tight">
                50+
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#111111]/50 block uppercase">
                INTERIOR DESIGN ARCHITECTS
              </span>
              <p className="text-xs text-[#111111]/60 leading-relaxed max-w-xs mx-auto">
                A highly synchronized team of creative visualizers, space planners, and project craftsmen.
              </p>
            </div>

          </div>

          <div className="mt-16 text-xs text-[#111111]/40 italic">
            *Source: Self-disclosed listing database metrics. Please request verified audited figures if required.
          </div>

        </div>
      </section>

      {/* SECTION 15: WHY SPACE INTERIORS */}
      <section className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                OUR CORE VALUES
              </span>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight text-[#111111]">
                WHY SPACE<br />INTERIORS
              </h2>
              <p className="text-[#111111]/70 text-sm leading-relaxed font-light">
                We reject standard pre-fabricated templates. Every element we implement is crafted around absolute quality, certified material partnerships, and direct customer alignment.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#9A7B52] text-white font-bold text-xs tracking-widest px-6 py-3.5 uppercase hover:bg-[#111111] transition-colors"
                >
                  SCHEDULE INTRODUCTORY CALL
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              <div className="p-8 bg-[#F5F1EC] border border-[#E5DED4] space-y-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#9A7B52]/10 text-[#9A7B52] text-sm font-bold font-mono">
                  01
                </div>
                <h3 className="text-xl font-medium text-[#111111] tracking-wide">
                  PERSONALIZED
                </h3>
                <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                  We tailormake space solutions to perfectly complement your daily lifestyle, ergonomic requirements, and design sensibilities. Your home becomes a true portrait of your values.
                </p>
              </div>

              <div className="p-8 bg-[#F5F1EC] border border-[#E5DED4] space-y-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#9A7B52]/10 text-[#9A7B52] text-sm font-bold font-mono">
                  02
                </div>
                <h3 className="text-xl font-medium text-[#111111] tracking-wide">
                  FUNCTIONAL
                </h3>
                <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                  Aesthetics are nothing without ultimate purpose. We calculate traffic flows, spatial optimization, smart storage utilities, and ergonomic layouts so your space works effortlessly.
                </p>
              </div>

              <div className="p-8 bg-[#F5F1EC] border border-[#E5DED4] space-y-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#9A7B52]/10 text-[#9A7B52] text-sm font-bold font-mono">
                  03
                </div>
                <h3 className="text-xl font-medium text-[#111111] tracking-wide">
                  PREMIUM
                </h3>
                <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                  We use strictly verified timber substrates, authentic stone cladding, high-end European hinges, and architectural paint coatings that keep their premium look for decades.
                </p>
              </div>

              <div className="p-8 bg-[#F5F1EC] border border-[#E5DED4] space-y-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#9A7B52]/10 text-[#9A7B52] text-sm font-bold font-mono">
                  04
                </div>
                <h3 className="text-xl font-medium text-[#111111] tracking-wide">
                  END-TO-END
                </h3>
                <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                  We handle the planning, materials procurement, customized carpentry, and certified installation. You receive a fully turn-key space without having to supervise multiple agencies.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 16: MATERIALS & PARTNERSHIPS - LUXURY SAND */}
      <section className="py-24 bg-[#F5F1EC] border-t border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
              PREMIUM INTEGRITY
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111] text-wrap: balance">
              MATERIALS THAT MAKE <br />
              <span className="font-display italic text-[#9A7B52]">a difference.</span>
            </h2>
            <p className="text-xs md:text-sm text-[#111111]/50 leading-relaxed font-light max-w-2xl mx-auto">
              Our collaborations ensure authentic materials, precise manufacturing, and seamless installation. We work strictly with certified luxury brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="p-8 bg-[#FAF8F5] border border-[#E5DED4] hover:border-[#9A7B52]/50 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <span className="text-2xl font-display font-medium text-[#111111] group-hover:text-[#9A7B52] transition-colors block mb-4">
                    {partner.name}
                  </span>
                  <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                    {partner.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between text-[10px] tracking-widest text-[#9A7B52] font-semibold opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                  <span>Certified Partner</span>
                  <Check size={12} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-xs text-[#111111]/40">
            *Brand marks and partner agreements are subject to verification.
          </div>

        </div>
      </section>

      {/* SECTION 17: PROCESS - WARM ALABASTER */}
      <section id="process" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl space-y-4 mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
              OUR SERVICE ROADMAP
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111]">
              FROM CONCEPT TO FINISHED SPACE
            </h2>
            <p className="text-sm text-[#111111]/60 font-light leading-relaxed">
              Our systematic design and build workflow ensures that timelines are strictly maintained, errors are minimized, and your budget is fully respected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            
            <div className="absolute top-10 left-0 w-full h-[1px] bg-black/5 hidden md:block z-0" />

            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="space-y-6 relative z-10 group">
                <div className="w-12 h-12 rounded-full bg-[#F5F1EC] border border-[#E5DED4] group-hover:border-[#9A7B52] flex items-center justify-center transition-all duration-300">
                  <span className="font-mono text-xs font-bold text-[#9A7B52]">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium tracking-wider text-[#111111] group-hover:text-[#9A7B52] transition-colors uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#111111]/60 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-16 bg-[#F5F1EC] p-8 border border-[#E5DED4] rounded flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#9A7B52]/10 text-[#9A7B52]">
                <Calendar size={20} />
              </div>
              <div>
                <span className="text-xs text-[#111111]/40 block uppercase tracking-widest font-bold">ESTIMATED TIMELINE</span>
                <span className="text-sm font-semibold text-[#111111]">Average custom residence takes 8-12 weeks from sign-off.</span>
              </div>
            </div>
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="w-full md:w-auto bg-[#9A7B52] hover:bg-[#111111] text-white font-bold tracking-widest text-xs uppercase py-3.5 px-6 transition-colors whitespace-nowrap"
            >
              REQUEST SITE VISIT
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 18: TESTIMONIALS - SAND CANVAS */}
      <section className="py-24 bg-[#F5F1EC] border-t border-[#E5DED4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                SOCIAL PROOF
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111]">
                CLIENT<br />EXPERIENCES
              </h2>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-[#111111]/50 font-medium">Average Rating</span>
                <div className="flex items-center text-[#9A7B52] gap-0.5">
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                </div>
                <span className="text-xs font-bold text-[#111111]">4.5 (62 reviews)</span>
              </div>
            </div>

            <div className="lg:col-span-8 bg-[#FAF8F5] p-8 md:p-16 border border-[#E5DED4] rounded-lg space-y-8 relative">
              
              <div className="absolute top-8 right-12 text-9xl text-black/5 font-display select-none pointer-events-none">
                “
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-2xl font-display font-light text-[#111111]/90 leading-relaxed italic">
                  "{TESTIMONIALS[activeTestimonialIdx].quote}"
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-black/5 text-xs text-[#111111]/60">
                  <div>
                    <span className="font-bold text-[#9A7B52] text-sm block">
                      {TESTIMONIALS[activeTestimonialIdx].author}
                    </span>
                    <span className="text-[#111111]/45 block mt-0.5">
                      {TESTIMONIALS[activeTestimonialIdx].location} · {TESTIMONIALS[activeTestimonialIdx].project}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handlePrevTestimonial}
                      className="p-2 border border-[#E5DED4] hover:border-[#9A7B52] text-[#111111]/60 hover:text-black transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-mono text-xs tracking-widest text-[#9A7B52] font-bold">
                      0{activeTestimonialIdx + 1} / 0{TESTIMONIALS.length}
                    </span>
                    <button 
                      onClick={handleNextTestimonial}
                      className="p-2 border border-[#E5DED4] hover:border-[#9A7B52] text-[#111111]/60 hover:text-black transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 19: FINAL CONVERSION */}
      <section className="relative py-28 md:py-36 bg-[#1A1A1A] text-white overflow-hidden border-t border-[#E5DED4]">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={IMAGES.hero} 
            alt="Space Interiors India Luxury Living" 
            className="w-full h-full object-cover object-center filter blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1A1A1A] z-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#BCA374] uppercase block">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-normal leading-tight text-wrap: balance text-white">
            YOUR SPACE STARTS <br />
            <span className="font-display italic text-[#BCA374]">with an idea.</span>
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            Tell us what you are imagining. Schedule a brief exploratory consultation with our chief design architects in Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="w-full sm:w-auto bg-[#9A7B52] hover:bg-white text-white hover:text-[#111111] font-bold tracking-[0.15em] text-xs py-4 px-8 uppercase transition-all duration-300"
            >
              BOOK A CONSULTATION
            </button>
            <a 
              href="https://wa.me/919390252525" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold tracking-[0.15em] text-xs py-4 px-8 uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 20: CONTACT SECTION & CONSULTATION FORM */}
      <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#E5DED4] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.3em] text-[#9A7B52] uppercase block">
                  CONTACT DETAILS
                </span>
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#111111]">
                  LET'S TALK ABOUT YOUR SPACE
                </h2>
                <p className="text-xs md:text-sm text-[#111111]/60 font-light leading-relaxed">
                  Have a project in mind or want to explore our Hyderabad showroom? Drop by or give us a call directly.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F1EC] text-[#9A7B52] border border-[#E5DED4] rounded">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 block uppercase tracking-widest font-bold">SHOWROOM ADDRESS</span>
                    <p className="text-sm text-[#111111]/90 font-light mt-1">
                      Madeenaguda, Miyapur Metro Corridor,<br />
                      Hyderabad, Telangana - 500049
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F1EC] text-[#9A7B52] border border-[#E5DED4] rounded">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 block uppercase tracking-widest font-bold">DIRECT BOOKING HOTLINE</span>
                    <a href="tel:+919390252525" className="text-sm text-[#111111]/90 hover:text-[#9A7B52] font-mono mt-1 block transition-colors">
                      +91 93902 52525
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F1EC] text-[#9A7B52] border border-[#E5DED4] rounded">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 block uppercase tracking-widest font-bold">DIRECT EMAIL</span>
                    <a href="mailto:info@spaceinteriors.com" className="text-sm text-[#111111]/90 hover:text-[#9A7B52] mt-1 block transition-colors">
                      info@spaceinteriors.com
                    </a>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-black/5 space-y-3">
                <span className="text-[10px] tracking-widest text-[#9A7B52] uppercase block font-bold">Showroom Hours</span>
                <p className="text-xs text-[#111111]/50">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p className="text-xs text-[#111111]/50">Sunday: By Appointment Only</p>
              </div>

            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-[#F5F1EC] p-8 md:p-12 border border-[#E5DED4] rounded-lg relative">
              
              {consultationSubmitted ? (
                <div className="text-center py-16 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#9A7B52]/10 border border-[#9A7B52] flex items-center justify-center mx-auto text-[#9A7B52]">
                    <Check size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-medium text-[#111111]">CONSULTATION REQUESTED</h3>
                    <p className="text-xs md:text-sm text-[#111111]/70 max-w-md mx-auto leading-relaxed">
                      Thank you for sharing details, <span className="text-[#111111] font-semibold">{formData.name}</span>. One of our chief design consultants will contact you at <span className="text-[#111111] font-semibold">{formData.phone}</span> within 24 business hours to lock in your site visit slot.
                    </p>
                  </div>
                  <button 
                    onClick={handleResetForm}
                    className="inline-block border border-black/10 hover:border-[#9A7B52] text-xs text-[#111111]/60 hover:text-[#9A7B52] uppercase tracking-widest font-bold py-3 px-6 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="pb-4 border-b border-black/5">
                    <h3 className="text-xl font-display font-medium text-[#111111]">REQUEST A COMPLIMENTARY ESTIMATE</h3>
                    <p className="text-xs text-[#111111]/50 mt-1">Please provide your requirements to help us prepare your design layout.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">FULL NAME *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Rohan Reddy"
                        className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">CONTACT NUMBER *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">EMAIL ADDRESS *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="rohan@example.com"
                        className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">PROJECT TYPE</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleFormChange}
                        className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors cursor-pointer"
                      >
                        <option>Wardrobes &amp; Modular Kitchens</option>
                        <option>Full Residential Redesign</option>
                        <option>Texture Walls &amp; Living Room</option>
                        <option>Executive Office Spaces</option>
                        <option>Outdoor Terrace &amp; Balcony</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">APPROXIMATE BUDGET FRAME</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors cursor-pointer"
                    >
                      <option>₹5 Lakhs - ₹10 Lakhs</option>
                      <option>₹10 Lakhs - ₹15 Lakhs</option>
                      <option>₹15 Lakhs - ₹25 Lakhs</option>
                      <option>₹25 Lakhs - ₹50 Lakhs</option>
                      <option>₹50 Lakhs+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-[#111111]/40 uppercase font-bold block">PROJECT DESCRIPTION &amp; VISION</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      placeholder="Share a brief overview of your spatial concept, required aesthetics, and timeline preferences..."
                      className="w-full bg-[#FAF8F5] border border-[#E5DED4] focus:border-[#9A7B52] text-sm text-[#111111] px-4 py-3.5 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-[#9A7B52] hover:bg-[#111111] text-white font-bold tracking-widest text-xs uppercase py-4 transition-colors"
                    >
                      SUBMIT CONSULTATION REQUEST
                    </button>
                    <p className="text-[10px] text-center text-[#111111]/40 mt-3 uppercase tracking-widest font-medium">
                      Your spatial coordinates are fully protected &amp; never shared.
                    </p>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* POPUP CONSULTATION MODAL */}
      {isConsultationOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] border border-[#E5DED4] max-w-xl w-full relative rounded shadow-2xl overflow-hidden animate-scale-up text-[#111111]">
            
            <button 
              onClick={() => setIsConsultationOpen(false)}
              className="absolute top-4 right-4 z-20 text-black/60 hover:text-black bg-[#F5F1EC] p-2 rounded-full border border-[#E5DED4]"
            >
              <X size={18} />
            </button>

            <div className="p-8 md:p-10 space-y-6">
              
              {consultationSubmitted ? (
                <div className="text-center py-10 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#9A7B52]/10 border border-[#9A7B52] flex items-center justify-center mx-auto text-[#9A7B52]">
                    <Check size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-black">CONSULTATION LOCKED IN</h3>
                    <p className="text-xs text-[#111111]/60 leading-relaxed">
                      Thank you, <span className="text-black font-semibold">{formData.name}</span>. We've received your request for <span className="text-[#9A7B52] font-semibold">{formData.projectType}</span>. One of our lead designers will call you at <span className="text-black font-semibold">{formData.phone}</span> shortly.
                    </p>
                  </div>
                  <button 
                    onClick={handleResetForm}
                    className="w-full bg-[#9A7B52] text-white font-bold text-xs uppercase py-3.5 tracking-widest"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="text-center pb-4 border-b border-black/5">
                    <span className="text-[10px] text-[#9A7B52] tracking-[0.3em] font-semibold uppercase block mb-1">CASA RICO</span>
                    <h3 className="text-2xl font-display font-medium text-black">BOOK A PRIVATE CONSULTATION</h3>
                    <p className="text-xs text-[#111111]/50 mt-1">Submit details below to schedule your site-visit or showroom walkthrough.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold block">NAME *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your Full Name"
                      className="w-full bg-[#F5F1EC] border border-[#E5DED4] focus:border-[#9A7B52] text-xs text-[#111111] px-3 py-2.5 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold block">PHONE *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91"
                        className="w-full bg-[#F5F1EC] border border-[#E5DED4] focus:border-[#9A7B52] text-xs text-[#111111] px-3 py-2.5 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold block">EMAIL *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="email@example.com"
                        className="w-full bg-[#F5F1EC] border border-[#E5DED4] focus:border-[#9A7B52] text-xs text-[#111111] px-3 py-2.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold block">PROJECT INTEREST</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      className="w-full bg-[#F5F1EC] border border-[#E5DED4] focus:border-[#9A7B52] text-xs text-[#111111] px-3 py-2.5 outline-none transition-colors cursor-pointer"
                    >
                      <option>Wardrobes &amp; Modular Kitchens</option>
                      <option>Full Residential Redesign</option>
                      <option>Texture Walls &amp; Living Room</option>
                      <option>Executive Office Spaces</option>
                      <option>Outdoor Terrace &amp; Balcony</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold block">APPROXIMATE BUDGET</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormChange}
                      className="w-full bg-[#F5F1EC] border border-[#E5DED4] focus:border-[#9A7B52] text-xs text-[#111111] px-3 py-2.5 outline-none transition-colors cursor-pointer"
                    >
                      <option>₹5 Lakhs - ₹10 Lakhs</option>
                      <option>₹10 Lakhs - ₹15 Lakhs</option>
                      <option>₹15 Lakhs - ₹25 Lakhs</option>
                      <option>₹25 Lakhs - ₹50 Lakhs</option>
                      <option>₹50 Lakhs+</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#9A7B52] text-white font-bold tracking-widest text-xs uppercase py-3.5 hover:bg-[#111111] transition-colors"
                    >
                      LOCK IN APPOINTMENT
                    </button>
                    <p className="text-[9px] text-center text-[#111111]/30 mt-2 uppercase font-medium">
                      NO OBLIGATION VISITING SCHEME ACCROSS HYDERABAD.
                    </p>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      )}

      {/* FOOTER - DARK JET BLACK CONTRAST FOR HIGHEST SOPHISTICATION */}
      <footer className="bg-[#111111] text-[#FAF8F5] border-t border-black/5 pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
            
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-xl md:text-2xl font-bold tracking-[0.2em] font-display text-white uppercase block">
                  SPACE INTERIORS INDIA
                </span>
                <span className="text-[10px] tracking-[0.5em] text-[#BCA374] uppercase block mt-1">
                  CASARICO
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed max-w-sm font-light">
                Premium, timeless, and sustainable interior design solutions engineered to elevate daily life. Over 23 years of design-and-execution leadership in Hyderabad, Telangana.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-[#BCA374] uppercase font-bold">HYDERABAD HEADQUARTERS</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BCA374]">
                QUICK DIRECTORIES
              </h4>
              <nav className="flex flex-col gap-3 text-xs text-white/55 font-light uppercase tracking-wider">
                <a href="#about" className="hover:text-[#BCA374] transition-colors">About Story</a>
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Our Expertise</a>
                <a href="#projects" className="hover:text-[#BCA374] transition-colors">Selected Work</a>
                <a href="#process" className="hover:text-[#BCA374] transition-colors">Our Process</a>
                <a href="#contact" className="hover:text-[#BCA374] transition-colors">Request Callback</a>
              </nav>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BCA374]">
                SOLUTIONS
              </h4>
              <nav className="flex flex-col gap-3 text-xs text-white/55 font-light uppercase tracking-wider">
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Wardrobes &amp; Kitchens</a>
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Living Room Layouts</a>
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Office Workspaces</a>
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Textured Wall Panels</a>
                <a href="#services" className="hover:text-[#BCA374] transition-colors">Terraces &amp; Outer Façades</a>
              </nav>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BCA374]">
                SUPPORT DIRECT
              </h4>
              <div className="space-y-3 text-xs text-white/55 font-light">
                <p className="font-mono text-white/85">+91 93902 52525</p>
                <p>info@spaceinteriors.com</p>
                <p className="mt-2 text-[10px] text-white/35 uppercase leading-relaxed">
                  Madeenaguda, Hyderabad,<br />Telangana, India
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/30 gap-4 uppercase tracking-widest">
            <div>
              &copy; {new Date().getFullYear()} Space Interiors India. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <span className="text-[#BCA374] font-semibold select-none">CasaRico Premium Redesign Redefined</span>
              <span>•</span>
              <a href="#about" className="hover:underline">Legal Information</a>
            </div>
          </div>

        </div>
      </footer>

      {/* RESPONSIVE PERSISTENT CONVERSION BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-[#FAF8F5] border-t border-[#E5DED4] lg:hidden py-3 px-4 shadow-2xl flex items-center gap-3">
        
        <a 
          href="tel:+919390252525" 
          className="flex-1 bg-[#F5F1EC] hover:bg-zinc-100 text-[#111111] border border-[#E5DED4] text-xs font-bold uppercase tracking-widest py-3 text-center flex items-center justify-center gap-2"
        >
          <Phone size={14} className="text-[#9A7B52]" />
          CALL US
        </a>

        <a 
          href="https://wa.me/919390252525" 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 bg-[#9A7B52] hover:bg-[#111111] text-white text-xs font-bold uppercase tracking-widest py-3 text-center flex items-center justify-center gap-2"
        >
          <Compass size={14} />
          WHATSAPP
        </a>

      </div>

    </div>
  );
}
