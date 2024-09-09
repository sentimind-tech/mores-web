type TValueCardProp = {
  title: string
  description: string
}

const ValueCard = ({ title, description }: TValueCardProp) => {
  return (
    <div className="border border-gray-cloud border-t-[3px] border-t-blue-pacific px-16 py-20 gap-24 flex flex-col min-h-[43px]">
      <div className="font-supplymono text-base">{title}</div>
      <div className="font-inter text-14 leading-[22px]">{description}</div>
    </div>
  )
}

export default ValueCard
