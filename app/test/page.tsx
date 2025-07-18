"use client"
import Contact from '@/components/contact';
import InternshipCard from '@/components/InternshipCard';
import Presentation from '@/components/presentation';
import Resume from '@/components/resume';
import Skills from '@/components/skills';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const Test = () => {
    const { theme , setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

   const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
      const isDark = theme === 'dark';
      setIsDark(isDark)
    },[theme])
  return (
   <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gray-900' : "bg-gradient-to-br from-blue-100 via-blue-50 to-green-50"
    }`}>
        <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
            </div>
        </div>
        </header>
        <main className="relative z-10 max-w-4xl mx-auto flex flex-col justify-between items-center">
            {/* <InternshipCard /> */}
            {/* <Contact /> */}
            <Resume />
            <Presentation />
            <Skills />
        </main>
    </div>
  )
}

export default Test