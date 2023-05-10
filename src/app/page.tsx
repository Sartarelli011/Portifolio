import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import me from "../../public/me.jpeg";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import py from "../../public/functions-isencao.png";
import todoapp from "../../public/TodoList.png";
import poke from "../../public/pokdex.png";
import spotify from "../../public/spotify.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gray-800 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" text-white font-burtons text-xl">MyPortifolio</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1fXEk8QoEmywTH9qKLSrGqbl0YeeT8b4q/view?usp=share_link"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
              Gabriel Jaccoud
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
              Backend Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-white  max-w-xl mx-auto md:text-xl">
              Foco e organização são importantes, para saber mais sobre mim
              acesse as redes abaixo!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-white ">
              <a href="https://www.linkedin.com/in/sartarelli/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Sartarelli011">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={me}
                style={{ objectFit: "cover" }}
                quality={100}
                alt={""}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 font-semibold">
              Stacks e Habilidades
            </h3>
            <p className="text-md py-2 leading-8 text-white">
              Sou um desenvolvedor de software com experiência em tecnologias
              backend, incluindo{" "}
              <span className="text-teal-600">
                NodeJS, ExpressJS, JWT, APIs RESTful, Java, Spring Boot, JPA,
                Hibernate, JUnit e Jest.
              </span>
              Além disso, tenho conhecimento em{" "}
              <span className="text-teal-600">
                Design Patterns e Clean Code
              </span>
              , o que me permite criar soluções de software bem projetadas e
              altamente legíveis. Estou sempre em busca de novas oportunidades
              para aprender e crescer minhas habilidades como desenvolvedor de
              software.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white flex-1">
              <Image src={design} width={100} height={100} alt={""} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-black  ">
                Front End
              </h3>
              <p className="py-2 text-black ">
                Criar designs elegantes adequados às suas necessidades seguindo
                a teoria fundamental do design.
              </p>
              <h4 className="py-4 text-teal-600">React / Next</h4>
              <p className=" py-1 text-black">Bootstrap / Tailwind</p>
              <p className=" py-1 text-black">Styled Components</p>
              <p className=" py-1 text-black">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white flex-1">
              <Image src={code} width={100} height={100} alt={""} />
              <h3 className="text-lg text-center font-medium pt-8 pb-2 text-black">
                Java NodeJs
              </h3>
              <p className="  py-2 text-black">
                NodeJs e Java me permitem oferecer soluções de software robustas
                e escaláveis, atendendo às necessidades dos clientes em
                diferentes áreas de atuação e mercados.
              </p>
              <h4 className="py-4 text-teal-600">Spring boot / Express</h4>
              <p className="text-black py-1">Hibernate</p>
              <p className="text-black py-1">JUnit / Jest</p>
              <p className="text-black py-1">JWT / Oauth</p>
              <p className="text-black py-1">Postgres / MongoDB</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt={""} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-black ">
                Boas Práticas
              </h3>
              <p className="py-2 text-black">
                clean code e design patterns me permitem criar soluções de
                software escaláveis, robustas e fáceis de manter.
              </p>
              <h4 className="py-4 text-teal-600">Clean Code</h4>
              <p className="text-black py-1">Design Patterns</p>
              <p className="text-black py-1">Test Driven Development</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-600 font-semibold ">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-white ">
              Aqui está alguns dos meus trabalhos pessoais que demonstram meu
              conhecimento, fique a vontade para ler os códigos no meu github.
              Obrigado por acessar e até a próxima.
              <span className="text-md py-2 leading-8 text-teal-500 ">:)</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/Sartarelli011/pokedex">
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  src={poke}
                  alt={""}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Sartarelli011/spotify-clone">
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  src={spotify}
                  alt={""}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Sartarelli011/todoApp">
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  src={todoapp}
                  alt={""}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Sartarelli011/Isencao-cartoes">
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  src={py}
                  alt={""}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
