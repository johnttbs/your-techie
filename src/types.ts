export interface FAQItem {
  question: string;
  answer: string;
}

export interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface FutureGoal {
  title: string;
  categories: string[];
  description: string;
  badge: string;
}

export interface Alumnus {
  name: string;
  role: string;
  formerRole: string;
  avatar: string;
  coords: { x: number; y: number }; // Percentage for custom Map representation
  achievement: string;
  testimony: string;
}

export interface SyllabusModule {
  id: string;
  title: string;
  icon: string;
  highlights: string[];
  duration: string;
  details: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
  course: string;
}
