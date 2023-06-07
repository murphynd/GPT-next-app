import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "app/(shared)/NavBar";

// setting up font via nextjs
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog AI app",
  //SEO in the description
  description: "Blog built in Jext Js that uses AI to generate content",
};
// global layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
