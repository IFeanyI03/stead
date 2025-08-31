import { SteadLogo } from "../assets/Icons";
import { Button } from "./commons/Button";

export const Header = () => (
   <div className="flex z-50 lg:w-[92.03%] top-[50px] absolute items-center mx-auto justify-between text-white w-full h-10">
    <SteadLogo/>

    <div className="hidden lg:flex items-center gap-10">
        <a href="">Home</a>
        <a href="">Ecosystem</a>
        <a href="">Projects</a>
        <a href="">About us</a>
        <Button text={"Contact Us"}/>
    </div>
   </div>
)