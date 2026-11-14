import { useState} from "react";
import { Link } from "react-router-dom";
import { Button,  Modal, ModalBody, ModalHeader, Alert  } from "flowbite-react";

import { FaStar, FaHeart } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbBoxOff } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus, FaTag } from "react-icons/fa6";


function ProductCard({
  id,
  name,
  category,
  price,
  oldPrice,
  discount,
  rating,
  image,
  stock,
  onAddToCart,
  product,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [qty, setQty] = useState(1);
  const [openModal, setOpenModal] = useState(null);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  // handle button + dan -
  const handleButonMin=()=>{
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  }
  const handleButonPlus=()=>{
    setQty((prevQty) => (prevQty >= stock ? prevQty : prevQty + 1));
  }

  // status Stock
  const statusStock = () =>{
    return stock === 0 ? "Sold Out" : stock <= 10  ? "Low Stock" : "Available";
  }

  // handle Add {Masukan ke keranjang}
  const handleAdd = () =>{
    const itemToSubmit = product || { id, name, category, price, image, stock}
    //validasi jumlah pembelian
    if (qty === "" || Number(qty) < 1 || Number(qty) > stock){
      return;
    }
    if (typeof onAddToCart === "function"){
      onAddToCart(itemToSubmit, qty);
      setOpenModal(null)
      setQty(1);
    } else {
      console.error("props onAddToCart belum dikirim dari komponen parent!")
    }
  }

  // konfirmasi apakah stocknya habis, kalau habis tidak memunculkan modal ke keranjang tapi modal pemberi tahuan kalau produk ini habis
  const handleOpenModal = () => {
    if (stock === 0){
      setOpenModal("stockEmpty")
    } else {
      setOpenModal("addCart")
    }
  }


  return (
    <div className="relative w-full max-w-xs rounded-xl bg-white p-3 shadow-sm h-fit hover:shadow-lg">
      {/* Discount & Favorite */}
      <div className="flex items-center justify-between">
        <span className="rounded-r-full bg-green-700 px-2 py-1 text-[10px] text-white">
          {discount}% 
          <p className="hidden md:inline"> off</p>
        </span>
        <div className="flex gap-2">
          <button onClick={handleFavorite} className="">
            {isFavorite ? (
              <FaHeart className="text-red-700 text-[15px] md:text-md"/>
            ) : (
              <FaHeart className="text-red-300 text-[13px] md:text-base"/>
            )}
          </button>
          <span className={`rounded-full px-2 py-1 text-[9px] text-white ${stock === 0 ? "bg-red-600" : stock<=10 ? "bg-amber-600" : "bg-green-600"}`}>
            <span className="md:hidden">{statusStock().split(" ")[0]}</span>
            <span className="hidden md:inline">{statusStock()}</span>
          </span>
        </div>
      </div>

      {/* Image */}
      <Link to={`/DetailProduct/${id}`}>
        <div className="flex h-25 md:h-40 items-center justify-center">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>

      {/* Category & Rating */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] text-gray-400 truncate inline-block">{Array.isArray(category) ? category.join(" ") : category}</p>
        <div className="flex items-center gap-1 text-[11px] md:text-xs">
          <FaStar className="text-yellow-400" size={12} />
          <span>{rating}</span>
        </div>
      </div>

      {/* Product Info */}
      <Link to={`/DetailProduct/${id}`}>
        <h3 className="mt-1 text-[11px] md:text-sm font-semibold">{name}</h3>
      </Link>

      {/* Price & Add */}
      <div className="mt-1 flex flex-col justify-between gap-1 md:gap-2">
        <div className="flex flex-col md:flex-row md:gap-2 text-[11px] md:text-sm">
          <span className="font-semibold">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
          <span className="text-gray-400 line-through">
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
            handleOpenModal();
          }}
          className="flex items-center justify-center gap-1 rounded-md border border-green-500 px-4 py-1 text-center text-xs text-green-600 h-fit hover:bg-green-500 hover:text-white"
        >
          <HiOutlineShoppingBag />
          <span>Add</span>
        </button>
      </div>


      {/* Modal */}
      <div className="">
        {/* modal jika stock habis */}
        <Modal show={openModal === "stockEmpty"} size="md" popup onClose={() => setOpenModal(null)} >
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <TbBoxOff className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
              <h3 className="mb-1 text-lg font-normal text-gray-700 dark:text-gray-400">Oops! Product Out of Stock</h3>
              <p className="text-gray-400 mb-2">Sorry, this product is currently unavailable. Please check back later!</p>
              <div className="flex justify-center gap-4">
                <Button size="xs" color="green" onClick={() => setOpenModal(null)}>Continue Shopping</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* Modal  cart */}
        <Modal show={openModal === "addCart"} size="md" popup onClose={() => setOpenModal(null)}>
          <ModalHeader />
          <ModalBody>
            <div className="space-y-6">
              <p
                className="absolute top-4 right-4 overflow-hidden rounded-l-full rounded-br-full border border-green-600 py-1 px-4 after:absolute after:inset-y-0 after:right-0 after:w-0 after:bg-green-600 after:transition-all after:duration-600 hover:after:right-0 hover:after:w-full hover:text-white"
                onClick={() => {
                  setOpenModal(null);
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

                  {/* button + dan - */}
                  <div className="flex">
                    <button type="button" onClick={handleButonMin} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none">
                      < FaMinus/>
                    </button>

                      <input 
                      type="text" 
                      value={qty} 
                      onChange={(e) => {
                        const value = e.target.value;
                        // hanya menerima angka
                        if (!/^\d*$/.test(value)) return;

                        //cegah input melebihi stock
                        if (value === "") {
                          setQty("");
                        } else {
                          setQty(Math.min(Number(value), stock));
                        }
                      }} 
                      className="border-y border-gray-400 w-10 h-full text-center"/>
                    
                    <button type="button" onClick={handleButonPlus} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-r-sm rounded-l-none text-xs px-2 h-full focus:outline-none">
                      < FaPlus/>
                    </button>
                  </div>
                </div>

                {/* alert ketika qty > stock */}
                <Alert color="failure" icon={HiInformationCircle} className={`${qty === stock ? "inline" : "hidden"} p-2 `}>
                  <span className="font-medium text-xs lg:text-md">You've reached the maximum purchase quantity for this product.</span>
                </Alert>

                <p className={`text-rose-600 text-[9px] md:text-[12px] ${qty > stock ? "inline" : "hidden"}`}></p>
                <div className="flex gap-1 font-semibold">
                  <span>Total Belanja : Rp</span>
                  <span>{(price * qty).toLocaleString("id-ID")}</span>
                </div>
                <div className="">
                  <Button 
                    onClick={handleAdd} 
                    disabled={qty === "" || Number(qty) < 1 || Number(qty) > stock} 
                    color="green" size="md" 
                    className="w-full"
                  >
                    Masukan Keranjang
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

      </div>

    </div>
  );
}

export { ProductCard };
