import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import products from "../../src/data/productData.json";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Fragment } from "react";

function CartTab({ cart = [], onUpdateQuantity, onHandleRemoveItem }){

  // alert muncul 2 detik
  const showAlert = (id) => {
    const alert = document.getElementById(`alert-${id}`)
    if (!alert) return;
    alert.classList.remove("hidden");
    setTimeout(()=> {
    alert.classList.add("hidden")
    },2000)
  }

    return(
        <div className="w-full hidden lg:block min-w-0 overflow-x-auto">
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
                <TableHeadCell className="bg-yellow-300 text-green-800">
                  Product
                </TableHeadCell>
                <TableHeadCell className="bg-yellow-300 text-green-800">
                  Price
                </TableHeadCell>
                <TableHeadCell className="bg-yellow-300 text-green-800">
                  Quantity
                </TableHeadCell>
                <TableHeadCell className="bg-yellow-300 text-green-800 rounded-r-lg">
                  Subtotal
                </TableHeadCell>
              </TableRow>
            </TableHead>


            <TableBody className="divide-y text-xs lg:text-sm">
              {cart.map((item) => {
                // menyamakan id di cart dan di database
                const productData = products.find(
                  (data) => data.id === item.id,
                );
                return (
                    <Fragment key={item.id}>
                      {/* baris product */}
                      <TableRow key={item.id} className="bg-white border-b-0 dark:border-gray-700 dark:bg-gray-800 grid-cols-[40%_20%_20%_20%]">
                        <TableCell className="w-12 whitespace-nowrap pr-2">
                          <a
                            onClick={() => onHandleRemoveItem(item.id)}
                            className="font-medium text-green-600 hover:text-red-600 hover:font-bold dark:text-primary-500 p-2"
                          >
                            <FaXmark />
                          </a>
                        </TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-2">
                          <div className="flex w-20 h-20 items-center gap-3">
                            <img
                              src={item.image}
                              alt=""
                              className="object-cover"
                            />
                            <div className="">
                              <p>{item.name}</p>
                              <p className="text-gray-500 text-xs">
                                {productData?.gramasi}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          Rp {item.price.toLocaleString("id-ID")}
                        </TableCell>
                        <TableCell className="w-min px-2">
                          <div className="flex h-6">
                            <button
                              type="button"
                              onClick={() => {
                                if (item.quantity >= 1 ){
                                  onUpdateQuantity(item.id, item.quantity - 1)
                                } else {
                                  onHandleRemoveItem(item.id)
                                }
                              }

                              }
                              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none"
                            >
                              <FaMinus />
                            </button>

                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => {
                                const value = e.target.value;

                                // hanya menerima angka
                                if (!/^\d*$/.test(value)) return;

                                //  cegah input kosong
                                if (value === "") return;

                                const newQty = Number(value);

                                // Minimal quantity adalah 1
                                const minQty = Math.max(newQty, 1);

                                // Maksimal quantity sesuai stok
                                const finalQty = Math.min(minQty, productData?.stock);

                                onUpdateQuantity(item.id, finalQty);
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
                              <FaPlus />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">
                          Rp{" "}
                          {(item.price * item.quantity).toLocaleString("id-ID")}
                        </TableCell>
                      </TableRow>

                      {/* alert jika qty sudah melebihi stock */}
                      <TableRow className="hidden pb-4 border-b-0" id={`alert-${item.id}`}>
                        <TableCell colSpan={5} className="pt-0 pb-2">
                          <div className="">
                            <Alert color="failure" icon={HiInformationCircle} className="py-2">
                              <span className="font-medium text-xs lg:text-md">You've reached the maximum purchase quantity for this product.</span>
                            </Alert>
                          </div>
                        </TableCell>
                      </TableRow>
                    </Fragment>
                  );
                })}
            </TableBody>
          </Table>
        </div>
    )
}

export default CartTab;