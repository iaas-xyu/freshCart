import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {
  const images = [
    `${import.meta.env.BASE_URL}footer/user1.png`,
    `${import.meta.env.BASE_URL}footer/user2.png`,
    `${import.meta.env.BASE_URL}footer/user3.png`,
    `${import.meta.env.BASE_URL}footer/user4.png`,
    `${import.meta.env.BASE_URL}footer/user5.png`,
  ];
  
  return (
    <div className="mt-6">
      {/* Services / Features Bar */}
      <div className="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-3 md:justify-items-stretch mb-5">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}footer/box.png`}
            alt=""
            className="w-10 md:w-14"
          />
          <div className="">
            <p className="font-semibold text-[12px] md:text-sm text-gray-800">Free Shipping</p>
            <p className="font-semibold text-[9px] md:text-xs text-gray-600">
              Free Shipping for order above Rp 50.000
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <img
            src={`${import.meta.env.BASE_URL}footer/walet.png`}
            alt=""
            className="w-10 md:w-14"
          />
          <div className="">
            <p className="font-semibold text-[12px] md:text-sm text-gray-800">Free Shipping</p>
            <p className="font-semibold text-[9px] md:text-xs text-gray-600">
              Free Shipping for order above Rp 50.000
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}footer/suport.png`}
            alt=""
            className="w-10 md:w-14"
          />
          <div className="">
            <p className="font-semibold text-[12px] md:text-sm text-gray-800">Free Shipping</p>
            <p className="font-semibold text-[9px] md:text-xs text-gray-600">
              Free Shipping for order above Rp 50.000
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery Grid / Image Mosaic */}
      <div className="hidden md:grid md:grid-cols-5 gap-0 my-5 overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="aspect-square w-full overflow-hidden">
          <img
            src={src}
            alt={`Customer showcase ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>

      <div style={{backgroundImage: `url(${import.meta.env.BASE_URL}footer/background.png)`,}} className="bg-cover bg-center rounded-2xl flex flex-col items-center pt-5 lg:pt-20">
        {/* Newsletter Subscription Section */} 
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-7 px-8">
          <p className="font-semibold text-xs lg:text-lg text-gray-700">Our Newsletter</p>
          <p className="font-semibold text-base md:text-xl lg:text-3xl text-gray-900 text-center">
            Subscribe to Our Newsletter to Get{" "}
            <span className="text-green-700">Updates on Our Latest Offers</span>
          </p>
          <p className="text-xs font-semibold text-gray-700">
            get 25% off on your first order just by subscribing to our
            newsletter
          </p>
          <form action="" className="w-[85%] md:w-[55%]">
            <div className="flex gap-2">
              <input
                type="text"
                id="first_name"
                className="bg-white text-heading text-[11px] lg:text-sm rounded-full w-full focus:ring-brand focus:border-brand block pe-7 ps-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Enter Email Address"
              />
              <button
                type="button"
                className="text-green-700 font-semibold bg-amber-400 rounded-full hover:bg-amber-500 focus:ring-2 focus:ring-amber-300 shadow-xs leading-5 text-[11px] lg:text-sm px-4 py-2.5 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {/* Main Footer */}
        <div className="bg-green-700 text-white h-fit w-[97%] mx-5 my-4 rounded-xl p-6 md:p-10">
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-7">
            <div className="h-fit">
              <div className="flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt=""
                  className="w-9 pr-2"
                />
                <p className="text-md font-semibold">Fresh Cart</p>
              </div>
              <p className="text-[11px] md:text-xs ">
                Fresh Choices, Better Living. Explore a wide range of quality
                groceries and everyday essentials, carefully selected to bring
                freshness, convenience, and happiness to every home.
              </p>

              {/* social media */}
              <div className="flex justify-start gap-3 mt-2 me-7 text-xs md:text-lg">
                <a href="" className="p-2 bg-white/10 rounded-full ">
                  <FaFacebook />
                </a>
                <a href="" className="p-2 bg-white/10 rounded-full ">
                  <FaSquareXTwitter />
                </a>
                <a href="" className="p-2 bg-white/10 rounded-full ">
                  <FaInstagram />
                </a>
                <a href="" className="p-2 bg-white/10 rounded-full ">
                  <FaYoutube />
                </a>
                <a href="" className="p-2 bg-white/10 rounded-full ">
                  <FaPinterest />
                </a>
              </div>
            </div>

            {/* info detail */}
            <div className="hidden md:grid grid-cols-4 gap-2 md:gap-4">
              <div className="grid md:grid-rows-5 text-xs">
                <p className="font-semibold text-[11px] md:text-sm mb-1 ">Company</p>
                <p className="text-[9px] md:text-xs">About us</p>
                <p className="text-[9px] md:text-xs">Blog</p>
                <p className="text-[9px] md:text-xs">Career</p>
              </div>
              <div className="grid grid-rows-5 text-xs">
                <p className="font-semibold text-[11px] md:text-sm mb-1">Customer Services</p>
                <p className="text-[9px] md:text-xs">My Account</p>
                <p className="text-[9px] md:text-xs">Track Your Order</p>
                <p className="text-[9px] md:text-xs">Return</p>
                <p className="text-[9px] md:text-xs">FAQ</p>
              </div>
              <div className="grid grid-rows-5 text-xs">
                <p className="font-semibold text-[11px] md:text-sm mb-1">Our Information</p>
                <p className="text-[9px] md:text-xs">Our Privacy</p>
                <p className="text-[9px] md:text-xs">User Terms & Condition</p>
                <p className="text-[9px] md:text-xs">Return Policy</p>
              </div>
              <div className="grid grid-rows-5 text-xs">
                <p className="font-semibold text-[11px] md:text-sm mb-1">Contact Info</p>
                <p className="text-[9px] md:text-xs">+0123-456-778</p>
                <p className="text-[9px] md:text-xs">Freshcart@gmail.com</p>
              </div>
            </div>
          </div>
          <p className="w-full text-[9px] text-center mt-5 pt-4 border-t border-green-600">
            © 2026 Fresh Cart. Designed & Developed by Imroatus Ayu Sholikhah.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
