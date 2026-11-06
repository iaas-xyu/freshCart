function CategoryCard({name, image, qty}){
    return(
        <div className="mx-auto text-center">
            <div className="bg-green-50 rounded-full p-5 px-auto text-center md:p-6">
                <img src={image} alt="" className="h-full w-full object-contain"/>
            </div>
            <p className="font-semibold text-sm mt-2">{name}</p>
            <p className="text-xs">{qty} Products</p>
        </div>
    )
}

export {CategoryCard}