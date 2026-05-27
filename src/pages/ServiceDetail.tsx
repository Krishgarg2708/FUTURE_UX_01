import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Clock,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  CheckCircle,
  Award,
  CircleHelp,
  AlertCircle,
  ArrowRight,
  Flame,
  Activity,
  DollarSign,
  HeartPulse,
  Layers,
  Brush,
  Shield,
  HelpCircle,
  ChevronRight,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { whiteningFaqs, servicesData, generalFaqs } from '../data/dentistry';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Fallback to teeth whitening or the first service if ID doesn't match
  const service = servicesData.find(s => s.id === serviceId) || servicesData.find(s => s.id === 'teeth-whitening') || servicesData[0];

  const [sliderValue, setSliderValue] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'benefits' | 'suitability'>('benefits');

  // Lead capture state
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Dynamic interactive solution scanner selected index
  const [selectedGoalIdx, setSelectedGoalIdx] = useState(0);

  // Scroll to booking form
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('service-booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Reset secondary states on page change
    setOpenFaq(0);
    setSelectedGoalIdx(0);
    setFormSubmitted(false);
  }, [serviceId]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingEmail || !bookingDate) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  // Servicespecific images mapping
  const serviceImages: Record<string, string> = {
    'teeth-whitening': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    'dental-implants': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80',
    'braces-aligners': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    'root-canal': 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=1000&q=80',
    'smile-design': 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=1000&q=80',
    'routine-cleaning': 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=1000&q=80'
  };

  const currentImg = serviceImages[service.id] || serviceImages['teeth-whitening'];

  // Dynamic treatment steps mapping
  const allTreatmentSteps: Record<string, Array<{ step: string; title: string; desc: string; duration: string }>> = {
    'teeth-whitening': [
      {
        step: "01",
        title: "Shade Mapping & Diagnostic Scan",
        desc: "Our cosmetic dentist maps your biological tooth enamel density and documents your starting shade using a digital spectrometer.",
        duration: "10 Mins"
      },
      {
        step: "02",
        title: "Gingival Gum Protection Gel",
        desc: "A custom light-cured liquid dam rubber barrier is applied to your gum tissues. This ensures maximum protection of your gums during whitening.",
        duration: "10 Mins"
      },
      {
        step: "03",
        title: "Organic Photo-Gel Coat",
        desc: "We brush on our patented 35% pH-balanced medical hydrogen peroxide compound mixed with desensitizing potassium elements.",
        duration: "5 Mins"
      },
      {
        step: "04",
        title: "Blue Laser Photo-Activation",
        desc: "We trigger our medical blue-LED laser. The light breaks down deep clinical stains. We safely run three isolated 15-minute intervals.",
        duration: "45 Mins"
      },
      {
        step: "05",
        title: "Remineralization Shield Seal",
        desc: "After final rinse, we paint a bio-active calcium phosphate and fluoride shield over the teeth to lock in shine and immediately eliminate sensitivity.",
        duration: "10 Mins"
      }
    ],
    'dental-implants': [
      {
        step: "01",
        title: "Initial Consultation & 3D CT Scan",
        desc: "We perform a low-radiation cone-beam CT scan to verify jawbone depth, density, and layout, planning the precise placement of the root post.",
        duration: "30 Mins"
      },
      {
        step: "02",
        title: "Biocompatible Titanium Placement",
        desc: "Under light, highly comfortable local anesthesia, our specialists position the medical-grade implant root directly into the jawbone structure.",
        duration: "45 Mins"
      },
      {
        step: "03",
        title: "Healing & Osseointegration",
        desc: "The implant naturally fuses with the biological bone structure over 3-6 months, creating a permanent, rock-solid anchor foundation.",
        duration: "3-6 Months"
      },
      {
        step: "04",
        title: "Discreet Custom Abutment Place",
        desc: "A custom titanium connector is linked to the implant post once fully healed, which acts as a sturdy core to support the crown.",
        duration: "15 Mins"
      },
      {
        step: "05",
        title: "Bespoke Ceramic Crown Mount",
        desc: "We securely lock in your handcrafted, color-matched dental crown to restore 100% of your chewing force and natural facial aesthetics.",
        duration: "30 Mins"
      }
    ],
    'braces-aligners': [
      {
        step: "01",
        title: "3D Intraoral Digital Wand Scan",
        desc: "We bypass messy silicone trays using a high-definition iTero digital scanner to map your complete teeth spacing and bite alignment.",
        duration: "15 Mins"
      },
      {
        step: "02",
        title: "Bespoke 3D Movement Modeling",
        desc: "Our certified orthodontists simulate the gradual sequential movement of each tooth to plot your full set of custom transparent aligners.",
        duration: "3 Days"
      },
      {
        step: "03",
        title: "First Fit & Precision Attachments",
        desc: "We deliver your custom aligners and apply subtle tooth-colored anchors to deliver gentle, calculated directional forces.",
        duration: "30 Mins"
      },
      {
        step: "04",
        title: "Sequential Changing Cycles",
        desc: "You transition to the next custom aligner tray set every 10–14 days. We schedule non-invasive checkups in our office once every 6 weeks.",
        duration: "15 Mins"
      },
      {
        step: "05",
        title: "Nighttime Retainer Final Lock",
        desc: "Once the ideal alignment layout is achieved, we provide customized nighttime guard retainers to permanently protect your straight smile.",
        duration: "15 Mins"
      }
    ],
    'root-canal': [
      {
        step: "01",
        title: "Micro-Surgical Isolation Dam",
        desc: "We apply a comfortable, sterile rubber barrier to isolate the tooth and maintain an completely hygienic preparation environment.",
        duration: "10 Mins"
      },
      {
        step: "02",
        title: "Microscopic Pulp Access Location",
        desc: "Under high-magnification endodontic microscopes, we gently open the crown structure to locate the narrow dental canals.",
        duration: "15 Mins"
      },
      {
        step: "03",
        title: "Chemical Cleanse & Sterilization",
        desc: "We extract infected pulp tissue elements using flexible micro-files and sterilize the space with biochemical antiseptic flushes.",
        duration: "30 Mins"
      },
      {
        step: "04",
        title: "Biocompatible Resin Canal Seal",
        desc: "The cleaned cavities are fully dried and tightly sealed with a biocompatible resin compound to block future bacteria entry.",
        duration: "15 Mins"
      },
      {
        step: "05",
        title: "Composite Rebuild & Crown",
        desc: "We reconstruct the external tooth structural core, sealing the treatment. This prepares the tooth for long-term chewing with standard crown protection.",
        duration: "45 Mins"
      }
    ],
    'smile-design': [
      {
        step: "01",
        title: "Studio Facial Analysis",
        desc: "We map your smile using pro DSLR photography, analyzing lip symmetry, speech lines, and proportions to customize a perfect layout blueprint.",
        duration: "45 Mins"
      },
      {
        step: "02",
        title: "Microscopic Biological Prep",
        desc: "We polish a microscopic 0.3mm layer of outer enamel to accommodate custom veneers seamlessly without looking bulky.",
        duration: "30 Mins"
      },
      {
        step: "03",
        title: "Test-Drive Custom Temporaries",
        desc: "We install beautiful custom temporary veneers, letting you check and test-drive your proposed shape while in everyday settings.",
        duration: "7 Days"
      },
      {
        step: "04",
        title: "Ceramist Master Handcrafting",
        desc: "Our dental lab partner's master ceramists individually layer and paint premium lustrous porcelain shells representing healthy enamel.",
        duration: "7-10 Days"
      },
      {
        step: "05",
        title: "Bio-Adhesive Permanent Bond",
        desc: "We custom-bond your handcrafted veneers under microscopic light curing, creating permanent, beautiful facial alignment.",
        duration: "60 Mins"
      }
    ],
    'routine-cleaning': [
      {
        step: "01",
        title: "Digital Wellness Check",
        desc: "We check crown lines, gum health margins, and tissue conditions, performing complete diagnostic screenings.",
        duration: "10 Mins"
      },
      {
        step: "02",
        title: "Ultrasonic Plaque Scaling",
        desc: "We clear stubborn calcified calculus tartar from above and below the gumlines using micro-vibrational ultrasonic tips.",
        duration: "20 Mins"
      },
      {
        step: "03",
        title: "Soothing Active Water Floss",
        desc: "A warm pressure wash cleans dental pockets, getting between interproximal spots to clear hidden food debris.",
        duration: "5 Mins"
      },
      {
        step: "04",
        title: "Fluoride Stain Buffing",
        desc: "We polish enamel using clinical prophy paste, clearing extrinsic coffee stains and restoring a glassy, smooth micro-enamel surface.",
        duration: "10 Mins"
      },
      {
        step: "05",
        title: "Periodontal Coaching Block",
        desc: "We showcase target brushing angles, map out high-risk plaque zones, and provide personalized flossing strategies.",
        duration: "5 Mins"
      }
    ]
  };

  const treatmentSteps = allTreatmentSteps[service.id] || allTreatmentSteps['teeth-whitening'];

  // Dynamic pricing packages mapping
  const allPricingTiers: Record<string, Array<{ name: string; price: string; valueProp: string; savings: string; features: string[]; cta: string; highlight: boolean }>> = {
    'teeth-whitening': [
      {
        name: "Standard Medical Whitening",
        price: "₹24,999",
        valueProp: "Best for quick yellowing removal",
        savings: "Save ₹8,000 off regular rate",
        features: [
          "Full 60-Minute Blue Laser Session",
          "Painless Gingival Gum Barrier Shielding",
          "Up to 6 shades shade improvement",
          "Active remineralization enamel therapy",
          "Complimentary post-treatment shade map"
        ],
        cta: "Book Standard Bundle",
        highlight: false
      },
      {
        name: "SmileCraft Premium Ultimate Glow",
        price: "₹37,500",
        valueProp: "Our highest performance guarantee",
        savings: "Best value bundle includes home care care pack",
        features: [
          "Full 90-Minute Extended Laser session",
          "Covers up to 10 dental arch bands",
          "Achieves up to 8-10 shades of brilliant polish",
          "Double Potassium-Hydrate sensitivity blocker",
          "Take-home custom maintenance touch-up pen (₹6,000 value)",
          "Complimentary deep scaling session voucher worth ₹10,000"
        ],
        cta: "Book Premium Experience",
        highlight: true
      }
    ],
    'dental-implants': [
      {
        name: "Standard Implant Fitting",
        price: "₹1,49,999 +",
        valueProp: "Bio-compatible root integration post",
        savings: "Flexible dental plans available",
        features: [
          "Low-Radiation CBCT Diagnostic scan",
          "Sterile Surgical Root Placement under local bloc",
          "All-inclusive medical stitches and suture followup",
          "Biocompatible osseointegrated titanium post",
          "Premium custom digital impression files"
        ],
        cta: "Book Base Fitment Consultation",
        highlight: false
      },
      {
        name: "Full Root & Matching Crown Block",
        price: "₹2,45,000",
        valueProp: "Saves money and offers lifetime guarantee",
        savings: "Save ₹37,500 compared to individual procedures",
        features: [
          "All items inside Standard Implant Fitting",
          "Custom Titanium Connector Abutment Support",
          "Handcrafted Premium Solid Porcelain Crown",
          "Individual micro-match coloring glaze",
          "Comprehensive 5-Year Structural Integrity Warranty",
          "1-Year free clinical deep scaling followups"
        ],
        cta: "Book Ultimate All-Inclusive Bundle",
        highlight: true
      }
    ],
    'braces-aligners': [
      {
        name: "Express Clear Aligner Track",
        price: "₹1,99,999",
        valueProp: "Best for light cosmetic alignments",
        savings: "Only ₹12,500/month with zero interest EMI",
        features: [
          "High-Precision iTero 3D Oral Scan",
          "Complete suite of up to 12 sequential trays",
          "All clinical attachments application session",
          "Includes first set of nighttime retainer guards",
          "Treatment completed in 4 to 6 months"
        ],
        cta: "Book Aligner Assessment",
        highlight: false
      },
      {
        name: "SmileCraft Prime Unlocked",
        price: "₹3,20,000",
        valueProp: "Comprehensive alignment for active bites",
        savings: "Includes FREE teeth whitening bundle",
        features: [
          "Unlimited tray changes and customized adjustments",
          "Resolves severe jaw crowding and dental overbites",
          "All orthogonal progress checkups included",
          "2 Years of custom medical nighttime retainers",
          "Professional laser teeth whitening post-completion (₹24,999 value)"
        ],
        cta: "Book Full Smile Orthodontics",
        highlight: true
      }
    ],
    'root-canal': [
      {
        name: "Standard Micro-Endodontia",
        price: "₹14,999 +",
        valueProp: "Microscope-guided root disinfection",
        savings: "Stops acute throbbing pain on same day",
        features: [
          "High-power microscopic canal evaluation",
          "Soft local block computerized anesthesia",
          "Biochemical micro-disinfection steps",
          "Permanent biocompatible Gutta-Percha seal",
          "Electronic apex locator length mapping"
        ],
        cta: "Book Canal Therapy",
        highlight: false
      },
      {
        name: "Endodontic & Full Crown Seal",
        price: "₹99,999",
        valueProp: "Saves and permanently reinforces tooth",
        savings: "Saves ₹20,000 over separate appointments",
        features: [
          "All items in Standard Micro-Endodontia",
          "Composite structural core rebuild & post",
          "Handcrafted protective zirconia/ceramic crown",
          "Restores 100% of standard bite force capacity",
          "Comprehensive physical followup checkup with xrays"
        ],
        cta: "Book Therapy & Crown Bundle",
        highlight: true
      }
    ],
    'smile-design': [
      {
        name: "Cosmetic Modeling & Studio Drafts",
        price: "₹12,499",
        valueProp: "Bespoke digital preview & consultation",
        savings: "100% credit applied to final veneers",
        features: [
          "Cosmetic SLR studio diagnostic photos",
          "Detailed facial symmetry alignment mapping",
          "3D digital mockup rendering of your future smile",
          "Direct modeling preview session with ceramist",
          "Dental wellness scale check during visit"
        ],
        cta: "Book Design Mockup Session",
        highlight: false
      },
      {
        name: "Premium Smile Design Per Veneer",
        price: "₹64,999",
        valueProp: "Master artisan individual ceramic veneers",
        savings: "Exclusive discounts for 6+ veneers",
        features: [
          "Microscopic minimal biological preparation",
          "Handcrafted natural translucent medical porcelain",
          "Highest possible stain resistance structure",
          "Permanent light-cured resin adhesion bonding",
          "Includes custom protective orthodontic night splint"
        ],
        cta: "Book Veneer Smile Makeover",
        highlight: true
      }
    ],
    'routine-cleaning': [
      {
        name: "Complete Professional Wellness Scan",
        price: "₹9,999",
        valueProp: "Essential dental scale and hygiene visit",
        savings: "100% covered by major insurer networks",
        features: [
          "Ultrasonic scale tartar removal, soft plaque extraction",
          "Professional high-pressure flossing & paste polish",
          "Diagnostic intraoral camera scanning screen",
          "Oral cancer tissue assessment",
          "Gift travel kit with medical-grade toothbrush & rinse"
        ],
        cta: "Book Wellness Cleaning",
        highlight: true
      }
    ]
  };

  const pricingTiers = allPricingTiers[service.id] || allPricingTiers['teeth-whitening'];

  // Dynamic FAQs mapping
  const allFaqs: Record<string, typeof whiteningFaqs> = {
    'teeth-whitening': whiteningFaqs,
    'dental-implants': [
      {
        question: "Is the dental implant surgery painful?",
        answer: "No, the placement is extremely comfortable. We use computerized localized anesthesia to completely freeze the placement quadrant. During the procedure you will feel light vibrations or light pressure but absolutely zero discomfort. Pain after treatment is described as a mild ache, easily managed with basic ibuprofen.",
        category: "Implants"
      },
      {
        question: "How long takes the entire implant process from consultation to final crown?",
        answer: "The total timeframe is usually 3 to 6 months. This length is required for 'osseointegration'—the biological fusion process where your jawbone mineralizes around the titanium root, establishing a foundation that lasts for decades. We provide beautiful provisional temporary crowns so you can eat and smile normal.",
        category: "Implants"
      },
      {
        question: "Am I a suitable candidate for implant surgery?",
        answer: "Ideal candidates must have healthy gums, be in good general wellness, and possess sufficient jawbone density to anchor the titanium. If bone volume has thinned, our specialist can perform a minor bone graft during placement to achieve absolute stability.",
        category: "Implants"
      }
    ],
    'braces-aligners': [
      {
        question: "How do custom clear aligners straighten teeth discretely?",
        answer: "Clear aligners are thin, medical-grade polyurethane trays custom-molded to fit teeth perfectly. Each tray administers gentle, calibrated micro-forces to move teeth sequentially. You replace them with the next set every 10-14 days to transition teeth to their perfect positions.",
        category: "Orthodontics"
      },
      {
        question: "How many hours per day should I wear clear aligners?",
        answer: "For guaranteed timely movement, you must wear aligner trays for 20 to 22 hours per day. Remove them only when consuming meals, drinking hot or highly colored beverages (such as coffee, tea, or soda), and during flossing/brushing.",
        category: "Orthodontics"
      },
      {
        question: "Will clear aligners cause speech lisps?",
        answer: "Some patients notice a very small, natural lisp for the first 24 to 48 hours as their oral posture adapts to the ultra-thin trays. Your tongue adjusts extremely quickly and speech patterns return to 100% normal in a few days.",
        category: "Orthodontics"
      }
    ],
    'root-canal': [
      {
        question: "Why does a root canal have a reputation for pain?",
        answer: "This is a common clinical myth! The root canal procedure does not *cause* pain—it actually *relieves* throbbing pain caused by an infected, inflamed tooth nerve. By utilizing microscopic files and computerized anesthesia, details are identical to getting a basic cavity filling.",
        category: "Root Canal"
      },
      {
        question: "Should I get a root canal or just have the tooth extracted?",
        answer: "It is always clinically superior to preserve biological enamel and root structure whenever possible. Restoring your biological tooth prevents neighboring teeth from shifting, maintains healthy jawbone density, and preserves your natural bite feel.",
        category: "Root Canal"
      },
      {
        question: "Will the treated tooth need a crown afterward?",
        answer: "Yes. Removing the infected vascular pulp removes the internal fluid supply, making the tooth structure slightly more brittle under pressure. Placing a porcelain crown shields the tooth, preventing cracks and guaranteeing it can withstand chew forces for life.",
        category: "Root Canal"
      }
    ],
    'smile-design': [
      {
        question: "What exactly are porcelain veneers and how long do they last?",
        answer: "Veneers are ultra-thin shells of custom translucent porcelain that are bonded chemically to the front faces of teeth. They instantly correct gaps, chips, size mismatches, and severe discoloration. With routine cleaning sessions, they easily last 15 to 25 years.",
        category: "Veneers"
      },
      {
        question: "Is the enamel preparation painful or sensitive?",
        answer: "No, the prep is extremely non-invasive. We remove a microscopic sliver of outer enamel (typically 0.3mm to 0.5mm, equivalent to a contact lens thickness). This is usually painless, and we construct comfortable temporary veneers to insulate teeth while your permanent porcelain is layered.",
        category: "Veneers"
      },
      {
        question: "Are porcelain veneers resistant to stain yellowing?",
        answer: "Yes, our high-quality glazed ceramics are completely non-porous. Unlike dental composite resins or biological enamel, premium veneers resist staining from red wine, dark coffee, turmeric, and tobacco completely.",
        category: "Veneers"
      }
    ],
    'routine-cleaning': [
      {
        question: "Why do I need cleanings if I brush and floss daily?",
        answer: "Brush bristles are soft and cannot reach sub-gingival spaces. Over time, soft plaque mineralizes into rock-hard tartar calculus. Tartar can only be cleared using dental ultrasonic scaling instruments. Left untreated, tartar causes bleeding gums, bad breath, and bone recession.",
        category: "Cleaning"
      },
      {
        question: "Does clinical ultrasonic deep scaling hurt?",
        answer: "No, the scaler uses comfortable acoustic micro-vibrations with safe water spray to glide plaque off without scratching teeth. For patients with high thermal root sensitivity, our hygienists can apply a rapid topical desensitizing liquid for absolute comfort.",
        category: "Cleaning"
      },
      {
        question: "What is an oral cancer check and is it in my cleaning?",
        answer: "Yes, our routine check includes a complete screening of your soft palate, throat, tongue, and cheek lining to catch abnormalities at micro stages. This check is completely painless, takes 2 minutes, and is vital for general physical wellness.",
        category: "Cleaning"
      }
    ]
  };

  const faqList = allFaqs[service.id] || allFaqs['teeth-whitening'];

  // Generate JSON-LD FAQ Schema for Google Rich Snippets SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Dynamic simulator goals for candidacy tracker
  const allSimulatorGoals: Record<string, Array<{ goal: string; diagnosis: string; timeline: string; tech: string }>> = {
    'dental-implants': [
      {
        goal: "Singly Missing Tooth",
        diagnosis: "A standalone bio-compatible titanium post is placed, then capped with a porcelain enamel-matched crown. No damage is inflicted on adjacent teeth.",
        timeline: "3 to 4 months (Allows perfect biological osseointegration)",
        tech: "3D CBCT Guided Surgery & iTero Digital Scans"
      },
      {
        goal: "Multiple Gapped Area",
        diagnosis: "A custom titanium bridge is fabricated and anchored by two implants on either side, fully restoring intermediate chewing force comfortably.",
        timeline: "4 to 5 months (Ensures bone adaptation & tissue shaping)",
        tech: "Digital Shading spectrometer & CAD/CAM milling"
      },
      {
        goal: "Uncomfortable Loose Dentures",
        diagnosis: "An 'All-on-4' or 'All-on-6' arch system is secured. High-stability attachments anchor a natural prosthodontic arch. Say goodbye to messy adhesives.",
        timeline: "Immediate same-day provisional load, full heal in 4 months",
        tech: "Biomedical Titanium Alloys & Computerized stress mapping"
      }
    ],
    'braces-aligners': [
      {
        goal: "Crooked & Crowded Teeth",
        diagnosis: "Discreet transparent polyurethane aligner trays apply calculated horizontal directional pressure to expand and guide crowded overlap teeth safely.",
        timeline: "6 to 12 months (sequential changing cycles)",
        tech: "iTero 3D Digital Mouth Scans & ClinCheck simulation"
      },
      {
        goal: "Gaps & Spacing Concerns",
        diagnosis: "Sequential custom aligner sets close wide spaces and gaps. The pressure brings teeth together and reinforces gum tissue tightness.",
        timeline: "4 to 8 months (Highly rapid cosmetic transformation)",
        tech: "Bespoke tooth-colored retention anchoring tabs"
      },
      {
        goal: "Overbite or Underbite Align",
        diagnosis: "Orthodontists utilize specialized aligner wings or transparent elastic connectors to coordinate jaw lines and restore ideal biological chewing angles.",
        timeline: "12 to 18 months (Focuses on skeletal adaptation safety)",
        tech: "3D Dynamic Skeletal stress modeling"
      }
    ],
    'root-canal': [
      {
        goal: "Throbbing Hot/Cold Pain",
        diagnosis: "Microscopic endodontic files extract inflamed vascular pulp. Canals are completely disinfected with biological rinses to instantly drop target pain.",
        timeline: "Single 60-90 minute visit (98% same-day relief guaranteed)",
        tech: "Endodontic Microscopes & Electronic Canal Locators"
      },
      {
        goal: "Gum Abscess or Swelling",
        diagnosis: "Deep localized dental tissue cleaning clears gum pockets, flushing bacteria. Stops systemic infections and preserves biological bone anchors.",
        timeline: "Single session, swelling subsides in 48 hours",
        tech: "Laser-assisted biochemical canal sanitization"
      },
      {
        goal: "Fractured Enamel Repair",
        diagnosis: "The internal structural canal is sealed, and reinforced with a composite resin core, then capped with a zirconia crown for bite strength.",
        timeline: "2 visits: 1st for canal seal, 2nd for permanent crown fit",
        tech: "Custom CAD/CAM Ceramic Milled crowns"
      }
    ],
    'smile-design': [
      {
        goal: "Intrinsic Deep Yellowing",
        diagnosis: "Ultra-thin handcrafted porcelain veneers are bonded, covering stubborn antibiotic gray stains that laser whitening cannot reach.",
        timeline: "2 visits over 7 to 10 days (Provides permanent shine)",
        tech: "Hand-layered high-translucency medical ceramics"
      },
      {
        goal: "Chipped or Worn Front Teeth",
        diagnosis: "High-precision veneer laminates reconstruct lost enamel length, balancing teeth layout and restoring youthfulness to lips.",
        timeline: "2 visits total (Mockups are fully tested first)",
        tech: "3D Photographic facial symmetry alignment"
      },
      {
        goal: "Asymmetric Size Discrepancies",
        diagnosis: "A customized combination of veneers and minor cosmetic gum lifting balances smile proportions and creates a flawless camera smile line.",
        timeline: "2 visits (Includes customized template mockups)",
        tech: "Laser soft-tissue remodeling & virtual 3D rendering"
      }
    ],
    'routine-cleaning': [
      {
        goal: "Tartar/Calculus Buildup",
        diagnosis: "Acoustic micro-vibrations clear hard calculus above and below teeth lines, eliminating bad breath and bleeding gums instantly.",
        timeline: "Single 45-minute hygiene session",
        tech: "Comfortable Piezoelectric ultrasonic scale wands"
      },
      {
        goal: "Bleeding Gums Prevention",
        diagnosis: "Gentle sub-gingival scaling and warm water wash clear bacteria-harboring plaque colonies, returning gum tissue to pink tight health.",
        timeline: "Gums heal and stop bleeding in 10-14 days",
        tech: "Antiseptic sub-gingival fluid flushes"
      },
      {
        goal: "Extrinsic Stain Eradication",
        diagnosis: "Clinical prophy paste containing micro-buffing particles combined with high-speed rubber cups scrubs coffee, tea, and tobacco spots safely.",
        timeline: "Completed in 15 minutes of the hygiene visit",
        tech: "High-pressure air-flow polishing systems"
      }
    ]
  };

  const simulatorGoals = allSimulatorGoals[service.id] || [];

  return (
    <div className="pt-20 bg-slate-50/40">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-tr from-cyan-950 via-slate-900 to-cyan-900 text-white py-16 sm:py-24 overflow-hidden">
        {/* Background visual layers */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title Block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block py-1.5 px-4 rounded-xl bg-sky-500/15 border border-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-widest font-mono">
                {service.id === 'teeth-whitening' || service.id === 'smile-design' ? 'Premium Cosmetic Care' : 'Specialized Clinical Care'}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Dental Mastery<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-450 to-sky-300 bg-sky-400">{service.title}</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {service.shortDesc} Experience biocompatible dentistry designed with absolute patient comfort in mind. We combine certified specialists with microscopic pain-free technologies.
              </p>

              {/* Utility Pill Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold py-2">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl text-sky-300 border border-slate-700">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Duration: {service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl text-sky-300 border border-slate-700">
                  <Flame className="w-4 h-4 text-sky-400" />
                  <span>Price: {service.price}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl text-emerald-300 border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Painless Treatment Guarantee</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-6">
                <div>
                  <span className="text-2xl font-black text-white">4.9★</span>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Rating (380+ reviews)</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">{service.price}</span>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Base promo price</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">100%</span>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Satisfaction Guarantee</p>
                </div>
              </div>
            </div>

            {/* Visual Image overlay */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 shadow-slate-900 aspect-[16/10] bg-cyan-950">
                <img
                  src={currentImg}
                  alt={`${service.title} illustration`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & BENEFITS TAB SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Overview Detail Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-bold text-sky-500 uppercase tracking-widest font-mono">Procedure Science</h2>
              <h3 className="text-3xl font-extrabold text-cyan-950 font-sans tracking-tight">
                Comfort-Focused Technique & High Precision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Tabs for Benefits vs Suitability */}
              <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-4">
                <div className="flex border-b border-slate-100">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-3 text-sm font-bold tracking-tight transition-all relative px-2 cursor-pointer ${
                      activeTab === 'benefits' ? 'text-sky-600 font-bold border-b-2 border-sky-600' : 'text-slate-400'
                    }`}
                  >
                    Clinical Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('suitability')}
                    className={`pb-3 text-sm font-bold tracking-tight transition-all relative ml-6 px-2 cursor-pointer ${
                      activeTab === 'suitability' ? 'text-sky-600 font-bold border-b-2 border-sky-600' : 'text-slate-400'
                    }`}
                  >
                    Ideal Candidates
                  </button>
                </div>

                <div className="pt-2 min-h-[140px]">
                  {activeTab === 'benefits' ? (
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600 gap-2.5">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-3">
                      {service.suitability.map((suit, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600 gap-2.5">
                          <Check className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                          <span>{suit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* 3. INTERACTIVE CORNER: BEFORE/AFTER SLIDER OR TREATMENT SOLUTION SIMULATOR */}
            <div className="lg:col-span-5 space-y-6">
              {service.id === 'teeth-whitening' ? (
                // teeth whitening slider component (Fixed horizontal squish bug and compiled z-index bug)
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm text-center space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-cyan-950 font-sans">Interactive Shade Slider</h4>
                    <p className="text-xs text-slate-400">Drag the control knob to review clinical treatment results</p>
                  </div>

                  {/* Slider stage */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner select-none bg-sky-50">
                    {/* Background Image (After - Brilliant Shading) */}
                    <img
                      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                      alt="After Whitening Brilliant Smile"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute right-4 bottom-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase font-mono z-10 shadow-sm">
                      After (Brilliant Shade)
                    </div>

                    {/* Clip Container (Before Image) - Using beautiful clip-path to fix image-squishing */}
                    <div
                      className="absolute inset-0 pointer-events-none border-r-2 border-white"
                      style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                        alt="Before Whitening Decayed shade"
                        className="absolute inset-0 w-full h-full object-cover filter sepia(0.65) saturate(1.1) brightness(0.92)"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute left-4 bottom-4 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase font-mono z-10 shadow-sm">
                        Before Stained
                      </div>
                    </div>

                    {/* Range Input with compiled standard high z-index overlay */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                      style={{ zIndex: 30 }}
                      aria-label="Before after teeth slider"
                    />

                    {/* Visual slider bar line alignment */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow"
                      style={{ left: `${sliderValue}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        ↔
                      </div>
                    </div>
                  </div>

                  <div className="bg-sky-50/50 p-3 rounded-xl flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-sky-500" />
                    <span className="text-xs text-sky-900 font-bold">Erases stubborn coffee and tobacco stains in 1 visit</span>
                  </div>
                </div>
              ) : (
                // Simulator component for other services (Highly customized interactive goal selector)
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-cyan-950 font-sans">Bespoke Solution Simulator</h4>
                    <p className="text-xs text-slate-400">Select your active concern below to see our planned solution</p>
                  </div>

                  {/* Concern list buttons */}
                  <div className="space-y-2">
                    {simulatorGoals.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedGoalIdx(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex justify-between items-center transition-all cursor-pointer ${
                          selectedGoalIdx === idx
                            ? 'bg-sky-900 text-white shadow-md'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{g.goal}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${selectedGoalIdx === idx ? 'rotate-90' : ''}`} />
                      </button>
                    ))}
                  </div>

                  {/* Solution display box */}
                  <AnimatePresence mode="wait">
                    {simulatorGoals[selectedGoalIdx] && (
                      <motion.div
                        key={selectedGoalIdx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="bg-sky-50/60 rounded-2xl p-4 space-y-4 border border-sky-100"
                      >
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold text-sky-700 font-mono uppercase tracking-wider">Clinical Solution</span>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {simulatorGoals[selectedGoalIdx].diagnosis}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-sky-100/50">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 font-mono uppercase">Avg Timeline</span>
                            <p className="text-xs text-cyan-900 font-extrabold mt-0.5">
                              {simulatorGoals[selectedGoalIdx].timeline}
                            </p>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 font-mono uppercase">Key Technology</span>
                            <p className="text-xs text-cyan-900 font-extrabold mt-0.5">
                              {simulatorGoals[selectedGoalIdx].tech}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-sky-50/50 p-3 rounded-xl flex items-center justify-center gap-2 text-center text-pretty">
                    <ShieldCheck className="w-5 h-5 text-sky-500" />
                    <span className="text-xs text-sky-900 font-bold">Safe biocompatible materials & zero irritation designs</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLINICAL WALKTHROUGH PROCESS */}
      <section className="py-20 bg-cyan-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-sky-400 font-mono tracking-widest uppercase">The Treatment Cycle</span>
            <h2 className="text-3xl font-extrabold font-sans text-white tracking-tight">Step-by-Step Experience Blueprint</h2>
            <p className="text-sm text-slate-300">
              Here is exactly what you will experience during your {service.title} appointment with us. Pristine cleanliness, comfort, and direct dental mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {treatmentSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-cyan-900/40 border border-sky-900/60 p-6 rounded-2xl relative space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-sky-400 font-mono leading-none mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-sky-900/50 text-[10px] font-bold text-sky-400 tracking-wider uppercase font-mono">
                  ⏱ {step.duration}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PRICING PACKAGES SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-sky-500 font-mono tracking-widest uppercase">Honest Rates</span>
            <h2 className="text-3xl font-extrabold text-cyan-950 tracking-tight">Service Packages & Pricing</h2>
            <p className="text-sm text-slate-500">
              Transparent, itemized pricing structures. We accept all dynamic dental card accounts and handle insurance claims electronically.
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-8 max-w-4xl mx-auto ${pricingTiers.length === 1 ? 'md:grid-cols-1 max-w-lg' : 'md:grid-cols-2'}`}>
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-3xl p-8 bg-white border flex flex-col justify-between ${
                  tier.highlight 
                    ? 'border-sky-500 ring-2 ring-sky-300/15 shadow-xl md:-translate-y-2 relative' 
                    : 'border-slate-150 shadow-sm'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-white font-bold text-[10px] uppercase tracking-wider py-1 px-4 rounded-full shadow-md shadow-sky-500/10">
                    ★ Recommended Choice
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-cyan-950 font-sans">{tier.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{tier.valueProp}</p>
                  </div>

                  <div className="pb-6 border-b border-slate-100 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-cyan-950 tracking-tight">{tier.price}</span>
                    <span className="text-xs text-emerald-600 font-bold font-mono uppercase bg-emerald-50 px-2 py-0.5 rounded-md">
                      {tier.savings}
                    </span>
                  </div>

                  {/* List of features */}
                  <ul className="space-y-3.5 text-sm text-slate-600">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#service-booking-form"
                    onClick={scrollToBooking}
                    className={`w-full py-4 rounded-xl font-bold text-center block text-sm transition-all ${
                      tier.highlight 
                        ? 'bg-sky-900 text-white hover:bg-sky-950 shadow-lg shadow-sky-900/10' 
                        : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-150'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-10 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-800 leading-normal">
              <strong>Health Notice</strong>: Treatmont programs are not suitable for patients with severe active root infections or advanced, untreated periodontal bleeding. We will perform a mandatory pre-diagnostic scan during your visit to verify compatibility.
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-150">
        {/* Dynamic JSON-LD FAQ Schema markup for SEO Search Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-sky-500 font-mono tracking-widest uppercase">Expert Clarifications</span>
            <h2 className="text-3xl font-extrabold text-cyan-950 font-sans tracking-tight">{service.title} FAQs</h2>
            <p className="text-sm text-slate-500">
              Clear, scientific answers about treatment parameters, dental guidelines, and long-term maintenance.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-150 rounded-2xl overflow-hidden transition-all duration-250 hover:border-sky-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-cyan-950 font-sans text-sm sm:text-base cursor-pointer focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CTA BOOKING FORM */}
      <section id="service-booking-form" className="py-20 relative bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-150 shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* Heading */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-950 flex items-center justify-center mx-auto border border-sky-150 shadow-inner">
                  <Sparkles className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-cyan-950 font-sans tracking-tight">
                  Schedule {service.title} Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Submit this quick secure form below to reserve an instant assessment slot at modern promotional rates.
                </p>
              </div>

              {/* Form implementation */}
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-150 rounded-2xl p-6 sm:p-8 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                  <h4 className="text-lg font-bold text-emerald-950">Appointment Slot Provisionally Reserved!</h4>
                  <div className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you <strong className="font-bold">{bookingName}</strong>! We have provisionally blocked out the <strong>{bookingDate} at {bookingTime}</strong> slot for {service.title} treatment development. A specialized SmileCraft advisor will call you at <strong className="font-bold">{bookingPhone}</strong> within 30 minutes to finalize details.
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setBookingName('');
                    }}
                    className="px-6 py-2.5 rounded-lg bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-600 transition-all cursor-pointer"
                  >
                    Schedule Another Session
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="booking-name" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        id="booking-name"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Amanda Sterling"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="booking-email" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        id="booking-email"
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="e.g. care@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="booking-phone" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        id="booking-phone"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        placeholder="e.g. (555) 000-1234"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Date */}
                    <div className="space-y-1.5">
                      <label htmlFor="booking-date" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Preferred Date *</label>
                      <input
                        type="date"
                        id="booking-date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-slate-800 text-sm"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label htmlFor="booking-time" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Preferred Time Slot *</label>
                      <select
                        id="booking-time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-slate-800 text-sm cursor-pointer"
                      >
                        <option value="">-- Choose a time slot --</option>
                        <option value="9:00 AM">9:00 AM - Morning Slot</option>
                        <option value="11:30 AM">11:30 AM - Late Morning</option>
                        <option value="2:00 PM">2:00 PM - Afternoon</option>
                        <option value="4:30 PM">4:30 PM - Late Afternoon</option>
                      </select>
                    </div>

                  </div>

                  {/* Newsletter tick */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="opt-in-promos"
                      checked={hasSubscribed}
                      onChange={(e) => setHasSubscribed(e.target.checked)}
                      className="mt-1 shrink-0 accent-sky-500"
                    />
                    <label htmlFor="opt-in-promos" className="text-xs text-slate-400 leading-normal select-none">
                      Send me exclusive clinical dental health reminders and coupon deals for family checkups via SMS and email.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-sky-900 text-white font-bold text-sm shadow-lg hover:bg-sky-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Calendar className="w-4 h-4" />
                      )}
                      <span>Book provisional appointment slot</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 font-mono text-center pt-2">
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-500" /> Secure HIPAA Encryption</span>
                    <span>•</span>
                    <span>✓ No Booking Charge Required</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
