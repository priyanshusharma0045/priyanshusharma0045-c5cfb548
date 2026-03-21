

## Plan: Integrate EmailJS with Contact Form

Since the EmailJS public key is a publishable key, it's safe to store directly in the codebase.

### Steps

1. **Install `@emailjs/browser` package** as a dependency.

2. **Update `ContactSection.tsx`**:
   - Import `emailjs` from `@emailjs/browser`
   - Add state for form fields (`name`, `email`, `message`) and a `sending` loading state
   - Replace the dummy `onSubmit` with an `emailjs.send()` call using:
     - Service ID: `service_pt8lzwa`
     - Template ID: `template_19n1cau`
     - Public Key: `gvl6LyGOFh4NkFT_1`
   - Pass form data as template parameters (`from_name`, `from_email`, `message`)
   - Show loading state on the button while sending
   - Handle errors with a toast notification
   - On success, show the existing "Message sent!" state

### Important Note
Make sure your EmailJS email template uses matching variable names (`from_name`, `from_email`, `message`). You can adjust these in your EmailJS dashboard under **Email Templates** if needed.

