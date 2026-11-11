import { Button } from "flowbite-react"

function HeroCard({title, desc, image}){
    return (
        <>
            <div href="#" className="grid place-items-center grid-cols-[6fr_4fr] bg-green-700 p-6 lg:py-12 rounded-b-xl w-full text-white ">
                <div className="md:p-4 leading-normal md:w-[80%]">
                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-heading md:text-xl lg:text-3xl">{title}</h5>
                    <p className="mb-2 text-[10px] md:text-base">{desc}</p>
                    <div>
                        <Button color="yellow" size="xs">
                            <span className="text-xs md:text-sm lg:text-base md:px-4 lg:px-5">Read more</span>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <img
                    className="object-contain max-h-50 md:max-h-70 lg:max-h-96 w-auto mx-auto"
                    src={image}
                    alt={title}
                />
                </div>
            </div>
        </>
    )
}






export {HeroCard}