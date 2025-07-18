'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Briefcase, Code, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, MessageCircle, Moon, Send, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const [isRecruiter, setIsRecruiter] = useState(false)
  const [chatMessage, setChatMessage] = useState("")


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
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Clouds */}
        <div
          className={`absolute top-10 left-10 w-20 h-12 rounded-full transition-colors duration-500 ${
            isDark ? "bg-gray-700/30" : "bg-white/70"
          } animate-float`}
        ></div>
        <div
          className={`absolute top-20 right-20 w-16 h-10 rounded-full transition-colors duration-500 ${
            isDark ? "bg-gray-700/30" : "bg-white/70"
          } animate-float-delayed`}
        ></div>
        <div
          className={`absolute top-32 left-1/3 w-24 h-14 rounded-full transition-colors duration-500 ${
            isDark ? "bg-gray-700/30" : "bg-white/70"
          } animate-float-slow`}
        ></div>

        {/* Sun/Moon */}
        <div
          className={`absolute top-16 right-32 w-16 h-16 rounded-full transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-lg shadow-yellow-400/50"
              : "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/30"
          } animate-pulse-slow`}
        ></div>

        {/* Mountains */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 200" className="w-full h-32">
            <path
              d="M0,200 L0,100 L200,50 L400,80 L600,30 L800,70 L1000,40 L1200,60 L1200,200 Z"
              className={`transition-colors duration-500 ${isDark ? "fill-green-800/50" : "fill-green-400/60"}`}
            />
            <path
              d="M0,200 L0,120 L150,80 L350,100 L550,60 L750,90 L950,70 L1200,80 L1200,200 Z"
              className={`transition-colors duration-500 ${isDark ? "fill-green-700/40" : "fill-green-500/50"}`}
            />
          </svg>
        </div>
      </div>

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
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium transition-colors text-gray-900 dark:text-white">Ask me anything about Dharshan...</span>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Suggested questions:"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-3 text-xs transition-colors text-gray-500 dark:text-gray-400">
              Suggested questions: What technologies do you work with? Tell me about your recent projects?
            </div>
          </CardContent>
        </Card>
      </main>
      
    </div>
  );
}
