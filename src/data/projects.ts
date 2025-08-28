

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string; // Changé de React.ReactNode à string
  link: string;
  github: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  category: 'web' | 'mobile' | 'package' | 'tool';
  date: string;
}

export const projects: Project[] = [
  {
    id: 'encrypt-dev',
    title: "Package npm Encrypt-dev",
    description: "Un package npm pour le chiffrement et déchiffrement des variables d'environnement, facilitant la gestion sécurisée des partages de clés secrets quand plusieurs dev bossent sur un même projet.",
    tech: ["TypeScript", "Node.js", "Commander"],
    image: "code", // Utiliser une chaîne pour identifier l'icône
    link: "https://github.com/adandeigor/encrypt-dev",
    github: "https://github.com/adandeigor/encrypt-dev",
    status: 'completed',
    featured: true,
    category: 'package',
    date: '2024-01-15'
  },
  {
    id: 'toolbox-pro',
    title: "ToolBox Pro",
    description: "Une suite d'outils pour les développeurs, graphistes et personnes lambdas, offrant des fonctionnalités comme la génération de QR codes, la compression d'images sans perte, la conversion de fichiers, et plus encore.",
    tech: ["Vite", "React", "TypeScript", "ShadCn UI", "Tailwind CSS"],
    image: "code", // Utiliser une chaîne pour identifier l'icône
    link: "https://file-flow-dev.lovable.app/",
    github: "https://github.com/adandeigor/file-flow-dev.git",
    status: 'completed',
    featured: false,
    category: 'tool',
    date: '2024-02-01'
  },
  {
    id: 'library-management',
    title: "Application de Gestion des bibliothèques et de marketplace de livres",
    description: "Application web de gestion des bibliothèques et de marketplace de livres au Bénin, créée en collaboration avec mon binôme lors des examens de fin d'années en 2ème année. (en cours de développement)",
    tech: ["Next.js", "Supabase", "TypeScript", "Prisma"],
    image: "code", // Utiliser une chaîne pour identifier l'icône
    link: "#",
    github: "https://github.com/adandeigor/library.git",
    status: 'in-progress',
    featured: false,
    category: 'web',
    date: '2024-03-01'
  },
  {
    id: 'benin-events',
    title: "Benin Event's",
    description: "Application web de publication, promotion, gestion des évènements au Bénin, créée en collaboration avec Digital Innovation. (en cours de développement)",
    tech: ["Next.js", "Supabase", "TypeScript", "Prisma", "Shadcn UI", "Framer Motion", "Zod", "Zustand"],
    image: "code", // Utiliser une chaîne pour identifier l'icône
    link: "#",
    github: "https://github.com/adandeigor/benin-events.git",
    status: 'in-progress',
    featured: true,
    category: 'web',
    date: '2024-03-15'
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: Project['status']) => {
  return projects.filter(project => project.status === status);
};
