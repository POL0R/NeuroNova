import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { mediaFiles, getMediaByCategory, getMediaPath, type MediaFile } from "@/data/media"
import { Image, Video, Code, Smartphone, X, Play } from "lucide-react"

export function Media() {
  const [selectedCategory, setSelectedCategory] = useState<"development" | "final-app" | "all">("all")
  const [selectedType, setSelectedType] = useState<"photo" | "video" | "all">("all")
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const filteredMedia = getMediaByCategory(selectedCategory).filter(
    media => selectedType === "all" || media.type === selectedType
  )

  const categoryIcons = {
    development: Code,
    "final-app": Smartphone,
    all: Image,
  }

  const categoryColors = {
    development: "from-blue-500 to-indigo-500",
    "final-app": "from-cyan-500 to-teal-500",
    all: "from-cyan-500 to-violet-500",
  }

  const handleMediaClick = (media: MediaFile) => {
    setSelectedMedia(media)
    setDialogOpen(true)
  }

  const developmentCount = getMediaByCategory("development").length
  const finalAppCount = getMediaByCategory("final-app").length
  const photoCount = filteredMedia.filter(m => m.type === "photo").length
  const videoCount = filteredMedia.filter(m => m.type === "video").length

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
            Media Gallery
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Explore our development journey and see NeuroNova in action through photos and videos
            from the development process and final application.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {/* Category Filter */}
          {(["all", "development", "final-app"] as const).map((category) => {
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
                {category === "all" ? "All" : category === "final-app" ? "Final App" : "Development"}
                <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                  {category === "all"
                    ? mediaFiles.length
                    : category === "development"
                    ? developmentCount
                    : finalAppCount}
                </Badge>
              </Button>
            )
          })}

          {/* Type Filter */}
          <div className="flex gap-2 ml-4">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              onClick={() => setSelectedType("all")}
              className={selectedType === "all" ? "bg-cyan-500 text-white" : "border-cyan-500/30 text-slate-300"}
            >
              All
            </Button>
            <Button
              variant={selectedType === "photo" ? "default" : "outline"}
              onClick={() => setSelectedType("photo")}
              className={selectedType === "photo" ? "bg-cyan-500 text-white" : "border-cyan-500/30 text-slate-300"}
            >
              <Image className="mr-2 h-4 w-4" />
              Photos ({photoCount})
            </Button>
            <Button
              variant={selectedType === "video" ? "default" : "outline"}
              onClick={() => setSelectedType("video")}
              className={selectedType === "video" ? "bg-cyan-500 text-white" : "border-cyan-500/30 text-slate-300"}
            >
              <Video className="mr-2 h-4 w-4" />
              Videos ({videoCount})
            </Button>
          </div>
        </motion.div>

        {/* Media Grid */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {filteredMedia.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all cursor-pointer group overflow-hidden"
                  onClick={() => handleMediaClick(media)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {media.type === "photo" ? (
                      <img
                        src={getMediaPath(media.fileName, media.category, media.type)}
                        alt={media.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-slate-800">
                        <video
                          src={getMediaPath(media.fileName, media.category, media.type)}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                          <div className="rounded-full bg-cyan-500/80 p-4 group-hover:bg-cyan-500 transition-colors">
                            <Play className="h-8 w-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="outline"
                        className={`${
                          media.category === "development"
                            ? "border-blue-500/30 text-blue-300 bg-blue-500/10"
                            : "border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                        }`}
                      >
                        {media.category === "development" ? "Development" : "Final App"}
                      </Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant="outline"
                        className="border-violet-500/30 text-violet-300 bg-violet-500/10"
                      >
                        {media.type === "photo" ? (
                          <Image className="h-3 w-3 mr-1" />
                        ) : (
                          <Video className="h-3 w-3 mr-1" />
                        )}
                        {media.type === "photo" ? "Photo" : "Video"}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-100 line-clamp-2">
                      {media.title}
                    </CardTitle>
                    {media.description && (
                      <p className="text-sm text-slate-400 line-clamp-2 mt-1">
                        {media.description}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">No media found matching your filters.</p>
          </div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100 text-center">
                Media Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {developmentCount}
                  </div>
                  <div className="text-sm text-slate-400">Development</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {finalAppCount}
                  </div>
                  <div className="text-sm text-slate-400">Final App</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-400 mb-2">
                    {mediaFiles.filter(m => m.type === "photo").length}
                  </div>
                  <div className="text-sm text-slate-400">Photos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    {mediaFiles.filter(m => m.type === "video").length}
                  </div>
                  <div className="text-sm text-slate-400">Videos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Dialog for viewing media */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] bg-slate-900 border-cyan-500/20">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl text-slate-100">
                {selectedMedia?.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDialogOpen(false)}
                className="text-slate-400 hover:text-slate-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          <div className="space-y-4 overflow-y-auto max-h-[calc(90vh-120px)]">
            {selectedMedia && (
              <>
                {selectedMedia.type === "photo" ? (
                  <div className="relative rounded-lg overflow-hidden border border-cyan-500/20">
                    <img
                      src={getMediaPath(selectedMedia.fileName, selectedMedia.category, selectedMedia.type)}
                      alt={selectedMedia.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-lg overflow-hidden border border-cyan-500/20 bg-black">
                    <video
                      src={getMediaPath(selectedMedia.fileName, selectedMedia.category, selectedMedia.type)}
                      controls
                      className="w-full h-auto"
                      autoPlay
                    />
                  </div>
                )}
                {selectedMedia.description && (
                  <p className="text-slate-300 text-center">{selectedMedia.description}</p>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

