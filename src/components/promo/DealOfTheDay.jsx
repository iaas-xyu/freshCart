import { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function DOTDCard({ title, category, price, oldPrice, rating, desc, image, discount}) {
    const [isVaforite, setIsVaforite] = useState(false);
    return (
        <div className="flex justify-between h-full w-full shrink-0 min-w-0 flex-row items-center overflow-hidden rounded-2xl bg-white p-5 shadow-md">
            <div className="flex h-full w-[35%] justify-between bg-contain bg-center bg-no-repeat"
                style={{backgroundImage: `url('${image}')`}}>
                <p className="w-fit h-fit rounded-r-full bg-green-600 px-2 py-1 text-xs text-white">{discount}% off</p>
                <button onClick={() => setIsVaforite(!isVaforite)} className="w-fit h-fit p-2">
                    {isVaforite? (
                        <BsFillHeartFill className="text-red-700 text-md"/>
                    ) : (
                        <BsHeart className="text-sm text-red-700"/> 
                    )}
                    
                </button>
            </div>

            <div className="flex flex-col gap-2 p-4 w-[70%]">
                <p className="text-xs font-semibold text-green-600">{category}</p>
                <h5 className="truncate text-lg font-bold text-gray-800">{title}</h5>
                <div>
                    <span className="font-semibold">Rp {price.toLocaleString("id-ID")}</span>
                    <span className="ml-2 text-sm text-gray-400 line-through">Rp {oldPrice.toLocaleString("id-ID")}</span>
                </div>
                <p className="text-sm">⭐ {rating}</p>
                <p className="line-clamp-2 text-sm text-gray-500">{desc}</p>
                <button className="mt-2 flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-600">
                    <HiOutlineShoppingBag /> Add
                </button>
            </div>
        </div>
    );
}

export default DOTDCard