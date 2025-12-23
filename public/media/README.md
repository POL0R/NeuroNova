# Media Files Directory

This directory contains all media files (photos and videos) for the NeuroNova website.

## Folder Structure

```
media/
├── development/
│   ├── photos/          # Development process photos
│   └── videos/          # Development process videos
├── final-app/
│   ├── photos/          # Final app screenshots and photos
│   └── videos/           # Final app demo videos
└── README.md            # This file
```

## Quick Reference

### Development Media
- **Photos**: `public/media/development/photos/`
- **Videos**: `public/media/development/videos/`

### Final App Media
- **Photos**: `public/media/final-app/photos/`
- **Videos**: `public/media/final-app/videos/`

## File Naming Guidelines

### Photos
- Use descriptive names: `app-screenshot-module-name.png`
- Use lowercase with hyphens: `development-team-working.png`
- Include numbers for sequences: `screenshot-01.png`, `screenshot-02.png`

### Videos
- Use descriptive names: `app-demo-module-name.mp4`
- Use lowercase with hyphens: `development-process-01.mp4`
- Include module names for specific demos: `app-demo-stress-bridge.mp4`

## Recommended File Sizes

### Photos
- Screenshots: 1920x1080 or higher
- Thumbnails: 400x300 or 800x600
- Format: PNG for screenshots, JPG for photos

### Videos
- Resolution: 1080p (1920x1080) or 720p (1280x720)
- Format: MP4 (H.264 codec)
- Duration: Keep demo videos under 2-3 minutes for web
- File size: Try to keep under 50MB per video

## Usage on Website

These media files can be referenced in the code using:
- `/media/development/photos/filename.png`
- `/media/development/videos/filename.mp4`
- `/media/final-app/photos/filename.png`
- `/media/final-app/videos/filename.mp4`

## Notes
- All files in the `public/` folder are served statically
- Use relative paths starting with `/media/` in your code
- Consider optimizing images and videos for web performance

