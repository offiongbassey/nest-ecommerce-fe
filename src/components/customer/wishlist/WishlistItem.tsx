import Button from "@/components/Button";
import DeleteIcon from "@/svg/DeleteIcon";
import StarIcon from "@/svg/StarIcon";

const WishlistItem = () => {
  return (
    <>
      <tr className="border border-gray-20">
        <td className="px-1 py-3">
          <div
            style={{ backgroundImage: 'url("/product-3.png")' }}
            className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"
          />
        </td>
        <td className="px-4 py-3">
          Field Roast Chao Cheese Creamy Original <br />{" "}
          <div className="flex gap-4 items-center py-1">
            {" "}
            <StarIcon className="fill-[#FEC601]" />{" "}
            <span className="text-sm font-[400] text-gray-10">(4.0)</span>
          </div>
        </td>
        <td className="text-xl px-4 py-3">$2.51</td>
        <td className="px-4 py-3">
          <span className="px-4 py-2 bg-green-50 rounded-md">In Stock</span>
        </td>
        <td className="px-4 py-3">
          <Button type="button" variant="btn_green" short={true}>
            Add to Cart
          </Button>
        </td>
        <td className="px-4 py-3">
          <DeleteIcon className="stroke-gray-10" />
        </td>
      </tr>
      <tr className="border border-gray-20">
        <td className="px-1 py-3">
          <div
            style={{ backgroundImage: 'url("/product-3.png")' }}
            className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"
          />
        </td>
        <td className="px-4 py-3">
          Field Roast Chao Cheese Creamy Original <br />{" "}
          <div className="flex gap-4 items-center py-1">
            {" "}
            <StarIcon className="fill-[#FEC601]" />{" "}
            <span className="text-sm font-[400] text-gray-10">(4.0)</span>
          </div>
        </td>
        <td className="text-xl px-4 py-3">$2.51</td>
        <td className="px-4 py-3">
          <span className="px-4 py-2 bg-green-50 rounded-md">In Stock</span>
        </td>
        <td className="px-4 py-3">
          <Button type="button" variant="btn_green" short={true}>
            Add to Cart
          </Button>
        </td>
        <td className="px-4 py-3">
          <DeleteIcon className="stroke-gray-10" />
        </td>
      </tr>
      <tr className="border border-gray-20">
        <td className="px-1 py-3">
          <div
            style={{ backgroundImage: 'url("/product-3.png")' }}
            className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"
          />
        </td>
        <td className="px-4 py-3">
          Field Roast Chao Cheese Creamy Original <br />{" "}
          <div className="flex gap-4 items-center py-1">
            {" "}
            <StarIcon className="fill-[#FEC601]" />{" "}
            <span className="text-sm font-[400] text-gray-10">(4.0)</span>
          </div>
        </td>
        <td className="text-xl px-4 py-3">$2.51</td>
        <td className="px-4 py-3">
          <span className="px-4 py-2 bg-green-50 rounded-md">In Stock</span>
        </td>
        <td className="px-4 py-3">
          <Button type="button" variant="btn_green" short={true}>
            Add to Cart
          </Button>
        </td>
        <td className="px-4 py-3">
          <DeleteIcon className="stroke-gray-10" />
        </td>
      </tr>
    </>
  );
};

export default WishlistItem;
