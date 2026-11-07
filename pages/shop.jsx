"use client";

import { useState } from "react";
import { Pagination } from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper/modules";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";
import { Label, Radio } from "flowbite-react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { ProductCard } from "../src/components/product/ProductCard";
import productData from "../src/data/productData.json"
import filterData from "../src/data/filterData.json"    


export function Component() {
    const [openModal, setOpenModal] = useState(true);
    const [modalSize, setModalSize] = useState("md");
    }
function Shop({onAddToCart}){
    const [selectedCategory, setSelectedCategory] = useState("");
    const minPrice = Math.min(...productData.map((item) => item.price))
    const maxPrice = Math.max(...productData.map((item) => item.price))
    const [price, setPrice] = useState(minPrice);
    const [openModal, setOpenModal] = useState(false);
    const [modalSize, setModalSize] = useState("md");
    const [sort, setSort] = useState("recomended");
    const [openFilter, setOpenFilter] = useState(false);
    
    // handle function modal => tempFilter menyimpan pilihan sebelum filter di terapkan
    const [tempFilter, setTempFilter] = useState({
        delivery:[],
        location:[],
        service: [],
        statusStock:[],
        discount:[]
    })


    const handleFilter = (type, value) => {
        if (type === "delivery"){
            setTempFilter(prev => ({
                ...prev,delivery: prev.delivery.includes(value)
                ? prev.delivery.filter(item => item !== value)
                : [...prev.delivery, value]
            }))
        }
        if (type === "location"){
            setTempFilter(prev => ({
                ...prev,location:prev.location.includes(value)
                ? prev.location.filter(item => item !== value)
                : [...prev.location, value]
            }))
        }
        if (type === "service"){
            setTempFilter(prev => ({
                ...prev,service:prev.service.includes(value)
                ? prev.service.filter(item => item !== value)
                : [...prev.service, value]
            }))
        }
        if (type === "statusStock"){
            setTempFilter(prev => ({ // prev = parameter yang bisa dibuat sendiri prev mendevinisikan data lama dan prev namanya bisa di ubah menjadi datalama karna parameter
                ...prev,statusStock:prev.statusStock.includes(value)
                ?prev.statusStock.filter(item => item !== value)
                : [...prev.statusStock, value]
            }))
        }
        if (type === "discount"){
            setTempFilter(prev =>({
                ...prev,discount:prev.discount.includes(value)
                ? prev.discount.filter(item => item !== value)
                : [...prev.discount, value]
            }))
        }
    }

    // filter Product yang akan tampil
    const [selectedDelivery, setSelectedDelivery] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedService, setSelecteService] = useState([]);
    const [selectedStatusStock, setSelectedStatusStock] = useState([]);
    const [selectedDiscount, setSelectedDiscount] = useState([]);

    const filteredProducts = productData.filter(product => {
        // filter pengiriman
        const matchDelivery = selectedDelivery.length === 0 || selectedDelivery.some(delivery =>
            product.pengiriman.includes(delivery)
        );
        // filter Lokasi
        const matchLocation = selectedLocation.length === 0 || selectedLocation.some(location =>
            product.lokasi.includes(location)
        );
        // filter Gratis Ongkir
        const matchService =  selectedService.length === 0 || selectedService.some(service => 
            product.service.includes(service)
        ) 
        // Filter Status Stock
        const matchStatusStock = selectedStatusStock.length === 0 || selectedStatusStock.some(statusStock =>
            product.statusStock.includes(statusStock)
        )
        // Filter Discount 50%
        const matchDiscount50 = selectedDiscount.length === 0 || selectedDiscount.some(discount =>
            product.discount.includes(discount)
        )
        return (
            matchDelivery &&
            matchLocation &&
            matchService &&
            matchStatusStock &&
            matchDiscount50
        )
    })


    // handle Filter Slider
        const handleSliderFilter = (type, value) => {
            if (type === "delivery"){
                setSelectedDelivery(prev => prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
                )
                setTempFilter(prev => ({
                    ...prev, delivery: prev.delivery.includes(value)
                    ? prev.delivery.filter(item => item !== value)
                    : [...prev.delivery, value]
                }))
        
            }
            if (type === "location"){
                setSelectedLocation(prev => prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
                )
                setTempFilter (prev => ({
                    ...prev, location: prev.location.includes(value)
                    ? prev.delivery.filter(item => item !== value)
                    : [...prev.location, value]
                }))
            }
            if (type === "statusStock"){
                setSelectedStatusStock(prev => prev.includes(value)
                ?prev.filter(item => item !== value)
                : [...prev, value]
                )
                setTempFilter(prev => ({
                    ...prev, statusStock: prev.statusStock.includes(value)
                    ? prev.statusStock.filter(item => item !== value)
                    : [...prev.statusStock, value]
                }))
            }
            if (type === "discount"){
                setSelectedDiscount(prev => prev.includes(value)
                ?prev.filter(item => item !== value)
                : [...prev, value]
                )
                setTempFilter(prev => ({
                    ...prev, discount: prev.discount.includes(value)
                    ? prev.discount.filter(item => item !== value)
                    : [... prev.discount, value]
                }))
            }
            if (type === "service"){
                setSelecteService(prev => prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
                )
                setTempFilter(prev => ({
                    ...prev, service: prev.service.includes(value)
                    ? prev.service.filter(item => item !== value)
                    : [...prev.service, value]
                }))
            }
        }
    
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage=50;
    const totalPages = Math.max(1,Math.ceil(filteredProducts.length/productPerPage));
    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex)
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return(
        <div className="">
            <div className="grid gap-5">
                {/* Filter */}
                <div className="overflow-hidden flex gap-2">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView="auto"
                        modules={[FreeMode]}
                        freeMode={true}
                        grabCursor={true}
                        touchStartPreventDefault={false}
                        >
                        {/* Filter Swiper */} 
                        {filterData.flatMap(group => 
                            group.options
                            .filter(option => option.showIn.includes("slider"))
                            .map((option => {
                                const isSelected = group.type === "delivery"
                                ? selectedDelivery.includes(option.value)
                                : group.type === "location"
                                ? selectedLocation.includes(option.value)
                                : group.type === "statusStock"
                                ? selectedStatusStock.includes(option.value)
                                : group.type === "discount"
                                ? selectedDiscount.includes(option.value)
                                : group.type === "service"
                                ? selectedService.includes(option.value)
                                : false;
                                return(
                                    <SwiperSlide style={{ width: "fit-content" }} key={`${group.type}-${option.value}`}>
                                        <Button 
                                            onClick={() => handleSliderFilter(group.type, option.value)}
                                            color="light"
                                            pill
                                            className={`focus:ring-0 focus:outline-none
                                                ${isSelected
                                                    ? "bg-green-600 text-white hover:bg-green-600 hover:text-white"
                                                    : "bg-white text-gray-700 hover:bg-white hover:text-gray-700"
                                                }
                                                `}
                                        >{option.label}
                                        </Button>
                                    </SwiperSlide>
                                )
                            }))
                        )}
                    </Swiper>

                    {/* filter popup 1 */}
                    <div className="">
                        {/* button */}
                        <div className="flex flex-wrap ms-4">
                            <Button pill color="light" onClick={() => setOpenModal(true)}><HiOutlineSwitchVertical /></Button>
                        </div>
                        {/* modal */}
                        <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
                            <div className="absolute right-0 top-0 m-2">
                                <Button pill className="w-fit border-none" color="alternative" onClick={() => setOpenModal(false)}>
                                    <IoCloseOutline className="text-lg"/>
                                </Button>
                            </div>
                            <ModalBody>
                                <p className="mb-4 font-semibold text-lg">Filter</p>
                                <div className="flex max-w-md flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Radio id="united-state" name="countries" value="USA" defaultChecked />
                                        <Label htmlFor="united-state">Ulasan Terbaik</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="germany" name="countries" value="Germany" />
                                        <Label htmlFor="germany">Terbaru</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="spain" name="countries" value="Spain" />
                                        <Label htmlFor="spain">Harga Tertinggi</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="uk" name="countries" value="United Kingdom" />
                                        <Label htmlFor="uk">Harga Terendah</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="uk" name="countries" value="United Kingdom" />
                                        <Label htmlFor="uk">Terlaris</Label>
                                    </div>
                                    
                                </div>
                                <div className="mt-3 ">
                                    <Button className="w-full" color="green" onClick={() => setOpenModal(false)}>I accept</Button>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>

                    {/* filter popup 2 */}
                    <div className="">
                        {/* button */}
                        <div className="flex flex-wrap ms-1">
                            <Button pill color="light" onClick={() => setOpenFilter(true)}><HiOutlineAdjustmentsHorizontal /></Button>
                        </div>
                        {/* modal */}
                        <Modal show={openFilter} size={modalSize} onClose={() => setOpenFilter(false)}>
                            <div className="absolute right-0 top-0 m-2">
                                <Button pill className="w-fit border-none" color="alternative" onClick={() => setOpenFilter(false)}>
                                    <IoCloseOutline className="text-lg"/>
                                </Button>
                            </div>
                            <ModalBody>
                                <p className="mb-4 font-semibold text-lg">Filter</p>
                                <div className="flex max-w-md flex-col gap-4">
                                    {filterData.map((group) => {
                                        const modalOptions = group.options.filter(
                                            option => option.showIn.includes("modal")
                                        )
                                        if (modalOptions.length === 0){
                                            return null;
                                        }
                                        return(   
                                            <div key={group.title} >
                                                <h2 className="font-semibold mb-3">{group.title}</h2>
                                                <div className="flex flex-wrap gap-2">
                                                    {group.options
                                                    .filter(option => option.showIn.includes("modal"))
                                                    .map(option =>{
                                                        // warna button modal ketika di klik
                                                        const isSelected = group.type === "delivery"
                                                        ? tempFilter.delivery.includes(option.value)
                                                        : group.type === "location"
                                                        ? tempFilter.location.includes(option.value)
                                                        : group.type === "statusStock"
                                                        ? tempFilter.statusStock.includes(option.value)
                                                        : group.type === "service"
                                                        ? tempFilter.service.includes(option.value)
                                                        :false;
                                                        
                                                        return(
                                                            <Button
                                                                color="light"
                                                                pill
                                                                key={option.value}
                                                                onClick={() => handleFilter(group.type, option.value)}
                                                                className={`focus:ring-0 focus:outline-none
                                                                    ${
                                                                        isSelected
                                                                            ? "bg-green-600 text-white hover:bg-green-600 hover:text-white"
                                                                            : "bg-white text-gray-700 hover:bg-white hover:text-gray-700"
                                                                    }
                                                                `}
                                                            >
                                                                {option.label}
                                                            </Button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="mt-3 ">
                                    <Button 
                                        className="w-full" 
                                        color="green" 
                                        onClick={() => {
                                            setSelectedDelivery(tempFilter.delivery)
                                            setSelectedLocation(tempFilter.location)
                                            setSelecteService(tempFilter.service)
                                            setSelectedStatusStock(tempFilter.statusStock)
                                            setOpenFilter(false);
                                        }
                                        }
                                        >I accept</Button>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>

                {/* card Product */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                    {currentProducts.map((item)=>(
                        <ProductCard onAddToCart={onAddToCart}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            category={item.category[0]}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            discount={item.discount}
                            rating={item.rating}
                            image={item.image}
                            statusStock={item.statusStock}
                            stock = {item.stock}
                        />
                    ))}
                </div>
            </div>
            <div className="flex overflow-x-auto sm:justify-center mt-8">
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={onPageChange} />
            </div>
        </div>
    )
}

export default Shop;