export const brandName = "NIVAS"

export const brandMeta = {
  title: "NIVAS — Contemporary Living, Dhaka",
  description:
    "NIVAS — contemporary residences shaped for Dhaka. Considered residential environments where architecture, material and nature work quietly together.",
}

export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Journal", href: "#journal" },
]

export const mobileLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Enquire", href: "#contact" },
]

export const heroImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90"

export const storyImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"

export const manifestoImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90"

export type Project = {
  id: string
  index: string
  name: string
  location: string
  description: string
  image: string
  imageAlt: string
  imageSide: "left" | "right"
}

export const projects: Project[] = [
  {
    id: "aaranya",
    index: "01",
    name: "Aaranya",
    location: "Gulshan 2",
    description:
      "Twenty-four crafted homes wrapped around a private garden court, with deep balconies framing the city canopy.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Aaranya Residence exterior",
    imageSide: "left",
  },
  {
    id: "still-house",
    index: "02",
    name: "Still House",
    location: "Banani",
    description:
      "A quieter expression of urban living, composed with stone, filtered light and intimate landscaped terraces.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Still House interior",
    imageSide: "right",
  },
  {
    id: "the-courtyard",
    index: "03",
    name: "The Courtyard",
    location: "Dhanmondi",
    description:
      "Generous family residences organized around greenery, daylight and shared moments — a contemporary courtyard home.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "The Courtyard residence",
    imageSide: "left",
  },
]

export const marqueeWords = [
  "Light",
  "Material",
  "Landscape",
  "Longevity",
  "Community",
]

export type Service = {
  index: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    index: "01",
    title: "Residential Development",
    description:
      "Concept, architecture, construction and delivery of considered urban homes.",
  },
  {
    index: "02",
    title: "Landowner Partnership",
    description:
      "Transparent joint-development partnerships shaped around long-term value.",
  },
  {
    index: "03",
    title: "Interior & Styling",
    description:
      "Material-led interior design for homes that feel complete from day one.",
  },
  {
    index: "04",
    title: "Property Care",
    description:
      "Post-handover maintenance and operational support for lasting quality.",
  },
]

export type JournalPost = {
  category: string
  readTime: string
  title: string
  image: string
  imageAlt: string
}

export const journalPosts: JournalPost[] = [
  {
    category: "Design",
    readTime: "06 min read",
    title: "Why natural materials age better.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Natural interior materials",
  },
  {
    category: "City",
    readTime: "04 min read",
    title: "Building well in a changing Dhaka.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Dhaka city buildings",
  },
  {
    category: "Living",
    readTime: "05 min read",
    title: "The architecture of everyday calm.",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Home with plants and daylight",
  },
]

export type Stat = {
  value: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 28, suffix: "+", label: "Years of craft" },
  { value: 43, label: "Completed projects" },
  { value: 12, label: "Current residences" },
  { value: 97, suffix: "%", label: "On-time handover" },
]

export const enquiryOptions = [
  "A residence",
  "Landowner partnership",
  "Interior design",
  "General enquiry",
]

export const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Journal", href: "#journal" },
]
