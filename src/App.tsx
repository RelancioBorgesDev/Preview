import { BarChart2, Calendar, Cpu, Share2, Sliders, Zap } from "lucide-react";
import Card from "./components/Card";
import Title from "./components/Title";
import SVG from "./components/SVG";
import AnimatedTriangle from "./components/AnimatedTriangle";

function App() {
  const features = [
    {
      icon: Share2,
      title: "Integração com Redes Sociais",
      subtitle:
        "Conecte facilmente todas as suas contas e centralize sua gestão de conteúdo.",
    },
    {
      icon: Calendar,
      title: "Controle sobre as Postagens",
      subtitle:
        "Agende, edite e publique seus posts com total controle e flexibilidade.",
    },
    {
      icon: Cpu,
      title: "Criação com IA",
      subtitle:
        "Gere conteúdos envolventes e personalizados com a ajuda da inteligência artificial.",
    },
    {
      icon: BarChart2,
      title: "Estatísticas dos Posts",
      subtitle:
        "Acompanhe o desempenho de suas postagens com análises detalhadas e insights valiosos.",
    },
    {
      icon: Zap,
      title: "Postagem Dinâmica",
      subtitle:
        "Crie e publique conteúdos em tempo real para manter seu público sempre engajado.",
    },
    {
      icon: Sliders,
      title: "Customização Avançada",
      subtitle:
        "Personalize cada aspecto dos seus posts para refletir perfeitamente a identidade da sua marca.",
    },
  ];

  return (
    <main className="min-h-screen relative">
      <div className="absolute right-40 max-lg:hidden">
        <SVG />
      </div>
      <div className="absolute left-40 max-lg:hidden">
        <AnimatedTriangle />
      </div>

      <article className="max-w-6xl max-md:w-full h-full mx-auto mt-20 flex flex-col items-center justify-between text-center gap-40 max-lg:gap-36 max-lg:px-4">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title className="max-lg:text-4xl">
            Transforme suas redes sociais com conteúdo automatizado gerado por
            IA
          </Title>
          <p className="font-anek-devanagari text-xl text-gray-400">
            Criação de posts inteligentes e personalizados em segundos, elevando
            sua presença digital ao próximo nível!
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Title className="text-4xl">
            Destaques da Nossa Plataforma de Conteúdos Inteligentes
          </Title>
          <p className="font-anek-devanagari text-xl text-gray-400">
            Explore as funcionalidades inovadoras que transformam suas redes
            sociais com a força da inteligência artificial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
              />
            ))}
          </div>
        </div>
        <article className="py-8">
          <Title className="text-4xl uppercase">Em Breve</Title>
        </article>
      </article>
    </main>
  );
}

export default App;
