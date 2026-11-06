import { Carousel } from "flowbite-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CategoryCard } from "../src/components/category/CategoryCard";
import { HeroCard } from "../src/components/hero/HeroCard";
import { PromoCard, PromoSesionCard } from "../src/components/promo/PromoCard";
import { ProductCard } from "../src/components/product/ProductCard";
import DOTDCard from "../src/components/promo/DealOfTheDay";
import TestimonialCard from "../src/components/testimonials/Testimonial.jsx";
import FaqAccordion from "../src/components/faq/FAQ";

import carouselData from "../src/data/carouselData.json";
import categoryData from "../src/data/categoryData.json";
import promoData from "../src/data/promoData.json";
import productData from "../src/data/productData.json";
import promoSesionData from "../src/data/promoSesionData.json";
import testimonialData from "../src/data/testimonialData.json";
import faqData from "../src/data/faqData.json";

// icon
import { GoArrowRight } from "react-icons/go";

function Home({ onAddToCart }) {
  const products = [];
  return (
    <>
      {/* HERO Carousel */}
      <div className="overflow-hidden w-full">
        <Carousel
          leftControl={<FiChevronLeft className="text-3xl text-white" />}
          rightControl={<FiChevronRight className="text-3xl text-white" />}
        />
        <Carousel>
          {carouselData.map((item) => (
            <HeroCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </Carousel>
      </div>

      {/* Category Slider */}
      <div className="text-center mt-6 ">
        <div className="mb-4">
          <p className="text-sm">categories</p>
          <div className="text-xl font-semibold">
            <span>Fratured</span>
            <span className="text-green-500 pl-0.5">Categories</span>
          </div>
        </div>
        <div className="w-full">
          <Swiper
            id="category-swiper"
            modules={[Autoplay]}
            slidesPerView={4} // semua ukuran layar akan menampilkan 3 slide
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {categoryData.map((item) => (
              <SwiperSlide key={item.id}>
                <CategoryCard
                  image={item.image}
                  name={item.name}
                  qty={item.qty}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Promo Card */}
      <div className="grid items-stretch gap-5 grid-cols-1 mt-6 h-80 md:grid-cols-2 md:h-50">
        {promoData.map((item) => (
          <PromoCard
            className="h-full"
            key={item.id}
            discount={item.discount}
            title={item.title}
            desc={item.desc}
            buttonText={item.buttonText}
            image={item.image}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      {/* Featured Product */}
      <div className="mt-6 bg-gray-100 p-5 py-10 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <p>Products</p>
            <span className="text-lg font-bold">
              Featured <span className="text-green-700">Products</span>
            </span>
          </div>
          <button className="rounded-full bg-green-600 px-4 py-2 text-white text-xs inline-flex items-center gap-2">
            View All Products <GoArrowRight />
          </button>
        </div>
        <div className="">
          <Swiper
            id="featured-swiper"
            modules={[Autoplay]}
            slidesPerView={3} // semua ukuran layar akan menampilkan 3 slide
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {productData
              .filter((item) => item.featured === true)
              .slice(0, 5)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard
                    {...item}
                    product={item}
                    onAddToCart={onAddToCart}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* Summer Discount */}
      <div className="mt-6">
        {promoSesionData.map((item) => (
          <PromoSesionCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            buttonText={item.buttonText}
            imageCenter={item.imageCenter}
            imageLeft={item.imageLeft}
            imageRight={item.imageRight}
          />
        ))}
      </div>

      {/* Deals Of The Day */}
      <div className="mt-9">
        <div className="flex justify-between items-center mb-2">
          <div className="">
            <p className="text-base font-semibold text-gray-600">Today Deals</p>
            <p className="text-green-600 text-3xl font-bold">
              Deals <span className="text-gray-700">of the Day</span>
            </p>
          </div>
          <div className="w-[40vw] text-xs text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              architecto sunt exercitationem odio um laudantium?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productData
            .filter((item) => item.deals === true)
            .map((item) => (
              <DOTDCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
                price={item.price}
                oldPrice={item.oldPrice}
                rating={item.rating}
                desc={item.desc}
                discount={item.discount}
                onAddToCart={onAddToCart}
              />
            ))}
        </div>
      </div>

      {/* Best Seller Product */}
      <div className="mt-6 bg-gray-100 p-5 py-10 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <p className="text-sm font-semibold text-gray-600">Best Seller</p>
            <span className="text-lg font-bold md:text-xl">
              <span className="text-green-700">Best Seller </span> Products
            </span>
          </div>
          <button className="rounded-full bg-green-600 px-4 py-2 text-white text-xs inline-flex items-center gap-2">
            View All Products <GoArrowRight />
          </button>
        </div>
        <div className="">
          <Swiper
            id="featured-swiper"
            modules={[Autoplay]}
            slidesPerView={3} // semua ukuran layar akan menampilkan 3 slide
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {productData
              .filter((item) => item.totalSold >= 1000 && item.rating > 4.5)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard
                    {...item}
                    product={item}
                    onAddToCart={onAddToCart}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-6 mx-3">
        <div className="text-center">
          <p className="font-semibold text-gray-600 text-sm">Testiomials</p>
          <p className="text-xl font-semibold text-gray-700">
            Testimonials From
          </p>
          <p className="text-xl font-semibold text-green-700">
            Our Loyal Customers
          </p>
        </div>
        <div className="">
          <Carousel
            leftControl={<FiChevronLeft className="text-3xl" />}
            rightControl={<FiChevronRight className="text-3xl" />}
          />
          <Carousel>
            {testimonialData.map((item) => (
              <TestimonialCard
                id={item.id}
                name={item.name}
                rating={item.rating}
                jobTitle={item.jobTitle}
                comment={item.comment}
                avatar={item.avatar}
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6 text-center">
        <div className="mb-4">
          <p className="text-sm">Need Help?</p>
          <div className="text-xl font-semibold">
            <span>Frequently</span>
            <span className="text-green-500 pl-0.5">Asked Questions</span>
          </div>
        </div>
        <div className="space-y-2">
          {faqData.map((item) => (
            <FaqAccordion
              key={item.id}
              className=""
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
