import products from "../../src/data/productData.json";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

function CartMobile({ cart = [], onUpdateQuantity, onHandleRemoveItem }) {
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
                            <input type="text" value={item.quantity} onChange={(e) => onUpdateQuantity(item.id, Math.max(1, Number(e.target.value)))}  className="border-y border-gray-400 w-10 h-full text-center"/>
                            <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-r-sm rounded-l-none text-xs px-2 h-full focus:outline-none">
                            < FaPlus/>
                            </button>
                        </div>
                        <div className="mb-2 font-semibold">
                            <p className="text-gray-500">Sub Total</p>
                            <p>Rp {(item.quantity*item.price).toLocaleString("id-ID")}</p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  );
}

export default CartMobile;
