import { FaStar,FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function TestimonialCard({name, jobTitle, comment, avatar, rating}){
    return(
        <>
            <figure className="mx-auto text-center">
                <svg
                    className="w-11 h-11 text-heading mb-4 mx-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                />
                </svg>
                <blockquote>
                    <p className="text-lg italic font-semibold tracking-tight text-gray-700">
                    "{comment}"
                    </p>
                </blockquote>
                <div className="flex gap-1 items-center justify-center mt-5">
                    {[...Array(5)].map((_, index) =>{
                        const starValue = index + 1

                        if (rating >= starValue){
                            return(
                                <FaStar key={index}
                                className="text-yellow-400"
                                />
                            )
                        }
                        if (rating >= starValue - 0.5) {
                            return(
                                <FaStarHalfAlt
                                    key={index}
                                    className="text-yellow-400"
                                />
                            )
                        }
                        return (
                            <FaRegStar
                                key={index}
                                className="text-yellow-400"
                            />
                        )
                        
                    })}
                    <p>{rating}</p>
                </div>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img
                    className="w-6 h-6 rounded-full"
                    src={avatar}
                    alt="profile picture"
                    />
                    <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
                        <cite className="pe-3 font-medium text-heading">{name}</cite>
                        <cite className="ps-3 text-sm text-body">{jobTitle}</cite>
                    </div>
                </figcaption>
            </figure>

        </>
    )
}

export default TestimonialCard