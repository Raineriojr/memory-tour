import { GemIcon, HandshakeIcon, HeartIcon, NotebookPenIcon, SunIcon } from "lucide-react"

export const history = "O Vale do Jari está localizado no noroeste do estado do\
 Amapá, próximo à divisa com o Pará. Essa região é banhada\
 pelo Rio Jari, um importante afluente do Rio Amazonas, que\
 percorre aproximadamente 600 quilômetros antes de\
 desaguar no Atlântico. A paisagem é dominada pela\
 exuberante floresta amazônica, com uma biodiversidade\
 impressionante de flora e fauna.\
 O Vale do Jari é uma região única e fascinante no norte do\
 Brasil, repleta de história, diversidade e desafios. Desde a sua\
 ocupação inicial por povos indígenas como Waiwai, Tiriyó e\
 Aparai. Até os conflitos políticos e ambientais que marcaram\
 seu desenvolvimento, esta área é um retrato vívido da\
 complexidade e riqueza da Amazônia brasileira."

export const subscribeCardValues = [
  {
    Icon: SunIcon,
    title: 'Gratuito',
    description: 'Acesso básico ao conteúdo do museu.',
    value: '0',
    bgColor: 'bg-[#86654A]',
    items: [
      'Acesso limitado a exposições e galerias virtuais.',
      'Possibilidade de comentar e interagir em fóruns de discussão.',
      'Inscrição em newsletters e atualizações do museu.'
    ]
  },
  {
    Icon: NotebookPenIcon,
    title: 'Estudante',
    description: 'Acesso com desconto para estudantes.',
    value: '15',
    bgColor: 'bg-[#944020]',
    items: [
      'Descontos em eventos, cursos online e materiais educativos.',
      'Acesso a recursos e bibliotecas digitais para pesquisa acadêmica.',
      'Participação em programas de estágio e voluntariado.'
    ]
  },
  {
    Icon: HeartIcon,
    title: 'Família',
    description: 'Acesso completo para uma família (até 5 membros).',
    value: '30',
    bgColor: 'bg-[#D96124]',
    items: [
      'Descontos adicionais em eventos e cursos para famílias.',
      'Acesso a eventos e atividades familiares exclusivas.',
      'Todos os benefícios da assinatura individual para cada membro da família.'
    ]
  },
  {
    Icon: GemIcon,
    title: 'Premium',
    description: 'Acesso exclusivo e benefícios adicionais.',
    value: '40',
    bgColor: 'bg-[#CC7E36]',
    items: [
      'Recebimento de publicações e catálogos do museu.',
      'Sessões virtuais privadas com curadores e especialistas.',
      'Acesso a áreas e conteúdos exclusivos, como arquivos e coleções especiais.'
    ]
  },
  {
    Icon: HandshakeIcon,
    title: 'A combinar',
    description: 'Negocie o melhor plano para sua necessidade.',
    value: '',
    bgColor: 'bg-[#F5A616]',
    items: [
      'Recebimento de publicações e catálogos do museu.',
      'Sessões virtuais privadas com curadores e especialistas.'
    ]
  },
  
]