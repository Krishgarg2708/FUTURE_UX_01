import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  AlertOctagon,
  CheckCircle,
  Compass,
  ArrowRight,
  Info,
  Lock,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/dentistry';

interface FormFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Real-time validation checks
  const validateField = (name: string, value: string): string => {
    if (name === 'name') {
      if (!value.trim()) return 'Please enter your full name.';
      if (value.trim().length < 3) return 'Name must be at least 3 characters.';
    }
    if (name === 'phone') {
      if (!value) return 'Please enter your phone number.';
      const phoneClean = value.replace(/\D/g, '');
      if (phoneClean.length < 10) return 'Please enter a valid 10-digit phone number.';
    }
    if (name === 'email') {
      if (!value) return 'Please enter your email.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email format.';
    }
    if (name === 'service') {
      if (!value) return 'Please select a dental service option.';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Auto-formatting phone numbers for a smooth UX
    let formattedValue = value;
    if (name === 'phone') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 3) {
        formattedValue = numbers;
      } else if (numbers.length <= 6) {
        formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      } else {
        formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
    }

    setFields({ ...fields, [name]: formattedValue });

    if (touched[name]) {
      const fieldError = validateField(name, formattedValue);
      setErrors({ ...errors, [name]: fieldError });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const fieldError = validateField(name, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check all fields
    const formErrors: FormErrors = {};
    Object.keys(fields).forEach((key) => {
      const errorMsg = validateField(key, fields[key as keyof FormFields]);
      if (errorMsg) {
        formErrors[key as keyof FormErrors] = errorMsg;
      }
    });

    setErrors(formErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true
    });

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1200);
    }
  };

  const handleReset = () => {
    setFields({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
  };

  return (
    <div className="pt-20 bg-slate-50/40 min-h-screen">
      
      {/* 1. MAIN TITLE CONTAINER */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block py-1 px-3.5 rounded-full bg-sky-100 text-sky-850 text-xs font-bold uppercase tracking-wider font-mono">
            Direct Inquiries & Bookings
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-cyan-950 font-sans tracking-tight">
            Connect With Our Dental Specialist Team
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question about a dental service or ready to lock in an appointment? Drop us a line below. Our clinical secretaries respond to all submissions in 30 minutes or less.
          </p>
        </div>
      </section>

      {/* 2. BODY SECTION GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Cards Panel */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-150 shadow-sm space-y-6">
                <h3 className="text-base font-extrabold text-cyan-950 uppercase tracking-wider">Clinic Helpline Desk</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider font-mono">General Desk & Appointments</span>
                      <a href="tel:+18005557645" className="text-base font-extrabold text-cyan-950 hover:text-sky-600 transition-colors">
                        (800) 555-SMILE
                      </a>
                      <p className="text-xs text-slate-400">Toll-free clinic bookings support</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider font-mono">Electronic Inquiries</span>
                      <a href="mailto:care@smilecraftdental.com" className="text-base font-bold text-cyan-950 hover:text-sky-600 transition-colors">
                        care@smilecraftdental.com
                      </a>
                      <p className="text-xs text-slate-400">HIPAA secure email server</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider font-mono">Clinic Coordinates</span>
                      <p className="text-sm font-bold text-cyan-950">
                        SmileCraft Luxury Dental<br />
                        DLF Cyber City, Building 10C<br />
                        Phase 3, Gurugram, India
                      </p>
                      <p className="text-xs text-slate-400">Located on Floor 12, Tower C</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Dashboard Panel */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-150 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-505 text-sky-600" />
                  <h3 className="text-base font-extrabold text-cyan-950 uppercase tracking-wider">Office Hours</h3>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">Monday - Friday</span>
                    <span className="font-mono text-sky-600 font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">Saturday</span>
                    <span className="font-mono text-sky-600 font-bold">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-rose-700 font-bold bg-rose-50/50 p-2 text-xs rounded-xl">
                    <span className="flex items-center gap-1.5">
                      ⚠ Sunday Emergency
                    </span>
                    <span>On-Call Services Only</span>
                  </div>
                </div>
              </div>

              {/* Emergency Clinic Red Box CTA */}
              <div className="bg-gradient-to-tr from-rose-950 to-rose-900 text-white rounded-3xl p-6 border border-rose-900 shadow-lg space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-rose-300 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-extrabold">Have an urgent dental emergency?</h4>
                  <p className="text-xs text-rose-200 leading-normal">
                    Severe root pains, physical dental trauma, or chipped fillings are treated immediately by our on-call dental surgeon. We offer emergency consultations same-day.
                  </p>
                </div>
                <a
                  href="tel:+18005557645"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-rose-950 hover:bg-rose-50 text-xs font-bold text-center block transition-all"
                >
                  Dial Urgent Desk: (800) 555-7645
                </a>
              </div>

            </div>

            {/* Right Column: Dynamic Booking / Lead Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-150 p-6 sm:p-10 shadow-sm relative">
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extrabold text-cyan-950">Inquiry Received Successfully!</h3>
                      <p className="text-sm text-slate-500 max-w-md mx-auto">
                        Hi <strong className="font-bold text-slate-800">{fields.name}</strong>, thank you for choosing SmileCraft. Your consultation request for <strong className="font-bold text-slate-800">{fields.service}</strong> has been secured in our local queue. 
                      </p>
                      <div className="bg-sky-50 p-4 rounded-2xl max-w-sm mx-auto text-xs text-sky-800 space-y-1 font-mono text-left">
                        <p>• <strong>Client:</strong> {fields.name}</p>
                        <p>• <strong>Helpline ID:</strong> SCR-903829</p>
                        <p>• <strong>Callback number:</strong> {fields.phone}</p>
                        <p>• <strong>Category:</strong> {fields.service}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 rounded-xl bg-sky-900 hover:bg-sky-950 text-white font-bold text-xs shadow transition-all cursor-pointer"
                    >
                      Reset Form & Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-cyan-950 font-sans tracking-tight">Direct Patient Request Form</h3>
                      <p className="text-xs text-slate-400">All fields flagged with asterisks (*) must be properly filled out before submission.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Full Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={fields.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Marcus Sterling"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                              touched.name && errors.name 
                                ? 'border-red-500 focus:ring-red-400 bg-red-50/10' 
                                : touched.name && !errors.name && fields.name
                                  ? 'border-emerald-500 focus:ring-emerald-400'
                                  : 'border-slate-150 focus:ring-sky-500'
                            }`}
                          />
                          {touched.name && errors.name && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertOctagon className="w-3.5 h-3.5" /> {errors.name}</p>
                          )}
                          {touched.name && !errors.name && fields.name && (
                            <span className="absolute right-3.5 top-3.5 text-emerald-500">✓</span>
                          )}
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Phone Number *</label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. (555) 555-5555"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                              touched.phone && errors.phone 
                                ? 'border-red-500 focus:ring-red-400 bg-red-50/10' 
                                : touched.phone && !errors.phone && fields.phone
                                  ? 'border-emerald-500 focus:ring-emerald-400'
                                  : 'border-slate-150 focus:ring-sky-500'
                            }`}
                          />
                          {touched.phone && errors.phone && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertOctagon className="w-3.5 h-3.5" /> {errors.phone}</p>
                          )}
                          {touched.phone && !errors.phone && fields.phone && (
                            <span className="absolute right-3.5 top-3.5 text-emerald-500">✓</span>
                          )}
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. care@smilecraft.com"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                              touched.email && errors.email 
                                ? 'border-red-500 focus:ring-red-400 bg-red-50/10' 
                                : touched.email && !errors.email && fields.email
                                  ? 'border-emerald-500 focus:ring-emerald-400'
                                  : 'border-slate-150 focus:ring-sky-500'
                            }`}
                          />
                          {touched.email && errors.email && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertOctagon className="w-3.5 h-3.5" /> {errors.email}</p>
                          )}
                          {touched.email && !errors.email && fields.email && (
                            <span className="absolute right-3.5 top-3.5 text-emerald-500">✓</span>
                          )}
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-1.5">
                        <label htmlFor="service" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Dental Treatment Segment *</label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={fields.service}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-800 cursor-pointer focus:outline-none focus:ring-1 ${
                              touched.service && errors.service
                                ? 'border-red-500 focus:ring-red-400 bg-red-50/10'
                                : touched.service && !errors.service && fields.service
                                  ? 'border-emerald-500 focus:ring-emerald-400'
                                  : 'border-slate-150 focus:ring-sky-500'
                            }`}
                          >
                            <option value="">-- Choose Segment --</option>
                            {servicesData.map((s) => (
                              <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                            <option value="General Regular Checkups">General Routine Checkups</option>
                            <option value="Children Pediatric Dentistry">Pediatric Children Care</option>
                            <option value="Dental Emergency Consultation">Emergency Diagnosis</option>
                            <option value="My Question Is General">Other General Inquiry</option>
                          </select>
                          {touched.service && errors.service && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertOctagon className="w-3.5 h-3.5" /> {errors.service}</p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label htmlFor="message" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Inquiry Notes / Symptoms (Optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          value={fields.message}
                          onChange={handleChange}
                          placeholder="Tell us about your dental expectations or general time constraints..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-150 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-sky-900 text-white font-bold text-sm tracking-tight text-center flex items-center justify-center gap-2 hover:bg-sky-950 transition-all cursor-pointer shadow-lg shadow-sky-900/10"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        <span>Request Premium Appointment Slot</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 font-mono text-center pt-2">
                      <span className="flex items-center gap-1">✉ Response in 30 mins</span>
                      <span>•</span>
                      <span>💡 Free Dental Shade Check included</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GEOGRAPHIC GOOGLE MAPS PLACEHOLDER */}
      <section className="py-12 border-t border-slate-150 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-cyan-955 font-sans text-cyan-950">Visit Our Boutique Practice</h3>
            <p className="text-xs text-slate-400">Centrally located on 500 Fifth Avenue with direct subway access, valet parking, and luxury lobby assistants.</p>
          </div>

          {/* Map Vector Graphic Mockup Container - Extremely professional styling */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-150 aspect-[21/9] bg-gradient-to-br from-sky-50 to-indigo-50 shadow-inner flex items-center justify-center">
            
            {/* Simulated streets lines layout */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30 select-none pointer-events-none">
              <div className="col-span-12 border-b border-sky-200" />
              <div className="col-span-12 border-b border-sky-200" />
              <div className="col-span-12 border-b border-sky-200" />
              <div className="col-span-12 border-b border-sky-200" />
              <div className="col-span-12 border-b border-sky-200" />
              <div className="col-span-4 border-r border-sky-200" />
              <div className="col-span-4 border-r border-sky-200" />
              <div className="col-span-4 border-r border-sky-200" />
            </div>

            {/* Central Pin */}
            <div className="relative z-10 text-center space-y-3">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-sky-900 border-4 border-white flex items-center justify-center text-white shadow-xl mx-auto cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-sky-400" />
              </motion.div>
              <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-100 shadow-md text-xs">
                <strong className="text-cyan-950 block font-bold">SmileCraft Luxury Clinic</strong>
                <span className="text-slate-500 font-medium">Building 10C, DLF Cyber City, Gurugram</span>
              </div>
            </div>

            {/* Floating Info Panels */}
            <div className="absolute left-6 top-6 max-w-xs bg-cyan-955 bg-cyan-950 p-4 rounded-2xl tracking-normal text-white space-y-2 text-xs border border-sky-900 shadow-xl hidden sm:block">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wider font-mono text-[9px]">
                <Compass className="w-3.5 h-3.5" />
                <span>Nav Directions</span>
              </div>
              <p className="font-semibold">Direct access via Cyber City Rapid Metro Station. Dedicated visitor parking is available at Tower C basement level.</p>
            </div>

            <div className="absolute right-6 bottom-6 bg-white p-3 rounded-xl shadow border border-slate-100 text-[10px] text-slate-500 font-mono tracking-wider hidden md:block">
              Coordinates: 28.4952° N, 77.0892° E
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
