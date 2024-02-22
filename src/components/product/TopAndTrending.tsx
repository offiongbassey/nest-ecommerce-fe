import { TOP_AND_TRENDING_PRODUCTS } from '@/context/Context';
import TopProductItem from './TopProductItem';

const TopAndTrending = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-green-30 padding-container max-container'>
     {TOP_AND_TRENDING_PRODUCTS.map((product, index) => (
        <TopProductItem index={index} product={product} />
      ))}
    </div>
  )
}

export default TopAndTrending
