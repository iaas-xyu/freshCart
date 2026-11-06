import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";

function Footer (){
    return(
        <div className="mt-6">
            <div className="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-3 md:justify-items-stretch">
                <div className="flex items-center gap-3">
                    <img src="/footer/box.png" alt="" className="w-14"/>
                    <div className="">
                        <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                        <p className="font-semibold text-xs text-gray-600">Free Shipping for order above Rp 50.000</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src="/footer/walet.png" alt="" className="w-14"/>
                    <div className="">
                        <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                        <p className="font-semibold text-xs text-gray-600">Free Shipping for order above Rp 50.000</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src="/footer/suport.png" alt="" className="w-14"/>
                    <div className="">
                        <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                        <p className="font-semibold text-xs text-gray-600">Free Shipping for order above Rp 50.000</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 my-5">
                <img src="/footer/user1.png" alt="" className="object-cover w-full h-full"/>
                <img src="/footer/user2.png" alt="" className="object-cover w-full h-full"/>
                <img src="/footer/user3.png" alt="" className="object-cover w-full h-full"/>
                <img src="/footer/user4.png" alt="" className="object-cover w-full h-full"/>
                <img src="/footer/user5.png" alt="" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-[url(/footer/background.png)] bg-cover bg-center rounded-2xl flex flex-col items-center pt-12 md:pt-20">
                <div className="w-2xl flex flex-col items-center gap-4 mb-7">
                    <p className="font-semibold text-gray-700">Our NewsLetter</p>
                    <p className="font-semibold text-4xl text-gray-900 text-center">Subscribe to Our Newsletter to Get <span className="text-green-700">Updates on Our Latest Offers</span></p>
                    <p className="text-xs font-semibold text-gray-700">get 25% off on your first order just by subscribing to our newsletter</p>
                    <form action="" className="w-[55%]">
                        <div className="flex gap-2">
                            <input type="text" id="first_name" className="bg-white text-heading text-sm rounded-full  w-full focus:ring-brand focus:border-brand block pe-7 ps-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter Email Address" />
                            <button type="button" className="text-green-700 font-semibold bg-amber-400 rounded-full hover:bg-amber-500 focus:ring-2 focus:ring-amber-300 shadow-xs leading-5 text-sm px-4 py-2.5 focus:outline-none">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="bg-green-700 text-white h-fit w-[98%] mx-5 my-4 rounded-xl p-10">
                    <div className=" grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-7">
                        <div className="h-fit">
                            <div className="flex items-center">
                                <img src="/public/logo.png" alt="" className="w-10 "/>
                                <p className="text-md font-semibold">Fresh Cart</p>
                            </div>
                            <p className="text-xs ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minus aliquam fuga assumenda modi voluptatem in officiis eum et dolorum?</p>
                            <div className="flex justify-between mt-2 me-7 text-lg">
                                <a href="" className="p-2 bg-white/10 rounded-full "><FaFacebook /></a>
                                <a href="" className="p-2 bg-white/10 rounded-full "><FaSquareXTwitter /></a>
                                <a href="" className="p-2 bg-white/10 rounded-full "><FaInstagram /></a>
                                <a href="" className="p-2 bg-white/10 rounded-full "><FaYoutube /></a>
                                <a href="" className="p-2 bg-white/10 rounded-full "><FaPinterest /></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="grid rid-rows-5 text-xs">
                                <p className="font-semibold text-sm">Company</p>
                                    <p className="text-xs">About us</p>
                                    <p className="text-xs">Blog</p>
                                    <p className="text-xs">Contact us</p>
                                    <p className="text-xs">Career</p>
                            </div>
                            <div className="grid rid-rows-5 text-xs">
                                <p className="font-semibold text-sm">Customer Services</p>
                                    <p className="text-xs">My Account</p>
                                    <p className="text-xs">Track Your Order</p>
                                    <p className="text-xs">Return</p>
                                    <p className="text-xs">FAQ</p>
                            </div>
                            <div className="grid grid-rows-5 text-xs">
                                <p className="font-semibold text-sm">Our Information</p>
                                    <p className="text-xs">Our Privacy</p>
                                    <p className="text-xs">User Terms & Condition</p>
                                    <p className="text-xs">Return Police</p>
                            </div>
                            <div className="grid grid-rows-5 text-xs">
                                <p className="font-semibold text-sm">Contact Info</p>
                                    <p className="text-xs">+0123-456-778</p>
                                    <p className="text-xs">Freshcart@gmail.com</p>
                                    <p className="text-xs">Contact us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer