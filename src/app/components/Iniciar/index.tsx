"use client"
import { useModuleValidation } from "@/app/hooks/useModuleValidation";
import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Notification } from "../Notification";
import { ModuleIdInput } from "../ModuleIdInput";

export default function Iniciar() {
  const router = useRouter();

  const {
    moduleId,
    isLoading,
    notification,
    setModuleId,
    checkModule,
    clearNotification
  } = useModuleValidation();

  const handleNavigateToRemapping = (id: string) => {
    router.push(`/remapeamento?id=${id}`);
  };

  const handleNavigateToMapping = () => {
    router.push("/mapeamento");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const moduleExists = await checkModule(moduleId);
    if (moduleExists) {
      handleNavigateToRemapping(moduleId);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg shadow-md p-6 flex flex-col gap-4">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <ModuleIdInput
          value={moduleId}
          onChange={setModuleId}
          disabled={isLoading}
          placeholder="ID do módulo (opcional)"
        />
        <button
          className="flex justify-center items-center bg-amber-50 px-2 py-2 rounded-md border border-emerald-900 transition hover:[background-color:#FFC300] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <ArrowRight color="black" />
          )}
        </button>

      </form>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={clearNotification}
        />
      )}

      <button
        className="w-full bg-amber-50 text-emerald-950 font-bold py-2 rounded-md hover:[background-color:#FFC300] transition ease-in-out duration-150 cursor-pointer"
        type="button"
        onClick={handleNavigateToMapping}
      >
        Novo Mapeamento
      </button>
    </div>
  );
}
