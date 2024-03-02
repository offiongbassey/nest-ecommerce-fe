import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  return (
    <section className="padding-container max-container py-16">
        <div className="lg:px-24">
            <h2 className="text-3xl text-green-30 font-[600]">Your Wishlist</h2>
            <p className="text-gray-10 font-[500] text-sm">There are 5 products in this list</p>
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-left border border-gray-20">
                    <thead className="bg-gray-20">
                        <tr>
                            <th className="px-4 py-3 rounded-s-lg">Product</th>
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Stock Status</th>
                            <th className="px-4 py-3">Action</th>
                            <th className="px-4 py-3 rounded-e-lg">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="text-green-10 font-[600]">
                       <WishlistItem />
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Wishlist
