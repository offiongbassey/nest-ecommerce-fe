interface WidgetCardProps {
    title: string;
    children: React.ReactNode;
}

const WidgetCard = ({ title, children }: WidgetCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-30 shadow-xl min-w-[280px] mb-6">
         <h2 className="text-green-30 text-2xl font-[600] mb-4">{title}</h2>
         <div className='bg-green-20 w-20 py-[2px]'/>
         <hr className="mb-6"/>
        {children}
    </div>
  )
}

export default WidgetCard
