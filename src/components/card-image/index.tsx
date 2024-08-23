
interface ICardImageProps {
  image: string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
}
export const CardImage = ({ image, alt, title, description, className }: ICardImageProps) => {
  return (
    <div className={`flex flex-col gap-2 h-40 hover:scale-105 duration-300 w-64 pb-1 ${className}`}>
      <img
        src={image}
        alt={alt}
        className='w-full h-full rounded-md'
      />
      <div className='flex flex-col gap-y-1'>
        <h3 className="font-semibold font-merriweather leading-none text-sm">
          {title}
        </h3>
        <p className="text-xs font-merriweather font-normal text-gray-500">
          {description}
        </p>
      </div>
    </div>
  )
}