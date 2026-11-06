import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

import { FaStar, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaPlus, FaMinus } from "react-icons/fa6";


function ProductCard({
  id,
  name,
  category,
  price,
  oldPrice,
  discount,
  rating,
  image,
  statusStock,
  stock,
  onAddToCart,
  product,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(2);
  const [qty, setQty] = useState(1);

  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  const handleButonMin=()=>{
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  }
  const handleButonPlus=()=>{
    setQty((prevQty) => prevQty + 1);
  }
  const handleAdd =()=>{
    const itemToSubmit = product || {
      id,
      name,
      category,
      price,
      image,
      stock,
    }
    if (typeof onAddToCart === "function"){
      onAddToCart(itemToSubmit, qty);
      setIsModalOpen(false)
      setQty(1);
    } else {
      console.error("props onAddToCart belum dikirim dari komponen parent!")
    }
  }


  return (
    <div className="relative w-full max-w-xs rounded-xl bg-white p-3 shadow-sm h-fit hover:shadow-lg">
      {/* Discount & Favorite */}
      <div className="flex items-center justify-between">
        <span className="rounded-r-full bg-green-700 px-2 py-1 text-[10px] text-white">
          {discount}% off
        </span>
        <div className="flex gap-2">
          <button onClick={handleFavorite} className="">
            {isFavorite ? (
              <FaHeart className="text-red-700" size={23} />
            ) : (
              <FaHeart className="text-red-300" size={18} />
            )}
          </button>
          <span className="rounded-full bg-amber-600 px-2 py-1 text-[9px] text-white">
            {statusStock}
          </span>
        </div>
      </div>
      {/* Image */}
      <Link to={`/DetailProduct/${id}`}>
        <div className="flex h-40 items-center justify-center">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      {/* Category & Rating */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] text-gray-400">{category}</p>
        <div className="flex items-center gap-1 text-xs">
          <FaStar className="text-yellow-400" size={12} />
          <span>{rating}</span>
        </div>
      </div>
      {/* Product Info */}
      <Link to={`/DetailProduct/${id}`}>
        <h3 className="mt-1 text-sm font-semibold">{name}</h3>
      </Link>
      {/* Price & Add */}
      <div className="mt-3 flex flex-col md:flex-row justify-between gap-1">
        <div className="flex flex-row items-center gap-1">
          <span className="text-sm font-semibold">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
          <span className="text-[11px] text-gray-400 line-through">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(oldPrice)}
          </span>
        </div>
        <button
          onClick={() => {
            setSelectedId(id);
            setIsModalOpen(true);
          }}
          className="flex items-center justify-center gap-1 rounded-md border border-green-500 px-2 py-1 text-xs text-green-600 w-full md:w-fit hover:bg-green-500 hover:text-white"
        >
          <HiOutlineShoppingBag />
          Add
        </button>
      </div>
      <Modal
        show={isModalOpen}
        size="md"
        popup
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <p
              className="absolute top-4 right-4 overflow-hidden rounded-l-full rounded-br-full border border-green-600 py-1 px-4 after:absolute after:inset-y-0 after:right-0 after:w-0 after:bg-green-600 after:transition-all after:duration-600 hover:after:right-0 hover:after:w-full hover:text-white"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <span className="relative z-10">
                <IoClose />
              </span>
            </p>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white border-b border-gray-300 pb-4">
              Detail Pesanan
            </h3>

            {/* Option Modal */}

            <div className="grid gap-2">
              <span className="absolute left-5 top-65 text-green-800 bg-green-300 py-0.5 px-2 rounded-2xl text-xs">{category}</span>
              <img src={image} alt="" className="max-h-48 mx-auto object-contain"/>
              <div className="font-semibold text-gray-900">{name}</div>
                <div className="flex gap-2 items-center">
                  <p className="text-[12px] text-red-700 font-semibold flex gap-1 items-center">Rp
                    <span className="md:text-[20px] text-[15px]">{price.toLocaleString("id-ID")}</span>
                    <span><FaTag /></span>
                  </p>
                  <p className="flex gap-1 text-xs text-gray-600">Rp
                    <span className="line-through font-extralight">{oldPrice.toLocaleString("id-ID")}</span>
                    <span className="bg-red-200 text-red-800 px-1.5 py-0.5  rounded-md text-[10px] md:text-md">- 
                      {new Intl.NumberFormat('id-ID', { 
                        style: 'percent', 
                        maximumFractionDigits: 0 
                      }).format((oldPrice-price)/oldPrice)}
                    </span>
                  </p>
              </div>
              <div className="flex justify-between pt-3 text-gray-600 border-t border-gray-200">
                <p className="text-sm">Jumlah Stock : <span>{stock}</span></p>
                <div className="flex">
                  <button type="button" onClick={handleButonMin} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none">
                    < FaMinus/>
                  </button>
                    <input type="text" value={qty} onChange={(e) => setQty(Number(e.target.value))}  className="border-y border-gray-400 w-10 h-full text-center"/>
                  <button type="button" onClick={handleButonPlus} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-r-sm rounded-l-none text-xs px-2 h-full focus:outline-none">
                    < FaPlus/>
                  </button>
                </div>
              </div>
              <div className="flex gap-1 font-semibold">
                <span>Total Belanja : Rp</span>
                <span>{(price * qty).toLocaleString("id-ID")}</span>
              </div>
              <div className="">
                <Button onClick={handleAdd} color="green" size="md" className=" w-full">Masukan Keranjang</Button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export { ProductCard };
