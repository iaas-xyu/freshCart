
import { GoArrowRight } from "react-icons/go";
import CountdownTimer from "./CountdownTimer";


function PromoCard({discount, title, desc, buttonText, image, bgColor}){
    return(
        <div className={`flex items-center justify-between overflow-hidden rounded-xl pb-0 pr-0 pl-4 ${bgColor}`}>
            <div className="w-[55%] my-4">
                <p className="text-sm text-gray-600 font-semibold bg-amber-400 w-fit px-5 py-0.5 rounded-full">{discount}</p>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-green-700">{desc}</p>
                <button className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white text-xs inline-flex items-center gap-2">{buttonText} <GoArrowRight /></button>
            </div>
            <img
                src={image}
                alt="Fresh fruits"
                className="w-[45%] md:h-full object-contain object-right"
            />
        </div>
    )
}


function PromoSesionCard({id, title, desc, buttonText, imageCenter, imageLeft, imageRight}){
    const words = title.split(" ");
    return(
        <div className="grid grid-cols-[20%_60%_20%] gap-2 h-[70vh] ">
            <div className="bg-cover rounded-2xl" style={{backgroundImage: `url(${imageLeft})`}}></div>
            <div className="grid place-items-center bg-cover text-center rounded-2xl" style={{backgroundImage: `url(${imageCenter})`}}>
                <div className="grid gap-5">
                <span className="text-3xl font-semibold mt-5">{words[0]}{" "} 
                    <span className="text-green-600">{words[1]}</span>
                </span>
                <p className="text-gray-700 font-semibold">{desc}</p>
                <CountdownTimer />
                <button className="mt-4 rounded-full bg-green-600 px-4 py-2 text-white text-xs inline-flex items-center gap-2 justify-self-center">{buttonText} <GoArrowRight /></button>
                </div>
            </div>
            <div className="bg-cover rounded-2xl" style={{backgroundImage: `url(${imageRight})`}}></div>
        </div>
    )
}

export {PromoCard, PromoSesionCard}