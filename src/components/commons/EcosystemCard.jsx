import { ArrowUP, SteadLogo } from "../../assets/Icons";
import { Button } from "./Button";

export const EcosystemCard = ({ data }) => (
    <div className="w-full relative py-6 px-6 border-[0.2px]  flex flex-col bg-[#D9D9D9] rounded-[78px] rounded-b-[30px] gap-6 h-[789ppx] border-[#FFFFFF80]">
        <div className="relative w-full h-[478px] flex justify-center items-center">
            <img className="w-full h-full rounded-[54px] object-cover" src={data.image} alt="" />
            <div className="absolute w-[580px] flex gap-1 justify-center items-center h-[90px] backdrop-blur-[0.2px] ">
                <SteadLogo /> <p className="text-white text-[32px] font-medium">| <span className="font-bold">{" " + data.category}</span></p>
            </div>
        </div>
        <div>
            <p className="text-[32px] font-bold">{data.title + ": " + data.subtitle}</p>
            <p className="text-[24px] font-light">{data.description}</p>
        </div>

        <Button className={"absolute w-15 h-15 backdrop-blur-[10px] border-[#FFFFFF99] bg-[#FFFFFF1A] right-12 top-12"} icon={<ArrowUP />} />
    </div>
)