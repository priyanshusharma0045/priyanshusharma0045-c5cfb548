

## Plan: Add Resume Download Button in Hero Section

Add a "Download Resume" button next to the existing "View Projects" and "Contact Me" buttons in the hero section.

### Changes

**`src/components/HeroSection.tsx`**:
- Import `Download` icon from `lucide-react`
- Add a third button styled similarly to "Contact Me" (outline style) with a `Download` icon, linking to the resume PDF
- Use an `<a>` tag with `download` attribute pointing to a PDF file in `/public`

Since no resume PDF has been provided yet, I'll use a placeholder path (`/resume.pdf`). You can drop your resume file as `public/resume.pdf` to make it work.

