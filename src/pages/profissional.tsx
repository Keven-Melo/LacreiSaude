import Image from 'next/image'

// components
import Main from '@/components/Home'

export default function Profissional() {
  return (
    <Main
      title="Profissional"
      text="Estamos em busca de profissionais de saúde que compreendam as necessidades da comunidade LGBTQIAPN+ e estejam dedicados a promover seu bem-estar de forma inclusiva e respeitosa."
      image={
        <Image
          src="/assets/med-people.svg"
          width={540}
          height={421}
          alt="Pessoas com roupas médicas"
          priority={true}
        />
      }
    />
  )
}
