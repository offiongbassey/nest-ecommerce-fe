import Button from "@/components/Button"

const ProductDescription = () => {
  return (
    <div className="border-2 border-gray-30 rounded-2xl p-6 lg:max-w-[850px]">
        <div className="flex flex-col md:flex-row gap-2 mb-10">
            <Button type="button" short={true} variant="btn_white_round_2" ><span className="text-green-10">Description</span></Button>
            <Button type="button" short={true} variant="btn_white_round_2" >Additional Info</Button>
            <Button type="button" short={true} variant="btn_white_round_2" >Vendor</Button>
            <Button type="button" short={true} variant="btn_white_round_2" >Reviews (3)</Button>
        </div>
        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
        goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
        <br />
        <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
        wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
        mastodon goodness gnashed a jellyfish and one however because.</p>
    </div>
  )
}

export default ProductDescription
