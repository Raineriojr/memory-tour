import { Header } from '@/components/layout/header';
import { history, subscribeCardValues } from '@/content';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import Balneario from '@assets/balneario.jpeg';
import Bandeira from '@assets/bandeira.jpeg';
import Beira from '@assets/beira.jpeg';
import Cachoeira from '@assets/cachoeira.jpeg';
import Castanheiro from '@assets/castanheiro.jpeg';
import Praca from '@assets/praca.jpeg';
import Show from '@assets/show.jpeg';
import FrenteCidade from '@assets/frente-cidade.jpg';
import Indigena from '@assets/indigena.jpg';

import { CardImage, CardShop, CardSubscription } from '@/components';
import { Button, Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components/ui';
import { FormProvider, useForm } from 'react-hook-form';

export const Home = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      message: ''
    }
  });

  return (
    <main>
      <section id='header' className="grid grid-cols-12 px-32 pt-16 pb-4 gap-x-8 gap-y-4 h-lvh bg-[#F4F3F1]">
        <div className='grid col-span-12'>
          <Header />
        </div>

        <div className='grid col-span-12 h-fit'>
          <img
            src={Castanheiro}
            className="w-full h-96 object-fill rounded-md"
          />
        </div>

        <div className='grid col-span-4 h-52 mr-4'>
          <div className='flex flex-col pb-1 justify-between'>
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Quem Somos?
              </p>
              <p className='font-medium text-[15px] font-montserrat text-gray-700'>
                Somos um museu virtual dedicado a preservar e
                compartilhar a rica história, tradições, pontos turísticos e
                culturas do Vale do Jari.
              </p>
            </div>
            <Link to='history' smooth={true} duration={500} offset={-50} style={{ width: '100%' }}>
              <Button className='w-full bg-gradient-to-r from-[#974627] to-[#F6A41E] text-[15px] font-montserrat font-semibold hover:opacity-85'>
                Começar
              </Button>
            </Link>
          </div>
        </div>

        <div className='grid col-span-8'>
          <div className='flex items-center justify-between h-44'>
            <CardImage
              title='Laranjal do Jari'
              description='Frente da Cidade'
              image={Beira}
              className='hover:scale-105'
            />
            <CardImage
              title='Bandeira de Laranjal Jari'
              description='Bandeira do Município'
              alt='Bandeira de Laranjal Jari'
              image={Bandeira}
              className='hover:scale-105'
            />
            <CardImage
              title='João da Silva Nery'
              description='Praça central da cidade'
              alt='Praça João da Silva Nery'
              image={Praca}
              className='hover:scale-105'
            />
          </div>
        </div>
      </section>

      <section id='history' className="grid grid-cols-12 px-32 gap-x-8 gap-y-12 py-20 h-lvh bg-gray-100">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Conheça Nossa História
          </p>
        </div>
        <div className='grid col-span-12 h-min -mt-20'>
          <div className='flex gap-8'>
            <div className='flex w-5/12 h-full'>
              <CardImage
                title='Laranjal do Jari'
                description='Frente da Cidade - Rio Jari'
                image={FrenteCidade}
                className='flex-1 h-full'
              />
            </div>
            <div className='flex flex-1 flex-col gap-4'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Vale do Jari
              </p>
              <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
                {history}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='culture' className="grid grid-cols-12 px-32 gap-x-8 py-20 pb-14 h-lvh bg-[#F4F3F1]">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Cultura da Região
          </p>
        </div>
        <div className='grid col-span-12 h-min -mt-4'>
          <div className='flex gap-8'>
            <div className='flex w-4/12 h-56'>
              <CardImage
                title='Populações Indígenas'
                description='Apina - Conselho das Aldeias Wajãpi'
                image={Indigena}
                className='flex-1 h-full'
              />
            </div>
            <div className='flex flex-1 flex-col gap-4'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Populações Tradicionais
              </p>
              <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
                As etnias indígenas, como os Waiãpi e Apalai, têm uma presença
                significativa na região. Eles mantêm suas línguas, costumes, rituais
                e conhecimentos tradicionais sobre a floresta.
              </p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-1 flex-col gap-4 justify-end'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Festas e Celebrações
              </p>
              <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
                Festividades católicas, como o Círio de Nazaré e festas de santos
                padroeiros, são comuns, com procissões, missas e celebrações
                comunitárias.
              </p>
            </div>
            <div className='flex w-4/12 h-56'>
              <CardImage
                title='Show Nacional'
                description='Aniversário de Laranjal do Jari'
                image={Show}
                className='flex-1 h-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='leisure' className="grid grid-cols-12 px-32 gap-x-8 py-20 pb-14 h-lvh bg-gray-100">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Descubra Nossos Espaços de Turismo e Lazer
          </p>
        </div>
        <div className='grid col-span-12 h-min -mt-4'>
          <div className='flex gap-8'>
            <div className='flex w-4/12 h-56'>
              <CardImage
                title='Cachoeira de Santo Antônio'
                description='Rio Jari'
                image={Cachoeira}
                className='flex-1 h-full'
              />
            </div>
            <div className='flex flex-1 flex-col gap-4'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Pontos Turísticos
              </p>
              <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
                A Cachoeira de Santo Antônio é uma das belezas naturais mais
                notáveis na região de Laranjal do Jari, situada no estado do Amapá.
                Ela é um destino popular para os moradores locais e visitantes,
                oferecendo uma experiência única em meio à natureza exuberante
                da Amazônia.
              </p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-1 flex-col gap-4 justify-end'>
              <p className='font-bold text-lg font-montserrat text-gray-800'>
                Balneários
              </p>
              <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
                Este local oferece uma ótima opção de recreação e descanso,
                especialmente para os moradores e visitantes que desejam
                aproveitar as belezas naturais e o clima quente da região
              </p>
            </div>
            <div className='flex w-4/12 h-56'>
              <CardImage
                title='Sobra da Mata'
                description='Balneário local'
                image={Balneario}
                className='flex-1 h-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='advertising' className="grid grid-cols-12 px-32 gap-x-8 py-20 h-lvh bg-[#F4F3F1]">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Publicidade
          </p>
        </div>

        <div className='grid col-span-12'>
          <Carousel>
            <CarouselContent className="flex snap-x snap-mandatory">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/5"
                >
                  <CardShop index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id='subscription' className="grid grid-cols-12 px-32 gap-x-8 gap-y-8 py-20 h-lvh bg-gray-100">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Assinaturas
          </p>
        </div>

        <div className='grid col-span-12'>
          <p className='font-montserrat font-medium text-md text-gray-800'>
            Aqui no Memory Tour, estamos comprometidos em trazer o fascínio do Vale do Jari diretamente
            para você, onde quer que esteja. Com nossas assinaturas, mergulhe em um universo de
            explorações cativantes, desde os pontos turísticos  até os festivais magníficos, tudo na palma da
            sua mão.
          </p>
        </div>

        <div className='grid col-span-12'>
          <Carousel>
            <CarouselContent className="flex snap-x snap-mandatory">
              {subscribeCardValues.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <CardSubscription
                    key={index}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                    items={item.items}
                    Icon={item.Icon}
                    bgColor={item.bgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id='contact' className="grid grid-cols-12 px-32 gap-x-8 py-20 h-lvh bg-[#F4F3F1]">
        <div className='grid col-span-12 h-fit bg-gradient-to-l from-[#974627] to-[#F6A41E] p-3 rounded-md'>
          <p className='font-montserrat font-bold text-xl text-white'>
            Contato
          </p>
        </div>

        <div className='grid col-span-5 mt-4'>
          <div className='flex flex-col gap-6'>
            <p className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              Agradecemos o seu interesse em nosso museu virtual!
              Estamos aqui para ajudá-lo(a) com qualquer dúvida,
              sugestão ou comentário que possa ter.
            </p>
            <p className='font-bold text-lg font-montserrat text-gray-800'>
              E-mails para contato:
            </p>
            <li className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              memorytour24@gmail.com
            </li>
            <li className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              aguiaryasmim39@gmail.com
            </li>
            <li className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              felipegabriel069@gmail.com
            </li>
            <li className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              ingridgoesbarbosa@gmail.com
            </li>
            <li className='font-medium text-[15px] font-montserrat leading-7 text-gray-700'>
              tatiana.costa@ifap.edu.br
            </li>
          </div>
        </div>

        <div className='grid col-span-7 mt-4'>
          <Card>
            <CardContent className='py-4 space-y-4'>
              <FormProvider {...form}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Informe seu nome" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@email.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contato</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 0000-0000" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea className='h-24 resize-none' placeholder="Digite sua mensagem" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='flex justify-end'>
                  <Button className='w-36 bg-gradient-to-l from-[#974627] to-[#F6A41E] hover:opacity-85'>
                    Enviar
                  </Button>
                </div>
              </FormProvider>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id='footer' className="select-none flex flex-1 h-24 items-center justify-center bg-gradient-to-l from-[#974627] to-[#F6A41E]">
        <div className='flex gap-2 items-center'>
          <p className='font-merriweather font-semibold text-xs text-gray-200'>
            Desenvolvido por:
          </p>
          <RouterLink
            to='https://www.linkedin.com/in/rainerio-costa/'
            target='_blank'
            className='font-merriweather font-medium text-xs text-gray-200'
          >
            Rainério Costa ⭐️
          </RouterLink>
        </div>
      </section>
    </main >
  )
}