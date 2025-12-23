import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { TeamMember } from "@/data/team"

interface TeamFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTeam: string | null
  onTeamFilter: (team: string | null) => void
  teamCounts: Record<string, number>
}

const teamOptions: TeamMember["team"][] = [
  "Leadership",
  "Engineering",
  "Design",
  "Therapy",
  "Research",
  "Operations",
  "Partnerships",
]

export function TeamFilters({
  searchQuery,
  onSearchChange,
  selectedTeam,
  onTeamFilter,
  teamCounts,
}: TeamFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Search by name, role, or skills..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-slate-900/50 border-cyan-500/20 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500"
          aria-label="Search team members"
        />
      </div>

      {/* Team Filter Chips */}
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedTeam === null ? "default" : "outline"}
          className={`cursor-pointer transition-colors ${
            selectedTeam === null
              ? "bg-cyan-500 text-white border-cyan-500"
              : "border-cyan-500/30 text-slate-300 hover:border-cyan-500/50"
          }`}
          onClick={() => onTeamFilter(null)}
        >
          All ({Object.values(teamCounts).reduce((a, b) => a + b, 0)})
        </Badge>
        {teamOptions.map((team) => (
          <Badge
            key={team}
            variant={selectedTeam === team ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              selectedTeam === team
                ? "bg-cyan-500 text-white border-cyan-500"
                : "border-cyan-500/30 text-slate-300 hover:border-cyan-500/50"
            }`}
            onClick={() => onTeamFilter(selectedTeam === team ? null : team)}
          >
            {team} ({teamCounts[team] || 0})
          </Badge>
        ))}
      </div>
    </div>
  )
}

