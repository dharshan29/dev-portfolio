'use client';

import BackgroundTheme from "@/components/background-theme";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Briefcase, Code, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, MessageCircle, Moon, Send, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  // Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Contact:
    'How can I contact you?',
} as const;

const buttonConfig = [
  { 
    key: 'Me',
    className: 'bg-blue-500/20 dark:bg-blue-500/30 border-blue-400/50 dark:border-blue-400/70 text-blue-300 dark:text-blue-200 hover:bg-blue-500/30 dark:hover:bg-blue-500/40 hover:shadow-blue-500/30 dark:hover:shadow-blue-400/40',
    icon: '👨‍💻'
  },
  { 
    key: 'Projects',
    className: 'bg-purple-500/20 dark:bg-purple-500/30 border-purple-400/50 dark:border-purple-400/70 text-purple-300 dark:text-purple-200 hover:bg-purple-500/30 dark:hover:bg-purple-500/40 hover:shadow-purple-500/30 dark:hover:shadow-purple-400/40',
    icon: '📁'
  },
  { 
    key: 'Skills',
    className: 'bg-green-500/20 dark:bg-green-500/30 border-green-400/50 dark:border-green-400/70 text-green-300 dark:text-green-200 hover:bg-green-500/30 dark:hover:bg-green-500/40 hover:shadow-green-500/30 dark:hover:shadow-green-400/40',
    icon: '📊'
  },
  // { 
  //   key: 'Fun',
  //   className: 'bg-pink-500/20 dark:bg-pink-500/30 border-pink-400/50 dark:border-pink-400/70 text-pink-300 dark:text-pink-200 hover:bg-pink-500/30 dark:hover:bg-pink-500/40 hover:shadow-pink-500/30 dark:hover:shadow-pink-400/40',
  //   icon: '🎉'
  // },
  { 
    key: 'Contact',
    className: 'bg-orange-500/20 dark:bg-orange-500/30 border-orange-400/50 dark:border-orange-400/70 text-orange-300 dark:text-orange-200 hover:bg-orange-500/30 dark:hover:bg-orange-500/40 hover:shadow-orange-500/30 dark:hover:shadow-orange-400/40',
    icon: '📧'
  }
] as const;


export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const isDark = theme === 'dark';

  const [isRecruiter, setIsRecruiter] = useState(false)
  const [chatMessage, setChatMessage] = useState("")

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);



  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };


  const workExperience = [
    {
      company: "Next Ventures",
      role: "Full Stack Developer",
      period: "Jun 2025 - Present",
      description:
        "Developing a domain-specific platform for entrepreneurs using React, Next.js, and modern deployment techniques.",
      achievements: [
        "Built scalable web applications with clean, efficient code",
        "Implemented seamless user experiences with modern tech stack",
      ],
    },
    {
      company: "Freelance Projects",
      role: "Full Stack Developer",
      period: "Jan 2024 - Present",
      description: "Creating dynamic web experiences for various clients, specializing in React and Node.js solutions.",
      achievements: [
        "Delivered 15+ successful projects with 100% client satisfaction",
        "Specialized in e-commerce and SaaS applications",
      ],
    },
  ]

  const education = [
    {
      institution: "Computer Science Degree",
      degree: "Bachelor's in Computer Science",
      period: "2020 - 2024",
      description: "Focused on software engineering, algorithms, and web development technologies.",
    },
  ]

  const featuredProjects = [
    {
      title: "Next Ventures",
      description:
        "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. Built to impress both users and investors.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with modern UI/UX, payment integration, and real-time inventory management.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gray-900' : "bg-gradient-to-br from-blue-100 via-blue-50 to-green-50"
    }`}>
      <BackgroundTheme />

      {/* Header  */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <nav className="flex space-x-8">
            <a href="#home" className={`font-medium transition-colors hover:text-blue-600 ${isDark ? "text-white" : "text-gray-700"}`}>
              Home
            </a>
            <a href="#home" className={`font-medium transition-colors hover:text-blue-600 ${isDark ? "text-white" : "text-gray-700"}`}>
              Projects
            </a>
            <a href="#home" className={`font-medium transition-colors hover:text-blue-600 ${isDark ? "text-white" : "text-gray-700"}`}>
              Resume
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto pb-20">
        <Card className="mb-8 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl animate-slide-up transition-all duration-500">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image src="/placeholder.svg?height=80&width=80" alt="Profile" width={80} height={80} className="rounded-full border-4 border-white shadow-lg"/>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Hey, I am Dharshan 👋</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Available for work</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors leading-relaxed">
                  {isRecruiter
                    ? "Full Stack Developer with expertise in React, Next.js, and Node.js. I help founders turn ideas into seamless digital experiences, combining academic knowledge with industry experience in building scalable web applications."
                    : "ML Engineer with expertise in LLM optimization, post-training, and deployment. Combining academic research at Georgia Tech with industry experience in building scalable ML systems."}
                </p>

                <div className="flex gap-4">
                  <Button variant='outline' size='sm' className="transition-all duration-500">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button variant='outline' size='sm' className="transition-all duration-500">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant='outline' size='sm' className="transition-all duration-500">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work & Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Work Experience */}
          <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl animate-slide-up-delayed           transition-all duration-500">
            <CardHeader>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">Work</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {workExperience.map((job, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold transition-colors text-gray-900 dark:text-white">{job.company}</h3>
                        <p className="text-sm transition-colors text-gray-600 dark:text-gray-400">{job.role}</p>
                      </div>
                      <span className="text-xs transition-colors text-gray-500 dark:text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-sm transition-colors text-gray-700 dark:text-gray-300 mb-2">{job.description}</p>
                    <ul className="text-xs transition-colors text-gray-600 dark:text-gray-400 space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">.</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </CardContent>
          </Card>

            {/* Education */}
          <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl animate-slide-up-delayed-2 transition-all duration-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <CardTitle className="text-lg">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 transition-colors border-green-200 dark:border-green-800 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold transition-colors text-gray-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-sm transition-colors text-gray-600 dark:text-gray-400">{edu.degree}</p>
                    </div>
                    <span className="text-xs transition-colors text-gray-500 dark:text-gray-400">{edu.period}</span>
                  </div>
                  <p className="text-sm transition-colors text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <Card className="mb-8 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl animate-slide-up-delayed-3    transition-all duration-500">
          <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-lg">Featured Projects</CardTitle>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  View more →
                </Button>
            </div>
          </CardHeader>
          <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="group" >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                      <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold transition-colors text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-sm transition-colors text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                     <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl animate-slide-up-delayed-4 transition-all duration-500">
          <CardContent className="px-6">
            {/* <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium transition-colors text-gray-900 dark:text-white">Ask me anything about Dharshan...</span>
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {buttonConfig.map(({ key, className, icon }) => (
                <button 
                  key={key}
                  onClick={() => goToChat(questions[key])}
                  className={`backdrop-blur-md border hover:shadow-lg px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer ${className}`}
                >
                  <span className="mr-2 text-lg">{icon}</span>
                  {key}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (chatMessage.trim()) goToChat(chatMessage.trim());
              }}
              className="relative w-full"
            >
              <div className="flex gap-3 relative">
                <Input
                  placeholder="Ask me anything"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="pr-14 h-12"
                />
                <Button disabled={!chatMessage.trim()} size="icon" className="absolute right-2 top-2 h-8 w-8 hover:cursor-default" >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
            {/* <div className="mt-3 text-xs transition-colors text-gray-500 dark:text-gray-400">
              Suggested questions: What technologies do you work with? Tell me about your recent projects?
            </div> */}
          </CardContent>
        </Card>
      </main>
      
    </div>
  );
}
