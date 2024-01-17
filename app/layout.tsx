
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="On-Chain: A peer-to-peer platform for influencers and content creators to form promotional agreements with advertisers. Explore social media sponsorships for seamless collaboration." />
        <meta name="keywords" content="On-Chain, social media sponsorships, influencer marketing, content creators, peer-to-peer platform, promotional agreements, advertising collaborations" />
        <meta name="author" content="Ese Monday" />
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="On-Chain - Social Media Sponsorships Platform" />
        <meta property="og:description" content="Connect with advertisers and enhance your influence. On-Chain facilitates seamless promotional agreements between influencers and content creators." />
        <meta property="og:image" content="./favicon-32x32.png" />
        <meta property="og:url" content="https://www.onchainpromo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="On-Chain Promo" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On-Chain - Social Media Sponsorships Platform" />
        <meta name="twitter:description" content="Connect with advertisers and enhance your influence. On-Chain facilitates seamless promotional agreements between influencers and content creators." />
        <meta name="twitter:image" content="./favicon-16x16.png" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
          {/* LinkedIn Meta Tags */}
        <meta property="linkedin:title" content="On-Chain - Social Media Sponsorships Platform" />
        <meta property="linkedin:description" content="Connect with advertisers and enhance your influence. On-Chain facilitates seamless promotional agreements between influencers and content creators." />
        <meta property="linkedin:image" content="./favicon-32x32.png" />
        <meta property="linkedin:url" content="https://www.linkedin.com/company/onchainpromo/about/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <title>On-Chain - Social Media Sponsorships Platform</title>

      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
