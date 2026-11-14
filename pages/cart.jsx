import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";

import CartMobile from "./cart/cart_mobile";
import CartTab from "./cart/cart_Tab"
import "../src/index.css";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaAnglesRight} from "react-icons/fa6";

function Cart({ cart = [], onUpdateQuantity, onHandleRemoveItem, onHandleClear,}) {
  // Order sumary
  const subTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const handlingFee = cart.length <= 0 ? 0 : 5000;
  const total = subTotal + handlingFee;
  const [modal, setModal] = useState(false);

  return (
    <div>
      {cart.length === 0 ? (
          // kondisi jika isi cart kosong
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
          // jika cart ada isi / daftar isi
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6">
            <div className="grid gap-2 h-fit">
              {/* Modal Clear All */}
              <div className="">
                  {cart.length > 0 && (
                  <p onClick={() => setModal(true)} className="cursor-pointer text-base text-green-500 text-right pr-2 text">Clear all</p>
                )}
                <Modal show={modal} size="md" onClose={() => setModal(false)} popup>
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
              </div>

              {/* Tab & Dekstop Mode  */}
              <div className="">
                <CartTab 
                  cart={cart}
                  onUpdateQuantity={onUpdateQuantity}
                  onHandleRemoveItem={onHandleRemoveItem}
                  onHandleClear={onHandleClear}
                />
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
        )
      }
    </div>
  );
}

export default Cart;
