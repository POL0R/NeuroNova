import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Linkedin, Instagram, Github, Youtube, Mail, UserCheck, GraduationCap } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    toast({
      title: "Message ready to send",
      description: "Thank you for your interest! We'll be in touch soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/placeholder" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/placeholder" },
    { icon: Github, label: "GitHub", url: "https://github.com/placeholder" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com/@placeholder" },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Have questions, ideas, or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-100">Send us a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-cyan-500/20 text-slate-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-cyan-500/20 text-slate-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="flex w-full rounded-md border border-input bg-slate-900/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-cyan-500/20 text-slate-100 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Partnerships */}
            <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <UserCheck className="h-5 w-5 text-cyan-400" />
                  <CardTitle className="text-xl text-slate-100">Partnerships & Pilots</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Interested in piloting NeuroNova or partnering with us? Let's discuss how we can work together.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Mentorship */}
            <Card className="border-violet-500/20 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-violet-400" />
                  <CardTitle className="text-xl text-slate-100">Mentorship</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Looking for guidance or mentorship opportunities? We're here to help.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Social Links */}
            <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">Connect With Us</CardTitle>
                <CardDescription className="text-slate-400">
                  Follow us on social media for updates and news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-slate-900/50 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-colors text-slate-300 hover:text-cyan-400"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-amber-500/20 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <CardTitle className="text-xl text-slate-100">Email</CardTitle>
                </div>
                <CardContent className="pt-0">
                  <a
                    href="mailto:contact@neuronova.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    contact@neuronova.com
                  </a>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

