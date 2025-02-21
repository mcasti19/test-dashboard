// import { FaReact } from "react-icons/fa"
import { bebas } from "../ui/fonts"
import Image from "next/image"


export const Logo = () => {
    return (
        <>
            <div className={`${bebas.className} flex flex-row items-center leading-none text-white `}>
                {/* <FaReact className="h-20 w-20 rotate-[15deg]" /> */}
                <Image
                    alt="main logo"
                    src='/logo.png'
                    width={60}
                    height={60}
                    className="h-20 w-20 rotate-[15deg]" />
                <p className="text-[30px] ml-3">CastDev</p>
            </div>
        </>
    )
}

