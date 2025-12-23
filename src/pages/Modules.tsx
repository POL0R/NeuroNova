import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { modules } from "@/data/modules"
import { Target, Play, Brain } from "lucide-react"

export function Modules() {
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
            Our Modules
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Explore our collection of therapeutic gaming experiences designed to support calm, 
            focus, and skill-building through structured, gentle interactions.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-100 mb-2">
                    {module.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Goal */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-sm font-semibold text-slate-200">Goal</h3>
                    </div>
                    <p className="text-slate-400">{module.goal}</p>
                  </div>

                  {/* How It Works */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="h-5 w-5 text-violet-400" />
                      <h3 className="text-sm font-semibold text-slate-200">How It Works</h3>
                    </div>
                    <p className="text-slate-400">{module.howItWorks}</p>
                  </div>

                  {/* What It Trains */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="h-5 w-5 text-amber-400" />
                      <h3 className="text-sm font-semibold text-slate-200">What It Trains</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.trains.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <Card className="border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-400 text-center">
                <strong className="text-amber-400">Note:</strong> These modules are designed to support 
                regulation and skill-building through structured, calming experiences. They are not 
                intended as medical treatments or clinical interventions, and we make no claims about 
                specific therapeutic outcomes.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

