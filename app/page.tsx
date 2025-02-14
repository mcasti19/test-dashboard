import { BsArrowRight } from "react-icons/bs";
import { Header } from "./components";
import { bebas } from "./ui/fonts";
import Image from "next/image";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <div className="flex grow flex-col mt-4 mx-auto w-4/5 md:flex-row">

                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p className={`${bebas.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Welcome to my Dashboard</strong> Tutorial Next JS
                    </p>
                    <a href="/dashboard" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                        <span>Login</span> <BsArrowRight />
                    </a>
                </div>

                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28">
                    {/* <img src="/hero-desktop.png" alt="ScreenShot Dashboard" width={1000} height={700} className="hidden md:block" /> */}
                    <Image
                        src="/hero-desktop.png"
                        alt={"ScreenShot Dashboard"}
                        width={1000}
                        height={700}
                        className="hidden md:block"
                    />
                    <Image
                        src="/hero-mobile.png"
                        alt={"ScreenShot Dashboard"}
                        width={560}
                        height={620}
                        className=" md:hidden"
                    />
                </div>
            </div>

        </main>
    )
}

export default Home;














































// import { bebas } from "./ui/fonts";

// import style from '@/app/ui/home.module.css'; //* Para trabajar css con modulos
// const Home = () => {
//     return (
//         <div>
//             <h1 className={`${bebas.className} ${style.text}`}>Comenzando la App!!</h1>
//             {/* <h1 className={style.text}>Comenzando la App!!</h1> con Modulos de css*/}
//             <p className="p-10 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate, iusto eius placeat expedita porro. Numquam aperiam id porro fugit, aliquam officia magnam, eaque quisquam, tempore mollitia maiores unde delectus.</p>
//         </div>
//     )
// }
// export default Home;