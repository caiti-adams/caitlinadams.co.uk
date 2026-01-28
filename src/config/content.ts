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
    "A creative storyteller with a passion for film.",
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
    "I am an aspiring filmmaker and actor with a special interest in character-led storytelling and all things creative. My work is driven by a complete passion for film, and how emotion, identity, and psychology can be expressed through various visual techniques. I am especially drawn to horror as a genre, and how it can be used as a form of dark expression and social commentary.\n\nI'm particularly inspired by female storytellers telling feminine stories within typically male-dominated genres and industries, and hope to grow into one of those very women.\n\nIn 2023, I moved from South Africa to England, the place of my birth, in order to search for more opportunities within my chosen creative fields. The move was far from easy, but it taught me a lot about myself, as both a creative and as a human being. I love filmmaking, acting, writing, and visual arts, and aim to continue my work in these fields, and display it on here.",
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
      image: "/assets/images/projects/heartless/heartless_icon.jpg",
      href: "/projects/heartless/",
    },
    {
      title: "Not If You Were The Last",
      description:
        "An apocalyptic drama exploring reconciliation as the cost of survival",
      image: "/assets/images/projects/not_if_you_were_the_last/notif.jpg",
      href: "/projects/not_if_you_were_the_last/",
    },
  ],
};

export const writingContent = {
  meta: {
    title: "Writing - Caitlin Adams",
    description: "Essays and creative writing",
  },
  title: "Writing",
  essays: [
    {
      title: "Ari Aster's Use of Performance for Emotional Alignment in Midsommar (2019)",
      description:
        "Aster masterfully used Pugh's performance to lead the storytelling, demonstrating how acting can shape audience viewpoint and become the driver of emotional alignment within a film.",
      image: "/assets/images/writing/essays/midsomnar/midsomnar.jfif",
      href: "/writing/midsommar-performance/",
    },
  ],
  creative: [
    {
      title: "Not If You Were The Last (Excerpt)",
      description:
        "An apocalyptic drama exploring reconciliation as the cost of survival",
      image: "/assets/images/projects/not_if_you_were_the_last/notif.jpg",
      href: "/writing/not_if_you_were_the_last_excerpt/",
    },
  ],
};

