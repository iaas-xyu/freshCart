import { Dropdown, DropdownItem, Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";


function NavigationBar({cart = []}) {
  
  const totalCart = cart.length;


  return (
    <div className="fixed top-2 left-0 right-0 z-50 mx-auto w-[90%] max-w-7xl">
      <Navbar fluid rounded className="w-full rounded-xl bg-green-700 text-white shadow-lg">
        <NavbarBrand href="/">
          <img src={`${import.meta.env.BASE_URL}logo.png`} className="h-12 pr-2 py-2 object-contain" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold ">Fresh Cart</span>
        </NavbarBrand>
        <div className="flex items-center gap-2 md:order-2 shrink-0 mr-6">
          {/* Cart */}
          <Link to="/Cart">
            <div className="text-2xl">
              <BsCart2 />
              <div className="absolute top-4 right-19 md:right-7 text-xs bg-red-600 py-0.5 px-2 rounded-full">{totalCart}</div>
            </div>
          </Link>
          <NavbarToggle className="text-white hover:text-gray-100 hover:bg-transparent focus:border-0 focus:ring-0 focus:outline-none"/>
        </div>
        <NavbarCollapse className="items-center ">
          <NavbarLink as={Link} to="/" className="text-white whitespace-nowrap hover:bg-transparent [&:hover]:text-white hover:font-semibold focus:bg-transparent focus:font-semibold">Home</NavbarLink>
          <NavbarLink as={Link} to="/Shop" className="text-white whitespace-nowrap hover:bg-transparent [&:hover]:text-white hover:font-semibold focus:bg-transparent focus:font-semibold" >Shop</NavbarLink>
          <NavbarLink as={Link} to="/About" className="text-white whitespace-nowrap hover:bg-transparent [&:hover]:text-white hover:font-semibold focus:bg-transparent focus:font-semibold" >About</NavbarLink>
          <NavbarLink as={Link} to="/Service" className="text-white whitespace-nowrap hover:bg-transparent [&:hover]:text-white hover:font-semibold focus:bg-transparent focus:font-semibold">Services</NavbarLink>
          <NavbarLink as={Link} to="/Contact" className="text-white whitespace-nowrap hover:bg-transparent [&:hover]:text-white hover:font-semibold focus:bg-transparent focus:font-semibold">Contact</NavbarLink>
          <div className="min-w-28 py-1 md:py-0 px-2.5 md:px-0">
            <Dropdown label="Categories" inline className="shrink-0 whitespace-nowrap">
              <DropdownItem >Overview</DropdownItem>
              <DropdownItem >Billing</DropdownItem>
              <DropdownItem >Rewards</DropdownItem>
            </Dropdown>
          </div>
        </NavbarCollapse>
        
      </Navbar>
    </div>
  );
}

export default NavigationBar;