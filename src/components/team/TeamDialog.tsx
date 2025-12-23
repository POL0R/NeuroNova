import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TeamMember } from "@/data/team"
import { ExternalLink, Linkedin, Github } from "lucide-react"

interface TeamDialogProps {
  member: TeamMember | null
  open: boolean
  onOpenChange: (open: boolean) => void
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

export function TeamDialog({ member, open, onOpenChange }: TeamDialogProps) {
  if (!member) return null

  const initials = getInitials(member.name)
  const gradient = getGradientFromName(member.name)

  const getIcon = (label: string) => {
    if (label.toLowerCase().includes("linkedin")) return Linkedin
    if (label.toLowerCase().includes("github")) return Github
    return ExternalLink
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-cyan-500/20 text-slate-100 max-w-2xl">
        <DialogHeader>
          <div className="flex items-start space-x-4 mb-4">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500/30"
              />
            ) : (
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xl border-2 border-cyan-500/30`}
              >
                {initials}
              </div>
            )}
            <div className="flex-1">
              <DialogTitle className="text-2xl text-slate-100 mb-1">
                {member.name}
              </DialogTitle>
              <DialogDescription className="text-cyan-400 text-base">
                {member.role}
              </DialogDescription>
              <Badge
                variant="outline"
                className="mt-2 border-violet-500/30 text-violet-300"
              >
                {member.team}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Bio */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">About</h4>
            <p className="text-slate-400 leading-relaxed">{member.bio}</p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
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

          {/* Links */}
          {member.links && member.links.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Links</h4>
              <div className="flex flex-wrap gap-2">
                {member.links.map((link) => {
                  const Icon = getIcon(link.label)
                  return (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

