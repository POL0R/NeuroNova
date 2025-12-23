/**
 * MEDIA FILES DATA
 * 
 * This file contains metadata for all media files (photos and videos) for NeuroNova.
 * Files are located in: public/media/
 */

export type MediaFile = {
  id: string;
  fileName?: string; // Optional if using external URL
  externalUrl?: string; // For videos hosted externally (YouTube, Drive, etc.)
  type: "photo" | "video";
  category: "development" | "final-app";
  title: string;
  description?: string;
  isExternal?: boolean; // Flag to indicate if video is hosted externally
};

export const mediaFiles: MediaFile[] = [
  // Development Photos
  {
    id: "dev-photo-1",
    fileName: "develop1.png",
    type: "photo",
    category: "development",
    title: "Development Process - Early Stage",
    description: "Early development screenshot showing initial design concepts"
  },
  {
    id: "dev-photo-2",
    fileName: "develop2.png",
    type: "photo",
    category: "development",
    title: "Development Process - UI Design",
    description: "User interface design and layout development"
  },
  {
    id: "dev-photo-3",
    fileName: "develop3.png",
    type: "photo",
    category: "development",
    title: "Development Process - Module Development",
    description: "Module development and feature implementation"
  },
  {
    id: "dev-photo-4",
    fileName: "develop4.png",
    type: "photo",
    category: "development",
    title: "Development Process - Testing Phase",
    description: "Testing and quality assurance during development"
  },
  // Development Videos
  {
    id: "dev-video-1",
    externalUrl: "https://drive.google.com/file/d/1YmWmHCkqItj2LUd2gyFIL0_7Uycf9qgD/preview",
    type: "video",
    category: "development",
    title: "Development Journey - Part 1",
    description: "Behind-the-scenes look at the development process",
    isExternal: true
  },
  {
    id: "dev-video-2",
    externalUrl: "https://drive.google.com/file/d/155XZkdOsEYmWsuOdGzuGcYN6TJvXiCCC/preview",
    type: "video",
    category: "development",
    title: "Development Journey - Part 2",
    description: "Continued development process and iterations",
    isExternal: true
  },
  {
    id: "dev-video-3",
    externalUrl: "https://drive.google.com/file/d/1L3xs-h4GCiFuu2hkFUW6HmhEtpOZc0AI/preview",
    type: "video",
    category: "development",
    title: "Development Journey - Part 3",
    description: "Final development stages and refinements",
    isExternal: true
  },
  // Final App Photos
  {
    id: "final-photo-1",
    fileName: "final1.png",
    type: "photo",
    category: "final-app",
    title: "NeuroNova App Screenshot",
    description: "Final app interface and design"
  },
  // Final App Videos
  {
    id: "final-video-1",
    externalUrl: "https://drive.google.com/file/d/1R3PS9Gm72gmregZcu02dBcQm5yCDGOMC/preview",
    type: "video",
    category: "final-app",
    title: "NeuroNova App Demo",
    description: "Complete demonstration of the NeuroNova application",
    isExternal: true
  }
];

// Helper functions
export function getMediaByCategory(category: "development" | "final-app" | "all") {
  if (category === "all") {
    return mediaFiles;
  }
  return mediaFiles.filter(media => media.category === category);
}

export function getMediaByType(type: "photo" | "video" | "all") {
  if (type === "all") {
    return mediaFiles;
  }
  return mediaFiles.filter(media => media.type === type);
}

export function getMediaPath(fileName: string, category: "development" | "final-app", type: "photo" | "video"): string {
  return `/media/${category}/${type === "photo" ? "photos" : "videos"}/${fileName}`;
}

// Helper to get media source URL (handles both local files and external URLs)
export function getMediaSource(media: MediaFile): string {
  if (media.isExternal && media.externalUrl) {
    return media.externalUrl;
  }
  if (media.fileName) {
    return getMediaPath(media.fileName, media.category, media.type);
  }
  return "";
}

// Helper to check if video is YouTube
export function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

// Helper to convert YouTube URL to embed URL
export function getYouTubeEmbedUrl(url: string): string {
  let videoId = "";
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0] || "";
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

