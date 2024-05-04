import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import { siteConfig } from "@/app/config/site-config";

const neuropol = localfont({ src: "./fonts/neuropol.otf" });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={neuropol.className} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
