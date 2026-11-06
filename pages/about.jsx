import { Card } from "flowbite-react";
import { FaRocket, FaEye, FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ourTeams from "../src/data/ourTeams.json"

function About() {
  return (
    <>
        <Card className="w-full max-w-4xl border-0 shadow-none">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Image */}
                <div className="relative w-full md:w-1/2 shrink-0">
                    <video autoPlay muted playsInline className="w-full h-full object-cover rounded-lg">
                        <source src="/aboutUs/aboutvid.mp4" type="video/mp4" />
                        Browser kamu tidak mendukung video.
                    </video>
                {/* Badge */}
                <div className="absolute top-5 -left-3 bg-yellow-400 px-4 py-2 rounded-r-lg rounded-tl-lg shadow-md">
                    <div className="absolute -bottom-2 left-0 w-0 h-0 border-t-8 border-t-yellow-500 border-l-12 border-l-transparent"></div>
                    <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold leading-none">16</span>
                    <div className="leading-tight">
                        <p className="font-bold text-lg">Years</p>
                        <p className="text-xs">of Services</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-700 mb-2">About Us</p>
                <h2 className="text-3xl font-bold leading-tight text-gray-900">
                    Your Trusted Partner in{" "}
                    <span className="text-green-700">Fresh Grocery Delivery</span>
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                {/* Features */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400">
                        <FaCheck className="text-[9px] text-gray-800" />
                    </span>
                    <span className="text-sm text-gray-600">Eco-Friendly and Sustainable Practices</span>
                    </div>

                    <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400">
                        <FaCheck className="text-[9px] text-gray-800" />
                    </span>
                    <span className="text-sm text-gray-600">
                        Fresh and High-Quality Groceries
                    </span>
                    </div>

                    <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400">
                        <FaCheck className="text-[9px] text-gray-800" />
                    </span>
                    <span className="text-sm text-gray-600">
                        Convenient and Reliable Delivery
                    </span>
                    </div>

                </div>

                {/* Founder */}
                <div className="mt-5">
                    <p className="text-2xl italic font-semibold text-gray-800">
                    Jenny Alexander
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                    Jenny Alexander
                    <span className="mx-1 text-yellow-400">•</span>
                    Founder
                    </p>
                </div>
                </div>
            </div>
        </Card>

        <div className="relative w-full mb-6">
            <div className="absolute right-6 bottom-6 w-3xl h-96 rounded-l-xl bg-gray-300/30"></div>
            <Card className="max-w-2xl ml-auto p-0 border-none shadow-none">
                {/* IMAGE + BADGE */}
                <div className="relative">
                    <img src="/aboutUs/shoping.png" alt="Fresh Grocery" className="w-full object-cover rounded-l-xl" />
                    {/* RATING BADGE */}
                    <div className="absolute bottom-4 -left-2 bg-yellow-400 px-2 py-2 flex items-center rounded-r-lg rounded-bl-lg">
                        {/* AVATARS */}
                        <div className="absolute -top-2.5 left-0 w-0 h-0 border-b-10 border-b-yellow-500 border-l-8 border-l-transparent"></div>
                        <div className="flex -space-x-2 mr-2">
                            <img src="/footer/user1.png" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                            <img src="/footer/user2.png" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                            <img src="/footer/user3.png" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                            <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white">
                                <FaPlus className="text-xs" />
                            </div>
                        </div>
                        {/* RATING */}
                        <div className="leading-tight pr-2">
                            <p className="font-bold text-sm text-gray-900">4.8 Star</p>
                            <p className="text-[10px] text-gray-700">Reviews</p>
                        </div>
                    </div>
                </div>
                {/* CARD CONTENT */}
                <div className="px-6 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* VISION */}
                    <div>
                        <div className="w-10 h-10 bg-green-900 rounded-md flex items-center justify-center text-white mb-3">
                            <FaRocket />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-1">Our Vision</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                    {/* MISSION */}
                    <div>
                        <div className="w-10 h-10 bg-green-900 rounded-md flex items-center justify-center text-white mb-3">
                            <FaEye />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-1">Our Mission</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                    </div>
                </div>
            </Card>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
            <div className="text-center mb-5">
                <p className="text-sm font-semibold">Our Team</p>
                <p className="text-xl font-semibold">Meet The Passionate</p>
                <p className="text-xl font-semibold text-green-600">Team Behind Our Success</p>
            </div>
            <div className="w-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {ourTeams.map((item)=> (
                    <div key={item.id} className="bg-white rounded-xl transition-shadow">
                        <img src={item.photo} className="h-48 object-cover w-full rounded-xl" />
                        <div className="mt-2">
                            <p className="text-sm font-semibold">{item.name}</p>
                            <p className="text-[11px] text-gray-600">{item.department}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
}

export default About;