import { Button, Textarea , Label, TextInput } from "flowbite-react";
import { FaLocationDot, FaPhone  } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contact(){
    return(
        <>
            <div className="bg-[url(/footer/background.png)] bg-cover bg-center rounded-2xl flex items-center justify-center h-20 mb-4">
                <p className="text-xl font-semibold">Contact Us</p>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-5">
                {/* form */}
                <div className="w-full">
                    <form className="flex min-w-full flex-col gap-4 ">
                        {/* name */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <div className="mb-2 block"> <Label htmlFor="firstName">First Name <span className="text-red-400">*</span></Label></div>
                                <TextInput id="firstName" type="firstName" placeholder="Ex. Jhon" required className="w-full"/>
                            </div>
                            <div className="w-full">
                                <div className="mb-2 block"> <Label htmlFor="lastName">Last Name<span className="text-red-400">*</span></Label></div>
                                <TextInput id="lastName" type="lastName" placeholder="Ex. Doe" required className="w-full"/>
                            </div>
                        </div>
                        {/* Email & phone */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <div className="mb-2 block"> <Label htmlFor="email">Email <span className="text-red-400">*</span></Label></div>
                                <TextInput id="email" type="email" placeholder="example@gmail.com" required className="w-full"/>
                            </div>
                            <div className="w-full">
                                <div className="mb-2 block"> <Label htmlFor="phone">Phone<span className="text-red-400">*</span></Label></div>
                                <TextInput id="phone" type="phone" placeholder="Enter Phone Number" required className="w-full"/>
                            </div>
                        </div>
                        {/* subject */}
                        <div className="w-full">
                                <div className="mb-2 block"> <Label htmlFor="subject">Subject<span className="text-red-400">*</span></Label></div>
                                <TextInput id="subject" type="subject" placeholder="Enter here.." required className="w-full"/>
                        </div>
                        {/* Message */}
                        <div className="w-full">
                            <div className="mb-2 block"><Label htmlFor="comment">Your message</Label></div>
                            <Textarea id="comment" placeholder="Enter here..." required rows={4} />
                        </div>
                        <Button color="green" pill type="submit">Submit</Button>
                    </form>
                </div>

                {/* image */}
                <div className="">
                    <img src={`${import.meta.env.BASE_URL}footer/user2.png`} alt="" className="h-full object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-5 mt-10 ">
                <div className=" flex flex-col justify-center items-center text-center shadow p-8 rounded-lg">
                    <div className="bg-amber-400 p-4 rounded-lg"><FaLocationDot /></div>
                    <div className="mt-3">
                        <p className="font-semibold">Address</p>
                        <p className="text-[11px] text-gray-600">8502 Preston Rd.Inglewood, Maine 98380</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center text-center shadow p-8 rounded-lg">
                    <div className="bg-amber-400 p-4 rounded-lg"><FaPhone /></div>
                    <div className="mt-3">
                        <p className="font-semibold">Address</p>
                        <p className="text-[11px] text-gray-600">8502 Preston Rd.Inglewood, Maine 98380</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center text-center shadow p-8 rounded-lg">
                    <div className="bg-amber-400 p-4 rounded-lg"><IoMdMail /></div>
                    <div className="mt-3">
                        <p className="font-semibold">Address</p>
                        <p className="text-[11px] text-gray-600">8502 Preston Rd.Inglewood, Maine 98380</p>
                    </div>
                </div>
            </div>


            {/* map */}
            <div class="relative h-96 w-full overflow-hidden rounded-xl border border-slate-200 shadow-md mt-8">
            <iframe 
                class="absolute inset-0 h-full w-full border-0" 
                src="https://maps.google.com/maps?q=Monumen%20Nasional%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </>
    )
}

export default Contact;