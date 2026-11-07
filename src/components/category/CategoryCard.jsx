function CategoryCard({ name, image, qty }) {
  return (
    <div className="w-full text-center">
      {/* Image Container */}
      <div className="mx-auto aspect-square w-full max-w-24 sm:max-w-28 lg:max-w-32 overflow-hidden rounded-full bg-green-50 p-4 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Category Information */}
      <p className="font-semibold text-sm mt-2 truncate">
        {name}
      </p>
      <p className="text-xs text-gray-500">
        {qty} Products
      </p>
    </div>
  );
}

export { CategoryCard };