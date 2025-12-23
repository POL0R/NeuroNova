import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { teamMembers, TeamMember } from "@/data/team"
import { TeamCard } from "@/components/team/TeamCard"
import { TeamFilters } from "@/components/team/TeamFilters"
import { TeamDialog } from "@/components/team/TeamDialog"
import { ArrowRight } from "lucide-react"

export function Team() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  // Filter team members and ensure founders are at top
  const filteredMembers = useMemo(() => {
    let filtered = [...teamMembers]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(query) ||
          member.role.toLowerCase().includes(query) ||
          member.skills.some((skill) => skill.toLowerCase().includes(query))
      )
    }

    // Team filter
    if (selectedTeam) {
      filtered = filtered.filter((member) => member.team === selectedTeam)
    }

    // Sort: Founders first (Piyush Dhumal and Shresht Mangal), then alphabetically by name
    filtered.sort((a, b) => {
      const isPiyush = a.id === "piyush-dhumal"
      const isShresht = a.id === "shresht-mangal"
      const isOtherFounder = b.id === "piyush-dhumal" || b.id === "shresht-mangal"
      
      // Piyush always first
      if (isPiyush) return -1
      if (b.id === "piyush-dhumal") return 1
      
      // Shresht always second
      if (isShresht && !isPiyush) return -1
      if (isOtherFounder && a.id !== "piyush-dhumal") return 1
      
      // Rest sorted alphabetically
      return a.name.localeCompare(b.name)
    })

    return filtered
  }, [searchQuery, selectedTeam])

  // Calculate team counts
  const teamCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    teamMembers.forEach((member) => {
      counts[member.team] = (counts[member.team] || 0) + 1
    })
    return counts
  }, [])

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member)
    setDialogOpen(true)
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
            Our Team
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A multidisciplinary team of engineers, designers, therapists, researchers, and 
            operations professionals working together to build NeuroNova.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <TeamFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTeam={selectedTeam}
            onTeamFilter={setSelectedTeam}
            teamCounts={teamCounts}
          />
        </motion.div>

        {/* Results Count */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-sm text-slate-400">
            Showing {filteredMembers.length} of {teamMembers.length} team members
          </p>
        </div>

        {/* Team Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {filteredMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => handleCardClick(member)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400">No team members found matching your criteria.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="border-t border-cyan-500/20 pt-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Interested in Joining?
            </h2>
            <p className="text-slate-400 mb-6">
              We're always looking for passionate individuals to join our team.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Dialog */}
      <TeamDialog
        member={selectedMember}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
}

