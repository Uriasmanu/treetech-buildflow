import BuildeForm from "../components/BuildeForm";

export default function Mapeamento() {
  return (
    <div className="flex w-full h-screen">
      <section className="flex w-1/2 h-full bg-gray-100 justify-center items-center">
        <h1 className="text-emerald-950 text-8xl font-bold text-left">
          <span className="block">Builder</span>
          <span className="block">Maps</span>
        </h1>
      </section>

      <section className="flex flex-col w-1/2 h-full bg-green-700 p-6 gap-6">
      <h2 className="text-amber-50 font-bold text-4xl text-center">Mapeamento</h2>
       <BuildeForm/>
      </section>
    </div>
  );
}
