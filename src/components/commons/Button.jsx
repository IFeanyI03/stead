export const Button = ({text, className, icon}) => (
    <button className={` ${className ? className : "font-medium py-[10px] px-[35px] w-fit border-[#FFFFFF80]" }  cursor-pointer rounded-[30px] border-[0.2px] flex items-center justify-center text-[16px]`}>{text}{icon}</button>
)