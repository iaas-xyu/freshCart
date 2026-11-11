
import { GoArrowRight } from "react-icons/go";
import CountdownTimer from "./CountdownTimer";
import { ButtonPill } from "../ui/Button";


function PromoCard({discount, title, desc, buttonText, image, bgColor}){
    return(
        <div className={`flex items-center justify-between overflow-hidden rounded-xl pb-0 pr-0 pl-4 ${bgColor}`}>
            <div className="w-[55%] my-4">
                <p className="text-[9px] lg:text-sm text-gray-600 bg-amber-400 w-fit px-5 py-0.5 rounded-full">{discount}</p>
                <h2 className="text-base lg:text-xl font-semibold">{title}</h2>
                <p className="text-[9px] lg:text-sm text-green-700">{desc}</p>
                <button className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white text-[9px] md:text-xs inline-flex items-center gap-2">{buttonText} <GoArrowRight /></button>
            </div>
            <img
                src={image}
                alt="Fresh fruits"
                className="w-[32%] md:w-[45%] md:h-full object-contain object-right"
            />
        </div>
    )
}


function PromoSesionCard({id, title, desc, buttonText, imageCenter, imageLeft, imageRight}){
    const words = title.split(" ");
    return(
        <div className="grid md:grid-cols-[1fr_3fr_1fr] gap-2 lg:h-[70vh]">
            {/* content Left */}
            <div className="bg-cover rounded-2xl hidden md:block" style={{backgroundImage: `url(${imageLeft})`}}></div>
            {/* content center */}
            <div className="grid place-items-center bg-cover text-center rounded-2xl py-6 lg:py-0" style={{backgroundImage: `url(${imageCenter})`}}>
                <div className="grid gap-5">
                    <span className="text-lg md:text-xl lg:text-3xl font-semibold md:mt-5">{words[0]}{" "} 
                        <span className="text-green-600">{words[1]}</span>
                    </span>
                    <p className="text-[11px] md:text-base text-gray-700 font-semibold">{desc}</p>
                    <CountdownTimer />
                    <div className="">
                        <ButtonPill onClick=""><span className="text-[11px]">{buttonText}</span><GoArrowRight /></ButtonPill>
                    </div>
                </div>
            </div>
            {/* content Right */}
            <div className="bg-cover rounded-2xl hidden md:block" style={{backgroundImage: `url(${imageRight})`}}></div>
        </div>
    )
}

export {PromoCard, PromoSesionCard}