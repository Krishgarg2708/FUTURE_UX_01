import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  Activity,
  Layers,
  HeartPulse,
  Brush,
  CheckCircle,
  Award,
  Cpu,
  ShieldCheck,
  Star,
  ArrowRight,
  Shield,
  Heart,
  Calendar,
  Lock,
  Flame,
  Check,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData, testimonials, whyChooseUsData, trustIndicators } from '../data/dentistry';

export default function Home() {
  const location = useLocation();

  // Scroll to section logic from routing navigation state
  useEffect(() => {
    if (location.state && (location.state as any).scrollToSection) {
      const sectionId = (location.state as any).scrollToSection;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  // Dynamically map icon names from string references
  const iconMap: Record<string, React.ComponentType<any>> = {
    Sparkles: Sparkles,
    Activity: Activity,
    Layers: Layers,
    HeartPulse: HeartPulse,
    Brush: Brush,
    CheckCircle: CheckCircle,
    Award: Award,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck
  };

  // State to simulate a live review counter or active booking counts to push conversions
  const [activeBookingsToday] = useState(14);

  return (
    <div className="overflow-hidden bg-slate-50/50 pt-20">
      
      {/* SECTION 2: HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-sky-502/10 via-white to-slate-50/20 py-12 lg:py-20">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-indigo-150/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Highlight Pill */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/70 border border-sky-200/50 text-sky-900 text-xs font-semibold"
              >
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                <span>Award-Winning Premium Family & Cosmetic Dentistry</span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-950 leading-tight font-sans tracking-tight"
                >
                  Modern Dental Care for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                    Confident, Brilliant Brighter Smiles
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
                >
                  Experience state-of-the-art biological dentistry designed with absolute patient comfort in mind. We combine certified Harvard-grade specialists with microscopic pain-free technologies.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-sky-900 text-white font-semibold text-center text-sm shadow-xl shadow-sky-900/10 hover:bg-sky-950 transition-all transform hover:-translate-y-0.5"
                >
                  Book Instant Appointment
                </Link>
                <Link
                  to="/services/teeth-whitening"
                  className="px-8 py-4 rounded-xl bg-white text-sky-900 border border-sky-150 font-semibold text-center text-sm hover:bg-sky-50/50 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Teeth Whitening</span>
                  <ArrowRight className="w-4 h-4 text-sky-500" />
                </Link>
              </motion.div>

              {/* Hero Conversion Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-t border-slate-200/80 pt-6 flex flex-wrap items-center gap-6 text-slate-500 text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">✓</div>
                  <span>Painless Treatment Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">★</div>
                  <span>Rated 4.9 on Google (1,200+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-rose-50 text-rose-800 px-3 py-1 rounded-lg font-semibold animate-pulse border border-rose-100">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{activeBookingsToday} Consultation slots remaining today</span>
                </div>
              </motion.div>

            </div>

            {/* Right Media Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Premium clinical patient image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-sky-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Friendly SmileCraft dentist consultation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Promotion Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0 font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-cyan-950 uppercase tracking-widest">Active Special</h4>
                    <p className="text-sm font-bold text-slate-800">Laser Teeth Whitening just ₹24,999</p>
                    <p className="text-[10px] text-slate-500">Includes complete desensitizing gel treatment</p>
                  </div>
                </div>
              </div>

              {/* Abstract decorative graphic */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full blur-2xl opacity-40 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST INDICATORS SECTION */}
      <section id="trust-indicators" className="py-12 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustIndicators.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl hover:bg-slate-50/55 transition-all text-pretty"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-900 font-sans tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES SECTION */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-sky-500 uppercase tracking-widest font-mono">Our Specialties</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-cyan-950 font-sans tracking-tight">
              World-Class Dental Treatments Designed For Longevity
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide comprehensive preventative, wellness, and aesthetic restorative dentistry. Click on any card below to learn more.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              const isSpecial = service.id === 'teeth-whitening';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx % 3 * 0.1 }}
                  className={`group relative rounded-3xl p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 ${
                    isSpecial ? 'border-sky-300 ring-2 ring-sky-300/10' : ''
                  }`}
                >
                  {isSpecial && (
                    <span className="absolute top-4 right-4 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      ★ Best Seller
                    </span>
                  )}

                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                    isSpecial 
                      ? 'bg-sky-500 text-white' 
                      : 'bg-sky-50 text-sky-600'
                  }`}>
                    <ServiceIcon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-xl font-bold text-cyan-950 group-hover:text-sky-600 transition-colors mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100/80 text-xs">
                    <div>
                      <span className="text-slate-400 block font-mono">Starts At</span>
                      <strong className="text-cyan-950 font-bold text-sm">{service.price}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono">Sessions</span>
                      <strong className="text-slate-600 text-xs">{service.duration}</strong>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className={`flex-grow py-3 px-4 rounded-xl font-semibold text-center text-xs flex items-center justify-center gap-1.5 transition-all ${
                        isSpecial
                          ? 'bg-sky-900 text-white hover:bg-sky-950'
                          : 'bg-sky-50 text-sky-900 hover:bg-sky-100'
                      }`}
                    >
                      <span>Treatment Process</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="py-3 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-150 text-slate-600 font-semibold text-center text-xs flex items-center justify-center transition-all"
                    >
                      Book
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow overlay */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Uncompromising Standards</h5>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                  What Sets SmileCraft Apart From Traditional Dental Clinics
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We believe a trip to the dentist should feel relaxing, informative, and completely pain-free. We invest in high-magnification biology and computer-controlled systems to deliver unmatched results.
                </p>
              </div>

              {/* Grid of why choose us */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {whyChooseUsData.map((item, idx) => {
                  const itemIconMap: Record<string, typeof Sparkles> = {
                    Sparkles: Sparkles,
                    Cpu: Cpu,
                    Award: Award,
                    ShieldCheck: ShieldCheck
                  };
                  const IconComp = itemIconMap[item.icon] || Sparkles;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-sky-950/40 border border-sky-900/60 p-6 rounded-2xl space-y-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Graphics and Trust Cards Column */}
            <div className="relative">
              {/* Overlapping images & badge effect */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-cyan-950 border border-sky-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                  alt="Certified Safe Cold Laser treatment in state-of-the-art clinic"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid stat check */}
                <div className="absolute top-6 left-6 bg-cyan-950/90 backdrop-blur border border-sky-850 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">✓</div>
                  <div className="text-left">
                    <span className="text-[10px] text-sky-400 font-bold block uppercase tracking-wider leading-none">FDA Cleared</span>
                    <strong className="text-xs text-white">Safe Cold Laser Technology</strong>
                  </div>
                </div>

                {/* Dynamic specification detail block ("by type" design) */}
                <div className="absolute bottom-4 left-4 right-4 bg-cyan-950/95 backdrop-blur-md border border-sky-850/60 p-3.5 rounded-2xl flex flex-col gap-1 text-left">
                  <span className="text-[9px] font-bold text-sky-450 text-sky-450/90 font-mono uppercase tracking-widest">Device Spec Sheet</span>
                  <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-300">
                    <div>
                      <span className="text-slate-500 block font-mono text-[8px] uppercase">Laser Classification</span>
                      <strong className="text-white font-semibold">Class IIIb Semiconductor Diode</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-mono text-[8px] uppercase">Peak Emission</span>
                      <strong className="text-sky-300 font-semibold">810nm & 980nm dual-band</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra secondary badge listing certifications */}
              <div className="absolute -bottom-6 -left-6 bg-sky-500 text-cyan-950 p-5 rounded-2xl shadow-xl max-w-xs space-y-1.5 hidden sm:block">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-cyan-950">Accreditations</span>
                <p className="text-sm font-bold leading-snug">ADA, AACD & Endodontic Association Certified Doctors</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 bg-slate-50/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-sky-500 uppercase tracking-widest font-mono">Patient Voice</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-cyan-950 font-sans tracking-tight">
              Testimonials From Real Confident Patient Smiles
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We measure our quality through the wellness and gorgeous aesthetic satisfaction of our patients. Read about their customized therapy trips.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-150 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{review.reviewText}"
                  </p>
                </div>

                {/* Profile Header Block */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-cyan-950 text-sm leading-tight">{review.name}</h5>
                    <p className="text-xs text-slate-400">{review.role}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-sky-600 bg-sky-50 py-0.5 px-2 rounded-md">
                      Service: {review.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge Bar */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-bold">
              SmileCraft is highly verified. Over 1,200 verified reviews across 
              <span className="text-sky-600"> Google</span>, 
              <span className="text-sky-600"> healthgrades</span>, and 
              <span className="text-sky-600"> Yelp</span>.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 7: APPOINTMENT CTA BANNER */}
      <section id="cta-banner" className="py-16 sm:py-24 bg-gradient-to-tr from-cyan-950 to-sky-900 text-white relative overflow-hidden">
        {/* Abstract pattern visual elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/20 shadow-inner">
            <Calendar className="w-8 h-8" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight leading-tight">
              Ready to Craft Your Handcrafted Premium Smile?
            </h2>
            <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of healthy families who trust SmileCraft Dental for outstanding medical, orthodontic, and cosmetic whitening treatments. First-time client consultation includes professional 3D teeth scans and treatment estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-white text-cyan-950 font-bold hover:bg-sky-50 transition-all shadow-xl w-full sm:w-auto"
            >
              Book Complimentary Visit
            </Link>
            <a
              href="tel:+18005557645"
              className="px-8 py-4 rounded-xl bg-cyan-900 border border-sky-850 text-white hover:bg-cyan-850 font-semibold transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Helplines: (800) 555-7645</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 text-xs text-slate-300 font-mono">
            <span>✓ No Insurance Required to Book</span>
            <span>•</span>
            <span>✓ Instant Direct Confirmation</span>
            <span>•</span>
            <span>✓ 100% Pain-Free Promise</span>
          </div>
        </div>
      </section>

    </div>
  );
}
