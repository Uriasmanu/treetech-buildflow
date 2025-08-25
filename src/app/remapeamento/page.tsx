import BuildeForm from "../components/BuildeForm";
import Cabecalho from "../components/Cabecalho";

export default function Remapeamento() {
  return (
    <div className="flex w-full h-screen">
      <Cabecalho />
      <section className="flex flex-col w-1/2 h-full bg-green-700 p-6 gap-6">
        <h2 className="text-amber-50 font-bold text-2xl text-center">Remapeamento</h2>
        <BuildeForm />
      </section>
    </div>
  );
}
