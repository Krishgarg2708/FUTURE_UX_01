export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // Lucide icon name or component
  price: string;
  duration: string;
  suitability: string[];
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewText: string;
  image: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TrustIndicator {
  value: string;
  label: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface AppointmentBooking {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
