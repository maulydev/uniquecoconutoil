// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Unique Coconut Oil</title>
      <meta name="description" content="Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced." />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Unique Coconut Oil" />
      <meta property="og:description" content="Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced." />
      <meta property="og:image" content="https://uniquecart.vercel.app/25L.png" />
      <meta property="og:url" content="https://uniquecart.vercel.app" />
      <meta property="og:site_name" content="Unique Coconut Oil" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Unique Coconut Oil" />
      <meta name="twitter:description" content="Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced." />
      <meta name="twitter:image" content="https://uniquecart.vercel.app/25L.png" />
    </>
  )
}
