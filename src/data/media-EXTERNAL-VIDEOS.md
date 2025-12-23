# External Video URLs Setup Guide

## How to Add External Video Links

Instead of storing large video files in GitHub, you can use external hosting services. Here's how to update the media data:

### Option 1: YouTube (Recommended)
1. Upload your videos to YouTube
2. Get the video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
3. Update the media file in `src/data/media.ts`:

```typescript
{
  id: "dev-video-1",
  externalUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  type: "video",
  category: "development",
  title: "Development Journey - Part 1",
  description: "Behind-the-scenes look at the development process",
  isExternal: true
}
```

### Option 2: Google Drive
1. Upload video to Google Drive
2. Right-click → Get link → Set to "Anyone with the link"
3. Extract the file ID from the URL
4. Use this format: `https://drive.google.com/file/d/FILE_ID/preview`

```typescript
{
  id: "dev-video-1",
  externalUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
  type: "video",
  category: "development",
  title: "Development Journey - Part 1",
  description: "Behind-the-scenes look at the development process",
  isExternal: true
}
```

### Option 3: Vimeo
1. Upload to Vimeo
2. Get the video URL
3. Use the embed URL format: `https://player.vimeo.com/video/VIDEO_ID`

```typescript
{
  id: "dev-video-1",
  externalUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
  type: "video",
  category: "development",
  title: "Development Journey - Part 1",
  description: "Behind-the-scenes look at the development process",
  isExternal: true
}
```

## Current Video Files to Replace

You can replace these entries in `src/data/media.ts`:

- `dev-video-1` (develop1.mp4)
- `dev-video-2` (develop2.mp4)
- `dev-video-3` (develop3.mp4)
- `final-video-1` (final1.mp4)

## Notes

- **YouTube**: Best for public videos, excellent performance, free hosting
- **Google Drive**: Good for private/shared videos, but embedding can be limited
- **Vimeo**: Professional alternative, good privacy controls
- **Photos**: Can stay in GitHub (they're smaller files)

## Example Updated Entry

```typescript
// Before (local file)
{
  id: "dev-video-1",
  fileName: "develop1.mp4",
  type: "video",
  category: "development",
  title: "Development Journey - Part 1",
  description: "Behind-the-scenes look at the development process"
}

// After (external YouTube)
{
  id: "dev-video-1",
  externalUrl: "https://www.youtube.com/watch?v=abc123xyz",
  type: "video",
  category: "development",
  title: "Development Journey - Part 1",
  description: "Behind-the-scenes look at the development process",
  isExternal: true
}
```

