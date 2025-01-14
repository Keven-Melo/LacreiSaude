import Image from 'next/image'

// components
import Main from '@/components/Home'

export default function PessoaUsuaria() {
  return (
    <Main
      title="Pessoa Usuária"
      text="A Lacrei se compromete a garantir que pessoas LGBTQIAPN+ tenham acesso a um atendimento de excelência, conduzido por profissionais qualificados, em um ambiente seguro, inclusivo e acolhedor."
      image={
        <Image
          src="/assets/tech-people.svg"
          width={540}
          height={421}
          alt="Pessoas usando celulares"
          priority={true}
        />
      }
    />
  )
}
