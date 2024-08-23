import { Button, Card, CardContent, CardHeader } from "../ui"

import Cart from '@assets/cart.jpg';

export const CardShop = (props: any) => {
  return (
    <Card>
      <CardContent className="flex flex-col p-0 select-none">
        <CardHeader className="p-2 flex items-center overflow-hidden">
          <img src={Cart} alt="Publicidade" className="w-40 h-4/6 object-contain" />
        </CardHeader>
        <div className="flex flex-col px-4 py-4 gap-2">
          <h3 className="font-semibold font-merriweather leading-none text-sm text-gray-800">
            {`${props.index + 1} - Título do produto`}
          </h3>
          <p className="text-xs font-merriweather font-normal text-gray-500">
            Alguma descrição
          </p>
        </div>
        <Button className="m-4 bg-[#F6A41E] hover:opacity-85 hover:bg-[#F6A41E] font-merriweather">
          Adicionar
        </Button>
      </CardContent>
    </Card>
  )
}