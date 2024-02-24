import PhoneCallIcon from "@/svg/PhoneCallIcon"
import SupportCenter from "../SupportCenter"
import FacebookIcon from "@/svg/FacebookIcon"
import TwitterIcon from "@/svg/TwitterIcon"
import InstagramIcon from "@/svg/InstagramIcon"
import PinterestIcon from "@/svg/PinterestIcon"
import YoutubeIcon from "@/svg/YoutubeIcon"

const FooterEnd = () => {
  return (
    <div className="text-gray-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-10">
        <div>
            <p>© 2022, Nest - HTML Ecommerce Template
            <br/>
            All rights reserved</p>
        </div>

        <div className="flex gap-10">
            <SupportCenter phone_no="1900 - 6666" message="Working 8:00 - 22:00">
                <PhoneCallIcon className="fill-black" />
            </SupportCenter>
            <SupportCenter phone_no="1900 - 8888" message="24/7 Support Center">
                <PhoneCallIcon className="fill-black" />
            </SupportCenter>
        </div>

        <div>
            <div className="flex gap-1 items-center md:justify-between">
                <h6 className="text-green-30 font-[600]">Follow Us</h6>
                <div className="bg-green-10 rounded-full px-2 py-[1px]">
                    <FacebookIcon className="fill-white" />
                </div>
                <div className="bg-green-10 rounded-full px-2 py-[1px]">
                    <TwitterIcon className="fill-white"/>
                </div>
                <div className="bg-green-10 rounded-full px-2 py-[1px]">
                    <InstagramIcon className="fill-white" />
                </div>
                <div className="bg-green-10 rounded-full px-2 py-[1px]">
                    <PinterestIcon className="fill-white" />
                </div>
                <div className="bg-green-10 rounded-full px-2 py-[1px]">
                    <YoutubeIcon className="fill-white" />
                </div>
            </div>
            <p>Up to 15% discount on your first subscribe</p>
        </div>
    </div>
  )
}

export default FooterEnd
