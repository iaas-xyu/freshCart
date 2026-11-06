import { useState } from "react";
import { Modal, ModalBody } from "flowbite-react";
import { FaStar,FaStarHalfAlt} from "react-icons/fa";

function ReviewCard ({avatar, name, rating, comment, images, jobTitle}){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    }

    const startRating = () => {
        return (
            [...Array(5)].map((star, index) => {
                    const starValue = index + 1;
                    
                    if (rating >= starValue){
                        return (
                            <FaStar key={index} className="text-yellow-500" />
                        )
                    }
                    if (rating === starValue - 0.5){
                        return (
                            <FaStarHalfAlt key={index} className="text-yellow-500"/>
                        )
                    }
                    return (
                        <FaStar key={index} className="text-gray-300" />
                    )
            })
        )
    }


    return(
        <>
            <div className="border-b border-gray-200 mt-3">
                <div className="flex gap-5">
                    <img src={avatar} alt="" className="h-11 w-11 rounded-full border-none"/>
                    <div className="text-sm text-gray-900">
                        <p className="font-semibold">{name}</p>
                        <p className="text-[10px] font-light">{jobTitle}</p>
                    </div>
                </div>
                <div className="">
                    {/* rating review */}
                    <div className="pt-3 flex gap-3 items-center">
                        <p className="flex gap-1">{startRating(rating)}</p>
                        <p>{rating}</p>
                    </div>

                    <p className="mb-3">{comment}</p>

                    {/* image review */}
                    <div className="pb-5 flex flex-wrap gap-2">
                        {images?.map((item,index)=>(
                            <div key={index}>
                                <img className="size-40 rounded-2xl cursor-pointer object-cover" src={item}
                                    onClick={()=> openImage(item)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal show={isOpen} onClose={() => setIsOpen(false)} dismissible>
                <ModalBody className="p-2">
                    <img src={selectedImage} alt="Gambar membesar" className="w-full h-auto rounded-lg" />
                </ModalBody>
            </Modal>
        </>
    )
}

export default ReviewCard;