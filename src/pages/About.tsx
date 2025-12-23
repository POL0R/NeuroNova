import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Heart, BookOpen, UserCheck } from "lucide-react"

export function About() {
  const teamCategories = [
    {
      icon: Code,
      title: "Engineering",
      description: "Building robust, accessible platforms with modern technology",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive, calming user experiences",
    },
    {
      icon: Heart,
      title: "Therapy",
      description: "Ensuring alignment with therapeutic best practices",
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Evaluating impact and gathering meaningful feedback",
    },
    {
      icon: UserCheck,
      title: "Partnerships",
      description: "Connecting with centers and organizations",
    },
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
            About NeuroNova
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            An inclusive Autism EdTech platform featuring an offline 3D classroom transition app 
            for neurodivergent children. Endorsed by 30+ NGOs, schools & therapy centres, 
            and listed on the App Store.
          </p>
        </motion.div>

        {/* What is NeuroNova */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">What is NeuroNova?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-400">
              <p>
                NeuroNova is an inclusive Autism EdTech platform featuring an offline 3D classroom transition 
                app specifically designed for neurodivergent children. Our app helps children navigate 
                classroom transitions through structured, calming 3D experiences that support regulation 
                and skill-building.
              </p>
              <p>
                Developed in collaboration with doctors and psychologists, NeuroNova features a 
                sensory-friendly design that respects individual needs and preferences. The app is 
                available offline, ensuring accessibility regardless of internet connectivity, and is 
                listed on the App Store for easy access.
              </p>
              <p>
                NeuroNova has been endorsed by 30+ NGOs, schools, and therapy centres, demonstrating 
                its value and impact in supporting neurodivergent children. In Uttar Pradesh, the 
                Minister of Child Development has passed an official order mandating the adoption of 
                NeuroNova in every NGO in the state.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Who It Helps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">Who We Serve</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-400">
              <p>
                NeuroNova is designed specifically for neurodivergent children who need support with 
                classroom transitions. Our platform helps children navigate the often-challenging 
                moments between activities, classes, or settings through structured, calming 3D experiences.
              </p>
              <p>
                We work directly with NGOs, schools, and therapy centres across India, including 
                partnerships in Uttar Pradesh and Gujarat. Our approach emphasizes sensory-friendly 
                design, offline accessibility, and evidence-informed practices developed in collaboration 
                with medical and psychological professionals.
              </p>
              <p>
                NeuroNova is endorsed by 30+ organizations and has received official recognition from 
                government bodies, demonstrating our commitment to making inclusive education technology 
                accessible to all children who need it.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-400">
              <p>
                NeuroNova's 3D classroom transition app is structured to provide calming, focused experiences. 
                We emphasize:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Sensory-friendly design</strong> - Created to minimize sensory overload</li>
                <li><strong>Offline functionality</strong> - Accessible without internet connectivity</li>
                <li><strong>Evidence-informed development</strong> - Collaborated with doctors and psychologists</li>
                <li><strong>Structured transitions</strong> - Clear visual and interactive cues</li>
                <li><strong>Accessibility first</strong> - Designed for diverse neurodivergent needs</li>
                <li><strong>Endorsed by professionals</strong> - Trusted by 30+ NGOs, schools, and therapy centres</li>
              </ul>
              <p className="pt-4">
                NeuroNova is available on the App Store and has received official recognition, including 
                a mandate from the Minister of Child Development in Uttar Pradesh for adoption in every 
                NGO in the state.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Built by a Multidisciplinary Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg bg-cyan-500/10">
                          <Icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <CardTitle className="text-xl text-slate-100">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

