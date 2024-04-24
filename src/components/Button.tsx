interface ButtonProps {
    type: "submit" | "button";
    variant: "btn_green" | "btn_green_round" | "btn_light_green" | "btn_white" | "btn_white_outline" | "btn_white_round_2";
    children: React.ReactNode;
    short?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button = ({type, variant, children, short, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`${variant} ${!short ? "w-full " : ""} text-center  flex items-center gap-2`}>
       {children && children}
    </button>
  )
}

export default Button
