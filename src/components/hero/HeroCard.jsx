function HeroCard({title, desc, image}){
    return (
        <>
            <div href="#" className="flex items-center justify-center bg-green-700 p-6 rounded-b-xl w-full text-white md:flex-row md:p-10">
                <div className="md:p-4 leading-normal mr-8 md:w-1/2">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-heading md:text-2xl lg:text-3xl">{title}</h5>
                    <p className="mb-6 text-sm md:text-base">{desc}</p>
                    <div>
                        <button type="button" className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Read more
                            <svg
                                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <img
                    className="object-cover md:h-auto w-[40%] mb-4 md:mb-0"
                    src={image}
                    alt={title}
                />
            </div>
        </>
    )
}






export {HeroCard}