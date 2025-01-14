import Image from 'next/image';
import Main from '@/components/Home';


export default function Home() {
  return (
    <>
      <Main
        title="Boas vindas a Lacrei Saúde"
        text="Somos uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        image={
          <Image
            src="/assets/Online Doctor-amico.svg"
            width={555}
            height={421}
            alt="Pessoa Médica com roupa verde"
            priority
          />
        }
      />
      
    </>
  );
}
