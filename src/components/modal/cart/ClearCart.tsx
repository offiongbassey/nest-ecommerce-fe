import Button from "@/components/Button";
import DeleteIcon from "@/svg/DeleteIcon";

interface ClearCartProps {
    openModal: boolean;
    onClose: React.MouseEventHandler<HTMLDivElement> | undefined;
    setOpenModal: (value: boolean) => void;
    clearCartItems: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ClearCart = ({ openModal, onClose, setOpenModal, clearCartItems}: ClearCartProps) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors visible bg-green-30/60 z-50 ${openModal ? "visible bg-green-30/60 z-55" : "invisible"}`}>
        <div className={`items-center justify-center bg-white p-6 rounded-lg ${openModal ? "scale-100 opacity-100" : "scale-125 opacity-0" }`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-green-30 font-bold text-lg mb-2">Clear all items from cart</h4>
                <Button onClick={() => setOpenModal(false)} type="button" variant="btn_white" short={true} >X</Button>
            </div>
            <p className="text-sm text-green-30 mb-2">Do you really want to remove all items from cart?</p>
            <Button onClick={clearCartItems} type="button" variant="btn_green"> <DeleteIcon className="stroke-white" /> CLEAR ALL</Button>
        </div>
      
    </div>
  )
}

export default ClearCart
