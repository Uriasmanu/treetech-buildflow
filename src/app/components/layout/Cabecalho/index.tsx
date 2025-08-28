import BotaoVoltar from "../../ui/BotaoVoltar";

interface CabecalhoProps{
  mostrarBotao?: boolean;
}

export default function Cabecalho({mostrarBotao = true}: CabecalhoProps) {
    return (
    <section className="relative flex w-1/2 h-full bg-gray-100 justify-center items-center">
      {mostrarBotao && (
        <div className="absolute top-4 left-4">
          <BotaoVoltar />
        </div>
      )}
        <h1 className="text-emerald-950 text-8xl font-bold text-left">
          <span className="block">Builder</span>
          <span className="block">Maps</span>
        </h1>
      </section>

    )
}