interface SupportCenterProps {
    phone_no: string;
    message: string;
    children: React.ReactNode;
}

const SupportCenter = ({phone_no, message, children}: SupportCenterProps) => {
  return (
    <div className="hidden lg:flex gap-2">
                {children}
               <div>
                    <h4 className="text-green-10 font-[600] text-xl">{phone_no}</h4>
                    <p className="text-[10px] font-[500] text-gray-10">{message}</p>
               </div>
            </div>
  )
}

export default SupportCenter
