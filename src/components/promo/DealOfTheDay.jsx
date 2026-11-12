import { useState } from "react";
import { ButtonPill } from "../ui/Button";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function DOTDCard({ name, category, price, oldPrice, image, discount }) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Menangani category baik berbentuk Array maupun String
    const categoryText = Array.isArray(category) 
        ? category.join(' • ') 
        : category;

    return (
        <div className="grid grid-cols-[4fr_6fr] h-full w-full shrink-0 min-w-0 items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Area Gambar (Kiri) */}
            <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-gray-50 p-2">
                {/* Badge Diskon Melayang */}
                {discount && (
                    <span className="absolute top-1.5 left-1.5 z-10 rounded-r-full bg-emerald-600 px-2 py-0.5 text-[9px] md:text-xs text-white">
                        {discount}% <span className="hidden md:inline">off</span>
                    </span>
                )}
                <img  className="max-h-28 md:max-h-36 w-full object-contain"  src={image}  alt={name} />
            </div>

            {/* Area Detail Produk (Kanan) */}
            <div className="flex flex-col justify-between md:ps-4 p-1 gap-1">
                {/* Header Info: Kategori & Wishlist Button */}
                <div>
                    <div className="flex items-start justify-between gap-1">
                        <p className="text-[9px] md:text-xs font-medium text-emerald-600 line-clamp-1">{categoryText}</p>
                        <button onClick={() => setIsFavorite(!isFavorite)} className="text-red-600 hover:scale-110 transition-transform p-0.5"aria-label="Favorite">
                            {isFavorite ? (
                                <BsFillHeartFill className="text-xs md:text-sm" />
                            ) : (
                                <BsHeart className="text-xs md:text-sm" />
                            )}
                        </button> 
                    </div>

                    {/* Judul Produk */}
                    <h5 className="mt-0.5 text-xs md:text-sm font-semibold text-gray-800 line-clamp-1">{name}</h5>
                </div>

                {/* Harga & Button */}
                <div className="">
                    <div className="flex items-baseline gap-1.5 flex-wrap mb-2">
                        <span className="font-semibold text-xs md:text-sm text-gray-900">Rp {price?.toLocaleString("id-ID")}</span>
                        {oldPrice && (
                            <span className="text-[9px] md:text-xs text-gray-400 line-through">Rp {oldPrice?.toLocaleString("id-ID")}</span>
                        )}
                    </div>

                    {/* Tombol Add */}
                    <div>
                        <ButtonPill>
                            <HiOutlineShoppingBag className="text-xs md:text-sm mr-1" />
                            <span className="text-xs">Add</span>
                        </ButtonPill>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DOTDCard;