import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Halaman404 (){
    return(
        <div className="flex flex-col items-center justify-center bg-white p-4 font-sans text-center">
            <h1 className="text-[120px] md:text-[180px] font-extrabold tracking-widest leading-none bg-[url('/fruits.jpg')] bg-cover bg-center] bg-clip-text text-transparent select-none filter drop-shadow-md">404</h1>
            <div className="flex gap-1 text-[20px] md:text-[37px] font-semibold">
                <h2 className="">Oops!</h2>
                <h2 className="text-green-600 ">Page not Found</h2>
            </div>
            <div className="max-w-70 mb-15">
                <p >The page you are looking for cannot be found. take a break before trying again</p>
            </div>

            <Button as={Link} to="/" color="green" pill> Go To Home Page</Button>
        </div>
    )
}

export default Halaman404;