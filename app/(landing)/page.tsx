"use client";

import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, CodeXml, Hourglass, NotebookText, Plus, Receipt, Rocket, Infinity } from "lucide-react"
import {Alumni_Sans_Pinstripe} from "next/font/google"
import { Barlow_Condensed } from "next/font/google";
import { Cal_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";
import Spotlight from "@/components/spotlight";

  const alumni = Alumni_Sans_Pinstripe({
  subsets: ["latin"],
  weight: "400",
  style: 'italic',
  variable: "--font-alumni",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  style: 'italic',
  weight: "100",
  variable: '--font-dmsans',
});

const calsans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calsans",
});

const barlo = Barlow_Condensed({
  subsets: ["latin"],
  style: 'italic',
  weight: "100",
  variable: "--font-barlo",
})

export default function Home() {

  return (
    <>
    <div className="h-full bg-white ">
      {/* Header */}
          
      <header className="flex items-center justify-between px-6 py-4 lg:px-12 z-10 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div> */}
          <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-semibold text-amber-300">
            🐝 BillBee. 
          </div>
          </Link>
        </div>

        {/* Navigation */}
        
        {/* CTA Button */}
        <Button className="bg-amber-300 hover:bg-amber-400 text-black hover:text-white px-6 py-2 rounded-full font-medium">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" /> 
        </Button>
      </header>

      {/* Main Content */}
      <div className="px-20 lg:px-32 pt-24 relative flex flex-col items-center justify-center text-center mb-100">
        
        {/* Hero Section */}
        <div className="max-w-7xl flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-9xl lg:text-9xl font-light leading-tight mb-8 text-black">
            <span className={`italic text-balance text-8xl ${dmsans.className} `}>Fill, Preview, Download</span>
            <br />

            <span className={`italic font-bold ${calsans.className}`}> Smart invoicing without the clutter.</span>
            <br />
            {/* <span className="italic font-bold"> ready-to-send invoice</span> */}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
            Simplify your billing workflow: create invoices online, customize details, and download a professional PDF instantly.
          </p>
          <Link href="/new" >
          <Button size={'lg'} className="bg-amber-300 hover:bg-amber-400 text-black px-8 py-3 rounded-full font-medium flex items-center gap-2">
            Create Your Invoice
            <ArrowRight className="w-4 h-4" />
          </Button>
          </Link>
        </div>
        

        {/* Nominee Badge */}
        <Spotlight />

        
      </div>
        {/* <DemoPreview /> */}

    </div>
    
    </>
  )
}


