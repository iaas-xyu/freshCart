import products from "../../src/data/productData.json";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function CartMobile({ cart = [], onUpdateQuantity, onHandleRemoveItem }) {

    const showAlert = (id) =>{
        const alert = document.getElementById(`alert-mobile-${id}`);
        if (!alert) return;
        alert.classList.remove("hidden");
        setTimeout(()=> {
        alert.classList.add("hidden")
        },2000)
    }

  return (
    <div className="grid gap-3">
        {cart.map((item) => {
            const productData = products.find((data) => data.id === item.id);
            return (
                <div key={item.id} className="border border-gray-200 rounded-xl px-7 pb-3 text-sm relative">
                    <p onClick={() => onHandleRemoveItem(item.id)} className="text-yellow-500 absolute right-3 top-2 cursor-pointer p-1"><FaXmark/></p>
                    <div className="flex items-center gap-3 border-b border-gray-200">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-contain"/>
                        <div>
                            <p>{item.name}</p>
                            <p className="text-gray-500 text-xs">{productData?.gramasi}</p>
                            <p className="text-xs">Rp {item.price.toLocaleString("id-ID")}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-3">
                        <div className="flex h-6">
                            <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none">
                            < FaMinus/>
                            </button>

                            <input 
                                type="text" 
                                value={item.quantity} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    
                                    // hanya menerima angka
                                    if (!/^\d*$/.test(value)) return;

                                    // cegah input kosong
                                    if (value === "") return;

                                    const newQty = Number(value)
                                    const minQty = Math.max(newQty, 1);
                                    const maxQty = Math.min(minQty, productData?.stock)

                                    onUpdateQuantity(item.id, maxQty)
                                }}  
                                className="border-y border-gray-400 w-10 h-full text-center"
                            />
                            
                            <button 
                                type="button" 
                                onClick={() => {
                                    if (item.quantity >= productData?.stock) {
                                        showAlert(item.id);
                                        return;
                                    }
                                    onUpdateQuantity(item.id, item.quantity + 1)
                                }} 
                                className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-r-sm rounded-l-none text-xs px-2 h-full focus:outline-none" 
                            >
                                < FaPlus/>
                            </button>
                        </div>
                        <div className="mb-2 font-semibold">
                            <p className="text-gray-500">Sub Total</p>
                            <p>Rp {(item.quantity*item.price).toLocaleString("id-ID")}</p>
                        </div>
                    </div>

                    {/* alert */}
                    <div id={`alert-mobile-${item.id}`} className="hidden">
                        <Alert color="failure" icon={HiInformationCircle} className="py-2">
                            <span className="font-medium text-xs lg:text-md">You've reached the maximum purchase quantity for this product.</span>
                        </Alert>
                    </div>
                </div>
            );
        })}
    </div>
  );
}

export default CartMobile;
