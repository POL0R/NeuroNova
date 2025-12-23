import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { lettersOfRecommendation, getLORsByCategory, getLORFilePath } from "@/data/letters-of-recommendation"
import { FileText, Building2, Stethoscope, Users } from "lucide-react"

export function LettersOfRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState<"government" | "medical" | "ngo" | "all">("all")

  const filteredLORs = getLORsByCategory(selectedCategory)

  const categoryIcons = {
    government: Building2,
    medical: Stethoscope,
    ngo: Users,
    all: FileText,
  }

  const categoryColors = {
    government: "from-blue-500 to-indigo-500",
    medical: "from-green-500 to-emerald-500",
    ngo: "from-purple-500 to-violet-500",
    all: "from-cyan-500 to-violet-500",
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Letters of Recommendation
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            NeuroNova has received endorsements and professional recommendations from government officials, 
            medical professionals, and leading NGOs across India.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(["all", "government", "medical", "ngo"] as const).map((category) => {
            const Icon = categoryIcons[category]
            const isActive = selectedCategory === category
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  isActive
                    ? `bg-gradient-to-r ${categoryColors[category]} text-white border-0`
                    : "border-cyan-500/30 text-slate-300 hover:bg-cyan-500/10"
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {category === "all" ? "All" : category}
                <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                  {category === "all" ? lettersOfRecommendation.length : getLORsByCategory(category).length}
                </Badge>
              </Button>
            )
          })}
        </motion.div>

        {/* LORs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredLORs.map((lor, index) => (
            <motion.div
              key={lor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant="outline"
                      className={`border-cyan-500/30 text-cyan-300 ${
                        lor.category === "government"
                          ? "border-blue-500/30 text-blue-300"
                          : lor.category === "medical"
                          ? "border-green-500/30 text-green-300"
                          : "border-purple-500/30 text-purple-300"
                      }`}
                    >
                      {lor.category === "government"
                        ? "Government"
                        : lor.category === "medical"
                        ? "Medical"
                        : "NGO"}
                    </Badge>
                    <FileText className="h-5 w-5 text-slate-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100 mb-1">
                    {lor.organization}
                  </CardTitle>
                  <p className="text-sm text-slate-400 mb-1">
                    {lor.personName} - {lor.personTitle}
                  </p>
                  <p className="text-xs text-slate-500">{lor.location}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* LOR Image - Displayed Directly */}
                  <div className="relative rounded-lg overflow-hidden border border-cyan-500/20">
                    <img
                      src={getLORFilePath(lor.fileName)}
                      alt={`Letter of Recommendation from ${lor.organization}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100 text-center">
                Recognition Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {getLORsByCategory("government").length}
                  </div>
                  <div className="text-sm text-slate-400">Government Endorsements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {getLORsByCategory("medical").length}
                  </div>
                  <div className="text-sm text-slate-400">Medical Professional Opinions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {getLORsByCategory("ngo").length}
                  </div>
                  <div className="text-sm text-slate-400">NGO & Institutional Endorsements</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

