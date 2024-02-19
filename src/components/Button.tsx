type ButtonProps = {
    type: "submit" | "button";
    variant: "btn_green" | "btn_green_round";
    children: React.ReactNode;
}
const Button = ({type, variant, children}: ButtonProps) => {
  return (
    <button type={type} className={`${variant} flex items-center gap-2`}>
       {children && children}
    </button>
  )
}

export default Button
