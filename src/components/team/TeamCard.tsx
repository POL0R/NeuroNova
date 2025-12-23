import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TeamMember } from "@/data/team"

interface TeamCardProps {
  member: TeamMember
  onClick: () => void
  index: number
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function getGradientFromName(name: string): string {
  const colors = [
    "from-cyan-500 to-blue-500",
    "from-violet-500 to-purple-500",
    "from-amber-500 to-orange-500",
    "from-teal-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-blue-500 to-indigo-500",
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export function TeamCard({ member, onClick, index }: TeamCardProps) {
  const initials = getInitials(member.name)
  const gradient = getGradientFromName(member.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <Card
        className="cursor-pointer border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 h-full"
        onClick={onClick}
      >
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/30"
                />
              ) : (
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg border-2 border-cyan-500/30`}
                >
                  {initials}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-slate-100 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-cyan-400 mb-2">{member.role}</p>
              <Badge
                variant="outline"
                className="mb-3 border-violet-500/30 text-violet-300 text-xs"
              >
                {member.team}
              </Badge>
              <p className="text-sm text-slate-400 line-clamp-2">
                {member.bio}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

