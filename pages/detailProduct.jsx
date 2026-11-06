import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { RatingAdvanced } from "flowbite-react";
import userReviews from "../src/data/userReviews.json"

import products from "../src/data/productData.json"
import productReview from "../src/data/productReview.json"
import '../src/index.css'
import ReviewCard from "../src/components/Review/review";

import { FaStar,FaStarHalfAlt} from "react-icons/fa";
import { FaHeart, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram   } from "react-icons/fa";

function DetailProduct(item){

    const {id} = useParams();

    const [quantity, setQuantity] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false)

    // cari product yang dikirim ada atau tidak di file json
    const product = products.find((item) => item.id === Number(id));
    if (!product){ // jika product tidak ada
        return <div>Product tidak di temukan!</div>
    }

    // handle Favorite
    function handleFavorite(){
        setIsFavorite(!isFavorite)
    }

    // menyaring product data product yang dipilih
    const currentProductId = product.id;

        // filter review khusus produk dengan id yang dipilih
        const currentProductReviews = productReview.filter(
            (item) => item.productId === currentProductId
        )

        // jumlah yang mereviews
        const totalReviews = currentProductReviews.length;

        // hitung rata rata rating
        const totalStarts = currentProductReviews.reduce((sum, item) => sum + item.rating, 0);
        const averageRating = totalReviews > 0 ? (totalStarts / totalReviews). toFixed(1) : "0.0";

        // hitung persentase per Bintang (proses bar)
        const getPercentage = (starCount) => {
            if (totalReviews === 0 ) return 0;
            const count = currentProductReviews.filter((item) => {
                if (starCount === 5){
                    return item.rating >= 5;
                }
                return (
                    item.rating >= starCount &&
                    item.rating < starCount +1
                )
            }).length;
            return Math.round((count / totalReviews) * 100);
        }

        // bintang yang terisi
        const startAverageRating = () => {
            return(
                [...Array(5)].map((_, index) => {
                const startValue = index + 1;

                if (averageRating >= startValue){
                    return (
                        <FaStar key={index} className="text-yellow-400"/>
                    )
                }
                if (averageRating >= startValue - 0.5) {
                    return (
                        <FaStarHalfAlt key={index} className="text-yellow-400" />
                    )
                }
                return (
                    <FaStar key={index} className="text-gray-300"/>
                )
                })
            )
        }
       
        
            // setiap review, cari testimonial berdasarkan IdUser
            const reviewTestimonial = currentProductReviews.map((review) => {
                const userReview = userReviews.find(
                    (item) => item.idUser === review.idUser
                );
                return{
                    ...review, userReview
                }
        
            })


    return(
        <>
            {/* Detail Product 1 */}
            <div className="grid md:grid-cols-[30%_70%] gap-4">
                <div className="shadow-md p-6 rounded-xl flex items-center">
                    <img src={product.image} alt="" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <p className="text-green-500 text-[13px] font-semibold">{product.category[0]}</p>
                    <p className="text-lg font-semibold">
                        {product.name}
                        <span className="ms-3 text-[10px] text-green-700 font-medium bg-green-200 px-2 py-1 rounded-full">{product.statusStock}</span>
                    </p>
                    {/* Harga */}
                    <div className=" flex gap-2 items-center">
                        <span className="text-sm font-semibold">
                            {new Intl.NumberFormat("id-ID", {
                                style : "currency",
                                currency: "IDR",
                                maximumFractionDigits:0
                            }).format(product.price)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            {new Intl.NumberFormat("id-ID", {
                                style : "currency",
                                currency: "IDR",
                                maximumFractionDigits:0
                            }).format(product.oldPrice)}
                        </span>
                    </div>

                    {/* Deskripsi */}
                    <div className="text-[12px] text-gray-600">
                        <p>{product.desc[0]}</p>
                    </div>

                    {/* Weight */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">Weight</p>
                        <div className=" flex gap-1">
                            <p className="text-[13px] border border-gray-200 hover:bg-green-500 hover:text-white px-3 py-1 w-fit rounded-full">500g</p>
                            <p className="text-[13px] border border-gray-200 hover:bg-green-500 hover:text-white px-3 py-1 w-fit rounded-full">1 kg</p>
                            <p className="text-[13px] border border-gray-200 hover:bg-green-500 hover:text-white px-3 py-1 w-fit rounded-full">2 kg</p>
                            <p className="text-[13px] border border-gray-200 hover:bg-green-500 hover:text-white px-3 py-1 w-fit rounded-full">3 kg</p>
                        </div>
                        <div className=" flex gap-2">
                            <div className="inline-flex items-center justify-center text-center border border-gray-300 rounded-lg overflow-hidden gap-5">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="border-r-2 border-gray-300 px-2"> - </button>
                                <span className="text-[10px]">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="border-l-2 border-gray-300 px-2"> + </button>
                            </div>
                            <Button size="xs" color="green" pill>Add To Cart</Button>
                            <Button size="xs" color="yellow" pill>Buy Now</Button>
                            <button onClick={handleFavorite} className="">
                                {isFavorite? (
                                    <FaHeart className="text-red-700" size={23} />
                                ):(
                                    <FaHeart className="text-red-300" size={18} />
                                )}
                            </button>
                        </div>

                        {/*  */}
                    </div>

                    <hr className="text-gray-300 my-1"/>
                    {/* Desc */}
                    <div className="text-[12px] text-gray-600 flex flex-col gap-2 justify-center">
                        <p> tags : {product?.category?.join(', ')}</p>
                        <div className="flex gap-2">
                            <p>Share :</p>
                            <div className=" flex gap-2 justify-center items-center text-[12px]">
                                <a className="p-1 bg-green-700 rounded-full text-white"><FaFacebookF /></a>
                                <a className="p-1 bg-green-700 rounded-full text-white"><FaTwitter /></a>
                                <a className="p-1 bg-green-700 rounded-full text-white"><FaPinterestP /></a>
                                <a className="p-1 bg-green-700 rounded-full text-white"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Descripsi Detail Product */}
            <div className="mt-15">
                <Tabs  aria-label="Tabs with icons" variant="underline" className={`flex justify-center-safe [&_[aria-selected=true]]:!text-green-600 [&_[aria-selected=true]]:!border-green-600`}>
                    {/* Description */}
                    <TabItem active title="Description">{product?.desc?.map((paragraph, index) =>(
                        <p key={index} className="mb-4 leading-relaxed  text-[14px] text-gray-600">{paragraph}</p>
                    ))}</TabItem>
                    {/* ADDITIONAL INFORMATION */}
                    <TabItem title="Additional Information">
                        <div className="overflow-x-auto">
                            <Table striped>
                                <TableHead>
                                    <tr >
                                        <TableHeadCell className="bg-yellow-300">Attribute</TableHeadCell>
                                        <TableHeadCell className="bg-yellow-300">Detail</TableHeadCell>
                                    </tr>
                                </TableHead>
                                <TableBody className="divide-y">
                                    <TableRow className="border-none bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Product Type</TableCell>
                                        <TableCell>{product.category[0]}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-none bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Location</TableCell>
                                        <TableCell>{product.lokasi}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-none bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Views</TableCell>
                                        <TableCell>{product.views}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-none bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Service</TableCell>
                                        <TableCell>{product?.service?.join(', ')}</TableCell>
                                    </TableRow>
                                    
                                </TableBody>
                            </Table>
                        </div>
                    </TabItem>

                    {/* Ratting */}
                    <TabItem title="Review">
                        {/* ratting */}
                        <div className="grid md:grid-cols-[30%_70%] me-10 pb-9 border-b border-b-gray-300">
                            <div className="m-auto">
                                <div className="flex items-end gap-2 text-xs mb-1">
                                    <p className="text-2xl font-semibold">{averageRating}</p>
                                    <p className="text-m">Out of 5</p>
                                </div>
                                <div className="flex text-[16px] gap-0.5 items-center mb-1">
                                    {startAverageRating()}
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({totalReviews} Review) </p>
                            </div>
                            <div className="rating-container sm:mt-4">
                                <RatingAdvanced percentFilled={getPercentage(5)} className="mb-4">
                                    5 star
                                </RatingAdvanced>
                                <RatingAdvanced percentFilled={getPercentage(4)} className="mb-4">
                                    4 star
                                </RatingAdvanced>
                                <RatingAdvanced percentFilled={getPercentage(3)} className="mb-4">
                                    3 star
                                </RatingAdvanced>
                                <RatingAdvanced percentFilled={getPercentage(2)} className="mb-4">
                                    2 star
                                </RatingAdvanced>
                                <RatingAdvanced percentFilled={getPercentage(1)}>1 star</RatingAdvanced>
                            </div>
                        </div>     

                        {/* ulasan */}
                        <div className="my-5">
                            <p className="text-md font-semibold">Review List</p>
                            <p className="text-xs text-gray-600">Showing 1-4 of 24 results</p>
                            <div className="my-7">
                                {reviewTestimonial.map((review,index) => (
                                    <ReviewCard
                                        avatar = {review.userReview?.avatar}
                                        name = {review.userReview?.name}
                                        jobTitle = {review.userReview?.jobTitle}
                                        comment={review.comment}
                                        rating={review.rating}
                                        images={review.images}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabItem>
                </Tabs>
            </div>
        </>
    )
}

export default DetailProduct;