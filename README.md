# Image Hash Demo

This project demonstrates the implementation of BlurHash for progressive image loading in a Next.js application. It shows how to generate a BlurHash from an image and use it as a placeholder while the full image loads.

## Features

- Progressive image loading with BlurHash placeholder
- Automatic BlurHash generation from images
- Smooth transition from placeholder to full image
- Loading state indicator
- Responsive design

## How It Works

1. **BlurHash Generation**:
   - When the page loads, it creates a new Image object
   - The image is drawn on a canvas at a reduced resolution (32px width)
   - The pixel data from the canvas is used to generate a BlurHash using the `encode` function
   - The generated hash is stored in state

2. **Progressive Loading**:
   - The BlurHash component displays the blurred placeholder
   - After a short delay (1 second), the full image loading begins
   - The image is displayed with a smooth fade-in transition
   - A loading indicator is shown while the image is loading

3. **Image Display**:
   - The full image is displayed using Next.js's optimized Image component
   - The image is styled to cover the container while maintaining aspect ratio
   - Once loaded, the image fades in over the BlurHash placeholder

## Technologies Used

- Next.js
- React
- BlurHash
- HTML5 Canvas

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/imghash-demo.git
   ```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
