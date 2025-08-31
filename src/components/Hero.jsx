import { ArrowUP } from "../assets/Icons";
import { Button } from "./commons/Button";

export const Hero = () => (
    <div className="w-full h-213 z-10 shadow-[0px_16px_80px_0px_#00000066] relative flex justify-center rounded-b-[30px] bg-[#121212] text-white">
        <div className="absolute flex flex-col items-center gap-8 top-[331px]">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-[48px] font-medium">Integrated <span className="font-bold">Solutions</span> for a Dynamic World</p>
                <p className="lg:w-[812px] text-center">We are a pioneering parent company dedicated to elevating the modern experience through exceptional housing, seamless payment services, and groundbreaking innovation. Our integrated portfolio empowers individuals and businesses to thrive, crafting solutions that are efficient, secure, and built for a brighter, more connected future.</p>
            </div>

            <div className="rounded-[30px] border-[0.2px] items-center flex gap-10 pr-[23px]">
                 <Button text={"Contact Us"} className={"bg-white text-[#000] py-[10px] px-[35px] font-bold"}/>
                 <div className="flex items-center gap-2 font-bold">
                    <p>Explore Our Ecosystem</p>
                    <ArrowUP/>
                 </div>
            </div>
           
        </div>
    </div>
)