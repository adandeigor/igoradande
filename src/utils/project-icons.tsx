import { Code, ExternalLink, Github } from "lucide-react";

export const getProjectIcon = (imageType: string) => {
  switch (imageType) {
    case 'code':
      return <Code className="w-16 h-16 text-primary" />;
    case 'github':
      return <Github className="w-16 h-16 text-primary" />;
    case 'external':
      return <ExternalLink className="w-16 h-16 text-primary" />;
    default:
      return <Code className="w-16 h-16 text-primary" />;
  }
};
