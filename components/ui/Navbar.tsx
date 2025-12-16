import Link from "next/link";
import { ArrowRight, StarIcon } from "lucide-react";

export default function Navbar() {
    return (
        <div className="pt-6 text-black">
        <div className="relative mx-auto">
            <nav className="grid grid-cols-3 items-center justify-between px-12">

                <div className="text-2xl text-left">
                <h1 className="font-bold">JobIs<span className="text-red-600">Well</span></h1>
                </div>

                <div className="text-base text-center items-center flex justify-center">
                    <div className="space-x-6">
                    <Link href="#about" className="hover:decoration-black duration-500">About</Link>
                    <Link href="#testimonials" className=" hover:decoration-black duration-500">Testimonials</Link>
                    <Link href="#contact" className="hover:decoration-black duration-500">Contact</Link>
                    </div>
                </div>
                
            <div className="gap-6 inline-flex justify-end">
                <button className="px-6 py-2 bg-red-600 text-black rounded-xl inline-flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
  Book a Call <ArrowRight className="w-4 h-4" />
</button>
                <button>Register</button>
            </div>
            </nav>
        </div>
        </div>
    )
}