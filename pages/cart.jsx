import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { FaAnglesRight } from "react-icons/fa6";

import products from "../src/data/productData.json";
import CartMobile from "./cart/cart_mobile";
import "../src/index.css";

import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

function Cart({
  cart = [],
  onUpdateQuantity,
  onHandleRemoveItem,
  onHandleClear,
}) {
  console.log("Data cart di halaman Cart:", cart);

  // Order sumary
  const subTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const handlingFee = cart.length <= 0 ? 0 : 5000;
  const total = subTotal + handlingFee;
  const [modal, setModal] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(280px,3fr)] gap-4">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center text-center py-10">
          <p className="text-gray-500 mb-1">Your cart is empty</p>
          <Link
            to="/Shop"
            className="m-auto flex items-center gap-1 font-semibold text-green-400 text-center"
          >
            <p className="pb-1.5">Continue Shopping</p>
            <FaAnglesRight />
          </Link>
        </div>
      ) : (
        <div className="grid gap-3">
          <div className="grid gap-2">
            {/* Modal Clear All */}
            {cart.length > 0 && (
              <p
                onClick={() => setModal(true)}
                className="cursor-pointer text-base text-green-500 text-right pr-2 text"
              >
                Clear all
              </p>
            )}
            <Modal show={modal} size="md" onClose={() => setmodal(false)} popup>
              <ModalHeader />
              <ModalBody>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-yellow-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to remove all items from your cart?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      color="yellow"
                      onClick={() => {
                        onHandleClear();
                        setModal(false);
                      }}
                    >
                      Yes, I'm sure
                    </Button>
                    <Button color="green" onClick={() => setModal(false)}>
                      No, cancel
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            {/* Tab & Dekstop Mode  */}
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
                {cart.map((item) => {
                  const productData = products.find(
                    (data) => data.id === item.id,
                  );
                  return (
                    <TableBody className="divide-y text-xs lg:text-sm">
                      <TableRow
                        key={item.id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800 grid-cols-[40%_20%_20%_20%]"
                      >
                        <TableCell className="w-12 whitespace-nowrap pr-2">
                          <a
                            onClick={() => onHandleRemoveItem(item.id)}
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-l-sm rounded-r-none text-xs px-2 h-full focus:outline-none"
                            >
                              <FaMinus />
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) =>
                                onUpdateQuantity(
                                  item.id,
                                  Math.max(1, Number(e.target.value)),
                                )
                              }
                              className="border-y border-gray-400 w-10 h-full text-center"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
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
                    </TableBody>
                  );
                })}
              </Table>
            </div>
          </div>

          {/* Mobile Mode */}
          <div className="lg:hidden">
            <CartMobile
              cart={cart}
              onUpdateQuantity={onUpdateQuantity}
              onHandleRemoveItem={onHandleRemoveItem}
              onHandleClear={onHandleClear}
            />
          </div>

          {/* Order Summary */}
          <div className="border border-gray-200 rounded-xl p-4 text-sm grid gap-3 h-fit">
            <p className="border-b border-gray-200 pb-3 font-semibold ">
              Order Summary
            </p>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <p className="text-gray-400">Items ({cart.length})</p>
                <p className="">Rp {subTotal.toLocaleString("id-ID")}</p>
              </div>
              <div className="pb-3 grid gap-2">
                <p className="text-gray-700 font-semibold">Have a coupon ?</p>
                <div className="flex gap-2">
                  <TextInput
                    type="text"
                    sizing="sm"
                    placeholder="Enter coupon code"
                    className="coupon-input flex-1"
                  />
                  <Button color="green" size="sm">
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Shipping</p>
                <p className=""> Rp 0</p>
              </div>
              <div className="flex justify-between pb-3">
                <p className="text-gray-400">Handling Fee</p>
                <p className="">Rp {handlingFee.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-3 font-semibold ">
              <p className="text-gray-400">Total</p>
              <p className="text-center">Rp {total.toLocaleString("id-ID")}</p>
            </div>
            <Button
              color="green"
              size="xs"
              pill
              className="w-full md:w-auto font-semibold"
            >
              {" "}
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
