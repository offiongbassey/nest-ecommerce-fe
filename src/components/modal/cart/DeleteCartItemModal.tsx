import Button from "@/components/Button";
import DeleteIcon from "@/svg/DeleteIcon";

interface DeleteCartItemModalprops {
    openModal: boolean;
    onClose: React.MouseEventHandler<HTMLDivElement> | undefined;
    setOpenModal: (value: boolean) => void;
    removeItem: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DeleteCartItemModal = ({ openModal, onClose, setOpenModal, removeItem }: DeleteCartItemModalprops) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${openModal ? 'visible bg-green-30/60 z-50' : 'invisible'}`}>
        <div className={`items-center justify-center bg-white p-6 rounded-lg ${openModal ? 'scale-100 opacity-100' : 'scale-x-125 opacity-0'}`} onClick={(e) => e.stopPropagation()}>    
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-green-30 text-lg font-bold mb-2">Remove from cart</h4>
                    <Button type="button" variant="btn_white" short={true} onClick={() => setOpenModal(false)}>X</Button>
                </div>
                <p className="text-sm text-green-30 mb-2">Do you really want to remove this item from cart?</p>
                <Button onClick={removeItem} type="button" variant="btn_green"> <DeleteIcon className="stroke-white" /> REMOVE ITEM</Button>
        </div>
    </div>
  )
}

export default DeleteCartItemModal
