import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { modules } from "@/data/modules"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Home() {
  const trustChips = [
    "Endorsed by 30+ NGOs",
    "Sensory-friendly design",
    "App Store listed",
  ]

  const impactStats = [
    { label: "NGOs & Schools", value: "30+" },
    { label: "States", value: "10+" },
    { label: "App Store", value: "Live" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              NeuroNova
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              An offline 3D classroom transition app for neurodivergent children. 
              Endorsed by 30+ NGOs, schools & therapy centres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white text-lg px-8"
              >
                <Link to="/modules">
                  Explore Modules
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8"
              >
                <Link to="/team">Meet the Team</Link>
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {trustChips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-slate-300">{chip}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
              Our Mission
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              NeuroNova is an inclusive Autism EdTech platform featuring an offline 3D classroom transition app 
              designed specifically for neurodivergent children. Created with a sensory-friendly design and 
              developed in collaboration with doctors and psychologists, NeuroNova helps children navigate 
              classroom transitions through structured, calming 3D experiences. Our platform is endorsed by 
              30+ NGOs, schools, and therapy centres, and is available on the App Store.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20" id="modules">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Our Modules
            </h2>
            <p className="text-lg text-slate-400">
              Explore our collection of therapeutic gaming experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.slice(0, 6).map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-100">
                      {module.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 mb-4">
                      {module.goal}
                    </CardDescription>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      <Link to="/modules">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Our Impact
            </h2>
            <p className="text-lg text-slate-400">
              Building towards meaningful outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* UP Mandate Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <Card className="border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-violet-500/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-amber-400 mb-3">
                    Official Recognition
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    The Minister of Child Development has passed an official order mandating 
                    the adoption of NeuroNova in every NGO in Uttar Pradesh.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                  >
                    <Link to="/letters-of-recommendation">
                      View All Endorsements <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
              Get Involved
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We're looking for partners, mentors, sponsors, and pilot centers to help us grow. 
              If you're interested in collaboration, mentorship, sponsorship, or piloting NeuroNova, 
              we'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white text-lg px-8"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

