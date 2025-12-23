import { Link } from "react-router-dom"
import { Linkedin, Instagram, Github, Youtube, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/modules", label: "Modules" },
    ],
    connect: [
      { path: "/team", label: "Team" },
      { path: "/media", label: "Media" },
      { path: "/letters-of-recommendation", label: "Endorsements" },
      { path: "/contact", label: "Contact" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/placeholder" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/placeholder" },
    { icon: Github, label: "GitHub", url: "https://github.com/placeholder" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com/@placeholder" },
  ]

  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/neuronovaLogo.png"
                alt="NeuroNova Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                NeuroNova
              </h3>
            </div>
            <p className="text-sm text-slate-400">
              A 3D therapeutic gaming platform supporting calm, focus, and skill-building through structured, gentle interactive modules.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@neuronova.com"
                className="flex items-center space-x-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@neuronova.com</span>
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/20">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} NeuroNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

