import { FOOTER_LINKS } from "@/context/Context"
import ClockIcon from "@/svg/ClockIcon"
import ContactIcon from "@/svg/ContactIcon"
import EmailIcon from "@/svg/EmailIcon"
import LocationIcon from "@/svg/LocationIcon"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="padding-container max-container">
        <div className="md:grid md:grid-cols-3 lg:flex lg:justify-between gap-2 text-sm font-[500] py-6 text-green-30">
           <div className="lg:max-w-[300px]">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={171}
                    height={46}
                />
                <p className="my-4">Awesome grocery store website template</p>
                <div className="flex gap-2 items-start mb-3">
                    <LocationIcon className="fill-green-10" />
                    <p><strong>Address:</strong> 5171 W Campbell Ave  Kent, Utah 53127 United States</p>
                </div>
                <div className="flex gap-2 items-start mb-3">
                    <ContactIcon className="fill-green-10" />
                    <p><strong>Call Us:</strong>(+91) - 540-025-124553</p>
                </div>
                <div className="flex gap-2 items-start mb-3">
                    <EmailIcon className="fill-green-10" />
                    <p><strong>Email:</strong>sale@Nest.com</p>
                </div>
                <div className="flex gap-2 items-start">
                    <ClockIcon className="fill-green-10" />
                    <p><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                </div>
           </div>

            {FOOTER_LINKS.map((footer, index) =>(
           <div key={index} className="">
            <h4 className="text-2xl font-[800] mb-6">{footer.title}</h4>
            <ul>
                {footer.items.map((item, ref) =>(
                <li key={ref} className="mb-4"><Link href={item.url}>{item.name}</Link></li>
                ))}
            </ul>
           </div>
           ))}

           <div className="">
            <h4 className="text-2xl font-[800] mb-6">Install App</h4>
                <p>From App Store or Google Play</p>
                <br/>
                <div className="flex gap-2 mb-4">
                    <Image 
                        src="/footer-app-store.png"
                        alt="apple-store"
                        width={100}
                        height={20}
                    />
                     <Image 
                        src="/footer-google-play.png"
                        alt="google-play"
                        width={100}
                        height={20}
                    />
                </div>
                <br/>
                <p>Secured Payment Gateways</p>
                <br/>
                <Image 
                        src="/footer-payment.png"
                        alt="payment"
                        width={160}
                        height={20}
                    />
           </div>
        </div>
    </footer>
  )
}

export default Footer
