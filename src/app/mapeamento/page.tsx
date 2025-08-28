import BuildeForm from "../components/forms/BuildeForm";
import Cabecalho from "../components/layout/Cabecalho";
import { Resumo } from "../components/cards/Resumo";

export default function Mapeamento() {
  return (
    <div className="flex w-full h-screen">
      <Cabecalho />
      <section className="flex flex-col w-1/2 h-full bg-green-700 p-6 gap-6">
        <h2 className="text-amber-50 font-bold text-4xl text-center">Mapeamento</h2>
        <BuildeForm />
      </section>

    </div>
  );
}
