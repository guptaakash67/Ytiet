import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/NavBar/NavBar";
import FirstLoadPage from "@/components/Common/Others/FirstLoadPage";
import NextTopLoader from 'nextjs-toploader';
import { AuthUserProvider } from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL),
  title: 'yadavrao tasgaonkar institute of engineering and technology',
  description: 'yadavrao tasgaonkar institute of engineering and technology',
  generator: 'Next.js',
  applicationName: 'yadavrao tasgaonkar institute of engineering and technology',
  referrer: 'origin-when-cross-origin',
  keywords: ['yadavrao tasgaonkar institute of engineering and technology', 'Akash', 'Gupta', 'AkashGupta', 'Next.js', 'React.js'],

  authors: [{ name: 'Akash Gupta' }, { name: 'Akash Gupta', url: 'https://akashportfolioo.vercel.app/' }],
  creator: 'Akash Gupta',
  publisher: 'Akash Gupta',

  icons: {
    icon: '/images/ses.jpeg',
    shortcut: '/images/ses.jpeg',
    apple: '/images/ses.jpeg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/ses.jpeg',
    },
  },

  openGraph: {
    title: 'yadavrao tasgaonkar institute of engineering and technology',
    description: 'yadavrao tasgaonkar institute of engineering and technology',
    url: '/images/ses.jpeg',
    siteName: 'yadavrao tasgaonkar institute of engineering and technology',
    images: [
      {
        url: '/images/ses.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/images/ses.jpeg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'ses png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#431d7a" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} min-h-screen `}>
        <AuthUserProvider>
          {/* <div>
            <img src="/background.png" className=" h-screen w-full fixed top-0 left-0 -z-50" />
          </div> */}
          <div className=" h-screen w-full fixed top-0 left-0 -z-50 bg-gradient-to-b from-white to-blue-100" ></div>
          <NextTopLoader color="#FF0000"
            initialPosition={0.08}
            height={4}
            crawl={true}
            showSpinner={false} />
          <Navbar />

          {/* <div className=" min-h-screen overflow-x-hidden">
        {children}
        </div>
        <Footer /> */}

          <FirstLoadPage children={children} />
        </AuthUserProvider>
      </body>
    </html>
  );
}
