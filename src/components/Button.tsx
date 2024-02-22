interface ButtonProps {
    type: "submit" | "button";
    variant: "btn_green" | "btn_green_round" | "btn_light_green" ;
    children: React.ReactNode;
    short?: boolean
}
const Button = ({type, variant, children, short}: ButtonProps) => {
  return (
    <button type={type} className={`${variant} ${!short ? "w-full " : "max-w-28"} text-center  flex items-center gap-2`}>
       {children && children}
    </button>
  )
}

export default Button
