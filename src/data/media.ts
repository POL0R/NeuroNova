/**
 * MEDIA FILES DATA
 * 
 * This file contains metadata for all media files (photos and videos) for NeuroNova.
 * Files are located in: public/media/
 */

export type MediaFile = {
  id: string;
  fileName: string;
  type: "photo" | "video";
  category: "development" | "final-app";
  title: string;
  description?: string;
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
    fileName: "develop1.mp4",
    type: "video",
    category: "development",
    title: "Development Journey - Part 1",
    description: "Behind-the-scenes look at the development process"
  },
  {
    id: "dev-video-2",
    fileName: "develop2.mp4",
    type: "video",
    category: "development",
    title: "Development Journey - Part 2",
    description: "Continued development process and iterations"
  },
  {
    id: "dev-video-3",
    fileName: "develop3.mp4",
    type: "video",
    category: "development",
    title: "Development Journey - Part 3",
    description: "Final development stages and refinements"
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
    fileName: "final1.mp4",
    type: "video",
    category: "final-app",
    title: "NeuroNova App Demo",
    description: "Complete demonstration of the NeuroNova application"
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

