import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import products from '../src/data/productData.json'
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

function CartTab(cart){
    return(
        <div className="w-full min-w-0 overflow-x-auto">
        <Table className="">
          <colgroup>
            <col className="w-[5%]" />
            <col className="w-[35%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
          </colgroup>
          <TableHead>
            <TableRow className="rounded-3xl">
              <TableHeadCell className="bg-yellow-300 text-green-800 w-12 rounded-l-lg">
                <span className="sr-only">Edit</span>
              </TableHeadCell>
              <TableHeadCell className="bg-yellow-300 text-green-800">Product</TableHeadCell>
              <TableHeadCell className="bg-yellow-300 text-green-800">Price</TableHeadCell>
              <TableHeadCell className="bg-yellow-300 text-green-800">Quantity</TableHeadCell>
              <TableHeadCell className="bg-yellow-300 text-green-800 rounded-r-lg">Subtotal</TableHeadCell>
            </TableRow>
          </TableHead>
            {cart.map((item)=>{
              const productData = products.find((data) => data.id === item.id)
              return (
                <TableBody className="divide-y text-xs lg:text-sm">
                    <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800 grid-cols-[40%_20%_20%_20%]">
                      <TableCell className="w-12 whitespace-nowrap pr-2">
                        <a onClick={() => onHandleRemoveItem(item.id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          <FaXmark/>
                        </a>
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-2">
                        <div className="flex w-20 h-20 items-center gap-3">
                          <img src={item.image} alt=""  className="object-cover"/>
                          <div className="">
                            <p>{item.name}</p>
                            <p className="text-gray-500 text-xs">{productData?.gramasi}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>Rp {item.price.toLocaleString("id-ID")}</TableCell>
                      <TableCell className="w-min px-2">
                        <div className="flex h-6">
                          <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none">
                            < FaMinus/>
                          </button>
                            <input type="text" value={item.quantity} onChange={(e) => onUpdateQuantity(item.id, Math.max(1, Number(e.target.value)))}  className="border-y border-gray-400 w-10 h-full text-center"/>
                          <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-r-sm rounded-l-none text-xs px-2 h-full focus:outline-none">
                            < FaPlus/>
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</TableCell>
                    </TableRow>
                </TableBody>
              )
            })}
        </Table>
      </div>
    )
}

export default CartTab;