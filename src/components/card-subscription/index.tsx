import { CheckCircleIcon, LucideProps } from "lucide-react"
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui"
import { cn } from "@/lib/utils";

interface ICardSubscriptionProps {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  value: string;
  items: string[];
  bgColor?: string;
}

export const CardSubscription = ({ title, description, value, items, Icon, bgColor }: ICardSubscriptionProps) => {
  return (
    <Card className={cn(
      "flex relative flex-col select-none min-h-[430px] hover:scale-95 duration-200",
      bgColor ? bgColor : "bg-[#F6A41E]"
    )}>
      <CardHeader className="flex items-center gap-2">
        {<Icon className="w-10 h-10" color="#ffffff" />}
        <CardTitle className="font-merriweather text-xl font-normal text-gray-50">
          {title}
        </CardTitle>

        <p className="text-xs font-montserrat font-normal text-white text-center min-h-8">
          {description}
        </p>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <div className="relative flex items-start">
          {value && (
            <p className="absolute text-xs font-merriweather font-light text-gray-50 pt-1 top-0 -left-5">
              R$
            </p>
          )}
          <h3 className="font-bold font-merriweather text-4xl text-gray-50">
            {value}
          </h3>
        </div>

        <div className="flex flex-col self-start">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex gap-2">
                <CheckCircleIcon className="w-3 min-w-3 min-h-3" color="#ffffff" />
                <li className="text-xs font-montserrat font-normal text-gray-50">
                  {item}
                </li>
              </div>
            ))}

          </ul>
        </div>
      </CardContent>
      <CardFooter className="absolute w-full bottom-0">
        <Button className="w-full h-7 text-xs bg-orange-950/80 hover:opacity-95 font-merriweather text-white">
          Assinar
        </Button>
      </CardFooter>
    </Card >
  )
}