function ButtonPill({children, onClick}){
    return(
        <button onClick={onClick} className="rounded-full bg-green-600 px-2 md:px-4  py-1 md:py-2 text-white text-[11px] lg:text-base inline-flex items-center">
            {children}
        </button>
    )
}
export {ButtonPill}