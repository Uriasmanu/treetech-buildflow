"use client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Iniciar() {
  const router = useRouter();

  const irParaMapeamento = () => {
    router.push("/mapeamento")
  }

    const irParaRemapeamento = () => {
    router.push("/remapeamento")
  }

  return (
    <div className="w-full max-w-md rounded-lg shadow-md p-6 flex flex-col gap-4">
      <form className="flex gap-2">
        <input
          placeholder="ID do módulo (opcional)"
          className="flex-1 bg-amber-50 text-emerald-950 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
        <button
          className="flex justify-center items-center bg-amber-50 px-2 py-2 rounded-md border border-emerald-900 transition hover:[background-color:#FFC300] cursor-pointer"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            irParaRemapeamento();
          }}
        >
          <ArrowRight color="black" />
        </button>
      </form>

      <button
        className="w-full bg-amber-50 text-emerald-950 font-bold py-2 rounded-md hover:[background-color:#FFC300] transition ease-in-out duration-150 cursor-pointer"
        type="button"
        onClick={irParaMapeamento}
      >
        Novo Mapeamento
      </button>
    </div>
  );
}
