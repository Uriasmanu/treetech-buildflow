import Cabecalho from "./components/layout/Cabecalho";
import Iniciar from "./components/process/Iniciar";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <Cabecalho mostrarBotao={false} />

      <section className="flex flex-col w-1/2 h-full bg-green-700 p-6 gap-2 items-center gap-6 justify-center">
        <h2 className="text-amber-50 font-bold text-4xl text-center">Como deseja Iniciar?</h2>
        <Iniciar />
      </section>
    </div>
  );
}
