import StarIcon from "@/svg/StarIcon"
import WidgetCard from "./WidgetCard"

const NewProductsWidget = () => {
  return (
    <WidgetCard title="New Products">
        <div className="flex gap-4 border-b-2 border-dotted py-2">
            <div style={{ backgroundImage: 'url("/thumbnail-1.png")'}} className="bg-cover bg-center p-8" />
            <div>
                <h5 className="text-green-10 text-xl font-[600]">Chen Cardigan</h5>
                <p className="text-gray-10 text-sm">$99.50</p>
                <StarIcon className="fill-yellow-10" />
            </div>
        </div>
        <div className="flex gap-4 border-b-2 border-dotted py-2">
            <div style={{ backgroundImage: 'url("/thumbnail-1.png")'}} className="bg-cover bg-center p-8" />
            <div>
                <h5 className="text-green-10 text-xl font-[600]">Chen Cardigan</h5>
                <p className="text-gray-10 text-sm">$99.50</p>
                <StarIcon className="fill-yellow-10" />
            </div>
        </div>
        <div className="flex gap-4 border-b-2 border-dotted py-2">
            <div style={{ backgroundImage: 'url("/thumbnail-1.png")'}} className="bg-cover bg-center p-8" />
            <div>
                <h5 className="text-green-10 text-xl font-[600]">Chen Cardigan</h5>
                <p className="text-gray-10 text-sm">$99.50</p>
                <StarIcon className="fill-yellow-10" />
            </div>
        </div>
    </WidgetCard>
  )
}

export default NewProductsWidget
