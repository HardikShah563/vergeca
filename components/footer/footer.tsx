// importing from react
import { SVGProps } from "react";
// importing from next
import Image from "next/image";
import Link from "next/link";

// importing image
import playstore from "@/public/images/playstore.svg";
import appstore from "@/public/images/appstore.svg";
import webapp from "@/public/images/webapp.svg";
import logo from "@/public/images/logo.svg";
import valueye from "@/public/valueye.png";

// importing data
import { footerLinks } from "@/lib/data";
// imporing icons
import {
    Mail
} from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { TelegramIcon } from "./telegram-icon";

export function Footer() {
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

                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-2 lg:gap-10">
                    <div className="space-y-5 md:col-span-2">
                        <div>
                            Revision App for CA Inter & CA Final Students
                        </div>

                        <ul>
                            <li>
                                <Mail className="inline-block w-5 h-5 mr-1" />
                                <a target="_blank" href="mailto:vergecainfo@gmail.com">
                                    vergecainfo@gmail.com
                                </a>
                            </li>
                        </ul>

                        <div>
                            <h1 className="text-sm font-bold ml-1">Available at</h1>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <div className="rounded-lg overflow-hidden h-fit bg-foreground w-fit px-2">
                                    <Image
                                        src={playstore}
                                        alt=""
                                        className="max-w-[100px] rounded-lg overflow-hidden"
                                    />
                                </div>

                                <div className="rounded-lg overflow-hidden h-fit bg-foreground w-fit px-2">
                                    <Image
                                        src={appstore}
                                        alt=""
                                        className="max-w-[100px]"
                                    />
                                </div>

                                <div className="rounded-lg overflow-hidden h-fit bg-foreground w-fit px-2">
                                    <Image
                                        src={webapp}
                                        alt=""
                                        className="max-w-[100px]"
                                    />
                                </div>
                            </div>
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
                        <div className="text-center">© {new Date().getFullYear()} Verge Infotech. All rights reserved</div>
                        <div className="hidden md:block text-xl">•</div>
                        <Link className="hover:text-primary" href={"/privacy-policy"}>Privacy Policy</Link>
                        <div className="hidden md:block text-xl">•</div>
                        <Link className="hover:text-primary" href={"/terms-of-use"}>Terms of Use</Link>
                    </div>

                    <div className="flex gap-5">
                        <a target="_blank" href="https://www.linkedin.com/in/vergeca">
                            <LinkedinIcon className="w-6 h-6 fill-background" />
                        </a>
                        <a target="_blank" href="https://t.me/vergeca">
                            <TelegramIcon className="w-6 h-6 fill-background" />
                        </a>
                        <a target="_blank" href="https://wa.me/message/K7QI5MNW454VH1">
                            <WhatsappIcon className="w-6 h-6 fill-background" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/cacfaneel0409">
                            <LinkedinIcon className="w-6 h-6 fill-background" />
                        </a>
                    </div>
                </div>

                <div className="mt-10">
                    <h5 className="text-xs font-semibold mb-1 text-center sm:text-left">Developed and Powered by:</h5>
                    <a target="_blank" href="https://www.hellohardik.xyz">
                        <Image
                            src={valueye}
                            alt="Hello Hardik"
                            className="w-[200px] mx-auto sm:mx-0 my-5"
                        />
                    </a>
                </div>
            </footer>
        </>
    )
}