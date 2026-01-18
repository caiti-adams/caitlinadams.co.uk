export const siteConfig = {
  name: "Caitlin Adams",
  title: "Caitlin Adams - Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/caiti_adams",
    instagram: "https://instagram.com/caiti_whatshername",
    email: "mailto:caitlinadams.za@gmail.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Caitlin Adams",
  description:
    "A creative <insert noun here> with a passion for storytelling and film.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Go to Projects",
      href: "/projects/",
    },
  },
  images: {
    light: "/assets/images/tech-background.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Caitlin Adams",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I am an aspiring filmmaker and actor.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "AWS",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2022 - Present",
        position: "Senior Frontend Developer",
        company: "Tencent Cloud",
        description:
          "Leading frontend development for EdgeOne platform and templates.",
      },
      {
        period: "2020 - 2022",
        position: "Frontend Developer",
        company: "Tencent Cloud",
        description:
          "Developed and maintained multiple web applications and tools.",
      },
      {
        period: "2018 - 2020",
        position: "Junior Developer",
        company: "Tencent Cloud",
        description: "Worked on various client projects and internal tools.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find me on social media or drop me an",
    email: {
      text: "email",
      href: "mailto:hello@caitlinadams.co.uk",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Caitlin Adams",
    description: "Showcase of my best work and projects",
  },
  title: "My Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  current: [],
  concepts: [
    {
      title: "Heartless",
      description:
        "A hyper-feminine psycholgical horror exploring the cost of perfection.",
      image: "/assets/images/projects/heartless_icon.jpg",
      href: "/projects/heartless/",
    },
  ],
};

