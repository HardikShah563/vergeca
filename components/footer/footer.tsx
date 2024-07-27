// importing from react
import { SVGProps } from "react";
// importing from next
import Image from "next/image";
import Link from "next/link";
// importing image
import playstore from "@/public/images/playstore.svg";
import webapp from "@/public/images/webapp.svg";
import logo from "@/public/images/logo.svg";
// importing data
import { footerLinks } from "@/lib/data";
// imporing icons
import {
    Mail
} from "lucide-react";

export function Footer() {
    function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        )
    }

    function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram"
            >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        )
    }


    function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        )
    }

    function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
            >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
            </svg>
        )
    }

    function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
            >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        )
    }

    function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
            >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        )
    }

    return (
        <>
            <footer className="px-[4vw] lg:px-[8vw] py-10 bg-accent text-background">
                <div className="">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-[180px] mb-5"
                    />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-2 lg:gap-10">
                    <div>
                        <h5 className="text-sm font-bold mb-4">Get Help 24/7</h5>
                        <ul className="space-y-2">
                            <li>
                                <Mail className="inline-block w-5 h-5 mr-1" />
                                <a target="_blank" href="mailto:info@toursnactivities.com">
                                    info@toursnactivities.com
                                </a>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <h1 className="text-sm font-bold mb-2 ml-1">Available at</h1>
                            
                            <Image
                                src={playstore}
                                alt=""
                                className="w-[160px]"
                            />

                            <Image
                                src={webapp}
                                alt=""
                                className="w-[160px]"
                            />
                        </div>
                    </div>

                    {footerLinks.map((linkSet) => (
                        <div key={linkSet.title}>
                            <h5 className="text-sm font-bold mb-4">{linkSet.title}</h5>
                            <ul className="space-y-2">
                                {linkSet.link.map((link) => (
                                    <li key={link.link}
                                    // className={link.title.includes('View') && "underline"}
                                    >
                                        {link.link
                                            ? <Link
                                                href={link.link}
                                            >
                                                {link.title}
                                            </Link>
                                            : link.title
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t mt-8 pt-8 flex flex-col md:flex-row gap-5 items-center justify-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold justify-center">
                        <div className="text-center">© {new Date().getFullYear()} Verge CA. All rights reserved</div>
                        <div className="hidden md:block text-xl">•</div>
                        <Link className="hover:text-primary" href={"/privacy-policy"}>Privacy Policy</Link>
                        <div className="hidden md:block text-xl">•</div>
                        <Link className="hover:text-primary" href={"/terms-of-use"}>Terms of Use</Link>
                    </div>

                    <div className="flex gap-5">
                        <PhoneIcon />
                        <InstagramIcon />
                        <LinkedinIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </div>
                </div>

                <div className="mt-10">
                    <h5 className="text-xs font-semibold mb-1 text-center sm:text-left">Developed and Powered by:</h5>
                    <a target="_blank" href="https://www.hellohardik.xyz">
                        {/* <Image
                            src={companyLogo}
                            alt="Hello Hardik"
                            className="w-[200px] mx-auto sm:mx-0"
                        /> */}
                        some logo
                    </a>
                </div>
            </footer>
        </>
    )
}