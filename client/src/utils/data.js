import {Lightbulb,BookOpen,Download,Library} from "lucide-react";

export const FEATURES=[
    {
        title:"AI-Powered Writing",
        description:
            "Overcome writer's block with our smart assistant that helps you generate ideas, outlines, and content.",
        icon:Lightbulb,
        gradient:"from-violet-500 to-purple-600",
    },
    {
        title:"Immersive Reader",
        description:
            "Preview your ebook in a clean, read-only format. Adjust font sizes for a comfortable reading experience before you export",
        icon:BookOpen,
        gradient:"from-blue-500 to-cyan-600",
    },
    {
        title:"One-Click Export",
        description:
            "Export your ebook to PDF, and DOCX formats instantly, ready for publishing",
        icon:Download,
        gradient:"from-emerald-500 to-teal-600",
    },
    {
        title:"eBook Management",
        description:
            "Organize all your ebook projects in a personal dashboard. Easily track progress, edit drafts, and manage your libaray",
        icon:Library,
        gradient:"from-pink-500 to-rose-600",
    },
];

export const TESTIMONIALS = [
  {
    quote:
      "I finished my first ebook in a week. The editor, templates, and AI suggestions made the process actually fun instead of overwhelming.",
    author: "Aarav Mehta",
    title: "Independent Author",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328f9e8b?crop=faces&fit=crop&w=200&h=200",
    rating: 5,
  },
  {
    quote:
      "I’ve tried other ebook tools before, but this one feels different. Clean interface, smart automation, and real creative control. Exactly what I needed.",
    author: "Sofia Khan",
    title: "Digital Creator & Blogger",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&w=200&h=200",
    rating: 5,
  },
  {
    quote:
      "Publishing my book used to sound impossible. This platform turned my messy drafts into a polished, publish-ready ebook—without hiring anyone.",
    author: "Liam Parker",
    title: "First-time Author",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=200&h=200",
    rating: 5,
  },
];
