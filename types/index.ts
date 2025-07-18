export interface StatItem {
    icon: "check" | "users" | "zap" | "clock"
    value: string
    label: string
    color: "green" | "blue" | "purple" | "orange"
}

export interface Feature {
    icon: "user" | "check" | "lightbulb"
    title: string
    description: string
    color: "blue" | "green" | "purple"
}

export interface Step {
    step: number
    title: string
    description: string
    icon: "user" | "computer" | "book"
    color: "blue" | "green" | "purple"
}

export interface Testimonial {
    name: string
    role: string
    avatar: string
    testimonial: string
    color: "pink" | "blue" | "green"
}

export interface FooterLink {
    text: string
    href: string
}

export interface SocialIcon {
    icon: "twitter" | "linkedin" | "pinterest"
    href: string
}

export type ColorVariant = "blue" | "green" | "purple" | "pink" | "orange"
