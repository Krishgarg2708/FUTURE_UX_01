import { Service, Testimonial, FAQItem, TrustIndicator, WhyChooseUsItem } from '../types';

export const trustIndicators: TrustIndicator[] = [
  {
    value: "5,000+",
    label: "Patients Treated",
    description: "Smiles transformed with personalized, gentle dental care"
  },
  {
    value: "4.9★",
    label: "Google Rating",
    description: "From over 1,200 verified reviews of our modern clinic"
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Combined expertise from top certified dental specialists"
  },
  {
    value: "100%",
    label: "SMILE Guarantee",
    description: "Dedicated to achieving comfortable and pristine oral results"
  }
];

export const servicesData: Service[] = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Advanced, medical-grade laser whitening that brightens your smile up to 8 shades in a single comfortable 60-minute session.",
    fullDesc: "Our professional laser-assisted teeth whitening treatment is the gold standard in cosmetic dentistry. Using premium, clinically tested whitening gels combined with state-of-the-art cold blue light technology, we gently break down deep stains caused by coffee, food, aging, or tobacco, revealing your teeth's natural brilliance. Our advanced cooling systems ensure teeth sensitivity is kept to an absolute minimum so you can walk out with full confidence.",
    icon: "Sparkles",
    price: "₹24,999",
    duration: "60 Mins",
    suitability: [
      "Individuals with surface staining from coffee, tea, or red wine",
      "Those who want fast, dramatic, single-visit results",
      "Patients with age-related enamel yellowing",
      "Perfect for upcoming events, weddings, or professional headshots"
    ],
    benefits: [
      "Stains erased in a single session",
      "Custom desensitizing guards used for optimal comfort",
      "Long-lasting shine for up to 18-24 months",
      "Performed under professional dental supervision",
      "Instantly boosts self-esteem and facial brightness"
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent, bio-compatible titanium implants that restore 100% chewing function and dental structure with natural aesthetics.",
    fullDesc: "Restore the complete foundation of your smile with premium titanium or zirconia dental implants. Designed to fuse naturally with your jawbone in a process called osseointegration, implants act as structural tooth roots that prevent bone loss and hold custom-crafted, matching crowns. They feel, look, and function exactly like your biological teeth.",
    icon: "Activity",
    price: "₹1,49,999 +",
    duration: "2-3 Visits",
    suitability: [
      "Patients with one or more missing teeth",
      "Those looking to replace uncomfortable partial dentures",
      "Individuals experiencing speech or chewing difficulties",
      "Patients with stable jawbone density for fusion"
    ],
    benefits: [
      "Permanent solution (lasts a lifetime with good hygiene)",
      "Prevents bone loss and facial sagging",
      "Maintains alignment of neighboring teeth",
      "No adhesive liquids or slippage like dentures"
    ]
  },
  {
    id: "braces-aligners",
    title: "Braces & Smile Aligners",
    shortDesc: "Virtually invisible custom clear aligners or premium clear ceramic brackets to align bite and perfect teeth layout.",
    fullDesc: "Unlock a perfectly straight smile using the latest discreet orthodontic technologies. We specialize in custom-fit Clear Aligners—removable, transparent trays designed to gradually guide your teeth into optimal spacing without metallic wires. We also offer advanced crystal-clear ceramic brackets for high-performance alignment.",
    icon: "Layers",
    price: "₹1,99,999 +",
    duration: "6-18 Months",
    suitability: [
      "Teens and adults with crowded, crooked, or gapped teeth",
      "Treats mild to severe overbites, underbites, and crossbites",
      "Those seeking a non-invasive, sleek orthodontic solution"
    ],
    benefits: [
      "Completely removable aligners for comfortable eating and flossing",
      "Highly discreet, customized aesthetic process",
      "Prevents uneven wear on tooth enamel",
      "Periodic progress checks with 3D digital oral scanners"
    ]
  },
  {
    id: "root-canal",
    title: "Microscopic Root Canal",
    shortDesc: "Extremely gentle, microscopic root canal treatments designed to solve painful tooth decay and preserve biological teeth.",
    fullDesc: "Don't let dental pain hold you back. Our specialized endodontic team performs microscopic root canals designed to save a deeply decayed or infected tooth. Utilizing dental microscopes and digital locator technology, we clean the infected pulp quickly and painlessly, seal the canal, and crown it to ensure long-term structural integrity and pain-free biting.",
    icon: "HeartPulse",
    price: "₹14,999 +",
    duration: "90 Mins",
    suitability: [
      "Patients experiencing acute throbbing pain or hot/cold sensitivity",
      "Severe internal tooth infection or deep dental cavities",
      "Tooth fracture or trauma extending into the pulp chamber"
    ],
    benefits: [
      "Saves your natural tooth from extraction",
      "Virtually pain-free procedure using dynamic local anesthesia",
      "Prevents the spread of bone and gum infections",
      "Restores normal chewing comfort and stops swelling"
    ]
  },
  {
    id: "smile-design",
    title: "Cosmetic Smile Design",
    shortDesc: "Comprehensive custom smile makeovers combining porcelain veneers, contouring, and alignment for a camera-ready look.",
    fullDesc: "Our signature Cosmetic Smile Design service is a collaborative, digital artistic makeover. Utilizing high-definition photography and 3D modeling, we craft a custom dental plan (veneers, crowns, gum lifting, and contouring) tailored to your specific facial symmetry, skin tone, and personal aesthetic goals for a stunning, natural-looking transformation.",
    icon: "Brush",
    price: "₹64,999 +",
    duration: "2 Visits",
    suitability: [
      "Teeth with intrinsic deep staining or discoloration",
      "Chipped, worn down, or misshapen front teeth",
      "Slightly misaligned or gapped front teeth",
      "Anyone desiring a perfect, Hollywood-inspired smile"
    ],
    benefits: [
      "Bespoke digital preview before final physical applications",
      "Stain-resistant premium porcelain handcrafted by expert ceramists",
      "Matches natural translucency of healthy tooth enamel",
      "Guarantees a youthfully lifted, symmetric smile alignment"
    ]
  },
  {
    id: "routine-cleaning",
    title: "Routine Deep Cleaning",
    shortDesc: "Gentle ultrasonic scaling, professional active plaque removal, dental polishing, and complete oral cancer screenings.",
    fullDesc: "Preventative dental health is key to general wellness. This foundational therapy removes soft plaque, hardened tartar (calculus), and hard tea/stains that brushing can't clear. Our dental hygienists use comfortable ultrasonic scalers, soothing water flossing, and advanced air polishing to refresh your breath, strengthen enamel, and maintain healthy pink gums.",
    icon: "CheckCircle",
    price: "₹9,999",
    duration: "45 Mins",
    suitability: [
      "Recommended once every 6 months for everyone",
      "Preventive maintenance against periodontitis / bleeding gums",
      "Those who notice bad breath or visible tartar buildup"
    ],
    benefits: [
      "Formidable shielding against severe gum diseases",
      "Stops chronic bad breath (halitosis) at the source",
      "Early detection of cavities, saving costly future procedures",
      "Includes precise oral cancer scan and lifestyle guidance"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Henderson",
    role: "Family Physician",
    rating: 5,
    reviewText: "As a working physician, cleanliness and clinical competence are my absolute priorities. SmileCraft exceeded every expectation. The laser whitening was painless, fast, and lifted my smile by 7 distinct shades. The staff respects your time, and the design looks like a five-star hotel boutique.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    service: "Teeth Whitening"
  },
  {
    id: "2",
    name: "Marcus Sterling",
    role: "Architect & Partner",
    rating: 5,
    reviewText: "I completed a full cosmetic smile design and clear aligner treatment here. The digital 3D modeling they showed me before beginning was fascinating. The results are identical to the model. I appreciate how honest they were about transparent pricing—no hidden clinic fees whatsoever.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    service: "Clear Aligners & Veneers"
  },
  {
    id: "3",
    name: "Amanda Knowles",
    role: "Creative Director",
    rating: 5,
    reviewText: "Having avoided dentists for years due to acute anxiety, I was incredibly nervous about my root canal. SmileCraft's painless approach made a believer out of me. They provide comforting blankets, noise-canceling headsets, and explain everything with immense warmth and respect. Exceptional patient care!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    service: "Microscopic Root Canal"
  }
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    title: "100% Pain-Free Procedures",
    description: "We utilize cutting-edge computerized anesthesia and high-tech gels to make sure you never feel discomfort during any extraction, cleaning, or restoration.",
    icon: "Sparkles"
  },
  {
    title: "Advanced Medical Equipment",
    description: "Equipped with low-radiation digital 3D scanners, dental microscopes, and cold-blue soft lasers to diagnose, design and heal with microscopic precision.",
    icon: "Cpu"
  },
  {
    title: "Highly Certified Specialists",
    description: "Our clinic is home to seasoned orthodontic, endodontic, and implant specialists from world-class universities, logging over 10,000 clinic hours.",
    icon: "Award"
  },
  {
    title: "Honest, Transparent Pricing",
    description: "We provide itemized treatment blueprints prior to starting any procedure. No hidden service charges, no surprise fees, and full insurance processing support.",
    icon: "ShieldCheck"
  }
];

export const whiteningFaqs: FAQItem[] = [
  {
    question: "How long does the teeth whitening results last?",
    answer: "Typically, SmileCraft teeth whitening results last between 12 to 24 months. This depends heavily on your daily lifestyle. Habits like frequent coffee, red wine, tea, or smoking can cause gradual staining, but standard periodic brushings and quick custom touch-ups keep them shining for years.",
    category: "Whitening"
  },
  {
    question: "Will the professional laser procedure hurt my enamel?",
    answer: "Absolutely not. Our medical-grade whitening gels and Blue-LED system are formulated to only attack internal carbon stains inside enamel pores, without altering the physical tooth or dental structure. It is 100% safe to the enamel and dentin when applied by our certified hygienists.",
    category: "Whitening"
  },
  {
    question: "Do you have options for patients with highly sensitive teeth?",
    answer: "Yes! We specialize in sensitive tooth treatments. We apply a protective medical block to seal your gums before the whitening gel goes on. We also integrate potassium nitrate desensitizing elements, which block nerve signals, offering a fully comfortable, irritation-free experience.",
    category: "Whitening"
  },
  {
    question: "Can whitening lift the stain off porcelain crowns or fillings?",
    answer: "Whitening gels only lift discoloration from biological enamel. Artificial composites, fillings, porcelain crowns, or veneers are non-porous and will remain their original color. If you are replacing restorations, we recommend whitening first, then matching the new restorations to your brightened tone.",
    category: "Whitening"
  },
  {
    question: "How soon after the procedure can I eat or drink colored food?",
    answer: "We recommend practicing the 'White Diet' for 48 hours post-whitening. During this time, the micro-pores of your teeth are temporarily open and receptive to stains. Avoid coffee, tea, dark sodas, curries, and tomato sauces. White proteins, rice, dairy, and natural water are highly recommended.",
    category: "Whitening"
  }
];

export const generalFaqs: FAQItem[] = [
  {
    question: "Do you accept dynamic medical and dental insurance?",
    answer: "Yes, we work with major dental and health insurance networks (including Delta Dental, MetLife, Cigna, Aetna, and Blue Cross). Our billing desk handles direct electronic claims submissions, pre-authorizations, and provides detailed itemized lists to maximize your dental coverage benefits.",
    category: "General"
  },
  {
    question: "What should I do if I have a sudden dental emergency?",
    answer: "We reserve emergency appointment spots every day for active toothaches, broken crowns, dental abscesses, or physical sports traumas. Contact our primary helpline directly; in most cases, emergency patients are seen within 2 to 3 hours on the same calendar day.",
    category: "General"
  },
  {
    question: "At what age should children have their first orthodontic evaluation?",
    answer: "We recommend a structural dental and orthodontic screening for children around age 7. At this developmental stage, the adult jaw is taking shape, making it easy to identify crowd concerns, crossbites, or misalignments that can be simplified with early interceptive devices.",
    category: "General"
  }
];
