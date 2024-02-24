import Image from 'next/image';

interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className='py-10 items-center text-center justify-center flex flex-col'>
    <h2 className='text-green-30 text-2xl font-[800]'>{title}</h2>
    <Image
    src="/about-curve.png"
    alt='curve'
    width={100}
    height={10}
    />
</div>
  )
}

export default Title
