"use client"
import { useSearchParams } from "next/navigation";
import BuildeForm from "../components/BuildeForm";
import Cabecalho from "../components/Cabecalho";
import { useApiService } from "../hooks/useApiService";
import { transformModuloToDisplayValues } from "../utils/moduloTransformer";
import { useEffect, useState } from "react";

export default function Remapeamento() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('id');
  const { checkModuleExists } = useApiService();

  const [deviceValues, setDeviceValues] = useState(transformModuloToDisplayValues(null));
  const [loading, setLoading] = useState(!!moduleId);

  useEffect(() => {
    const fetchModuloData = async () => {
      if (!moduleId) return;

      setLoading(true);
      try {
        const modulo = await checkModuleExists(moduleId);
        const displayValues = transformModuloToDisplayValues(modulo);
        setDeviceValues(displayValues);
      } catch (error) {
        console.error('Erro ao buscar módulo:', error);
        setDeviceValues(transformModuloToDisplayValues(null));
      } finally {
        setLoading(false);
      }
    };

    fetchModuloData();
  }, [moduleId, checkModuleExists]);

  return (
    <div className="flex w-full h-screen">
      <Cabecalho />
      <section className="flex flex-col w-1/2 h-full bg-green-700 p-6 gap-6">
        <h2 className="text-amber-50 font-bold text-2xl text-center">Remapeamento</h2>
        <BuildeForm
          initialValues={deviceValues} 
          loading={loading}
        />
      </section>
    </div>
  );
}
