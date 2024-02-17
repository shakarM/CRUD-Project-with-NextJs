import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs Small Project",
  description: "This is a small project built by Shakar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/ijsto/reactnextjssnippets/master/images/logo02.png"
        />
      </head>

      <body className=" flex flex-col justify-between gap-11">
        <div className="mx-[2rem] p-6">
          <Navbar />
          <div className=" mt-8">{children}</div>
        </div>
        <footer className="flex justify-center items-baseline relative bottom-0">
          <p> This small project uses NextJs and MongoDB as backend.</p>
        </footer>
      </body>
    </html>
  );
}
