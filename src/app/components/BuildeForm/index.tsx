'use client';
import Image from "next/image";
import logo from "../../../../public/image/logo.png"
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useApiService } from "@/app/hooks/useApiService";
import { transformModuloToDisplayValues } from "@/app/utils/moduloTransformer";


export default function BuildeForm() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('id');
  const { checkModuleExists } = useApiService();
  
  const [deviceValues, setDeviceValues] = useState(transformModuloToDisplayValues(null));
  const [loading, setLoading] = useState(!!moduleId);

  // Campos editáveis - agora inicializados com valores da API
  const [versaoFirmware, setVersaoFirmware] = useState("");
  const [tagMapa, setTagMapa] = useState("");
  const [protocolo, setProtocolo] = useState("");
  const [caminhoMapa, setCaminhoMapa] = useState("");
  const [caminhoDestino, setCaminhoDestino] = useState("");

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

  const deviceData = {
    id: "Id do modulo",
    e3lib: "E3Lib do IED",
    nome: "Nome do IED",
    protocolo: "Protocolo",
    nomeLib: "Nome LIB E3",
    versaoFirmware: "Versão de Firmware",
    tagMapa: "Tag do Mapa",
    tipoModulo: "Tipo do Módulo",
    subtipo: "Subtipo",
    categoria: "Categoria",
    moduloPrincipal: "Módulo Principal ID",
    caminhoMapa: "Caminho do Mapa",
    caminhoDestino: "Caminho de Destino"
  };

    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-2 items-center w-[80%] max-md:max-w-full mb-10">
                    <div
                        className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full"
                    >
                        <div
                            className="flex relative flex-col justify-center self-stretch  h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]"
                        >
                            <div className="flex items-center justify-center h-[70px] w-[70px] rounded-[16px] overflow-hidden">
                                <Image
                                    src={logo}
                                    alt="Logo Treetech"
                                    width={70}
                                    height={70}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col text-1xl self-stretch my-auto min-w-[240px]">
                            <div className="text-base text-gray-800">{deviceValues.e3lib}</div>
                            <div className="text-sm text-gray-500">
                                {deviceValues.nome}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-5">
                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[35px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.nomeLib}
                            value={deviceValues.nomeLib}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.nomeLib}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.tipoModulo}
                            value={deviceValues.tipoModulo}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.tipoModulo}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.subtipo}
                            value={deviceValues.subtipo}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.subtipo}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="phone"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.categoria}
                            value={deviceValues.categoria}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.categoria}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="phone"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.moduloPrincipal}
                            value={deviceValues.moduloPrincipal}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.moduloPrincipal}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.versaoFirmware}
                            value={versaoFirmware}
                            onChange={(e) => setVersaoFirmware(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.versaoFirmware}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.tagMapa}
                            value={tagMapa}
                            onChange={(e) => setTagMapa(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.tagMapa}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="phone"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.protocolo}
                            value={protocolo}
                            onChange={(e) => setProtocolo(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.protocolo}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="phone"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.caminhoMapa}
                            value={caminhoMapa}
                            onChange={(e) => setCaminhoMapa(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.caminhoMapa}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="phone"
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.caminhoDestino}
                            value={caminhoDestino}
                            onChange={(e) => setCaminhoDestino(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.caminhoDestino}
                        </label>
                    </div>
                </div>

                <div className="sm:flex sm:flex-row-reverse flex gap-4">
                    <button
                        className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
                        type="button"
                    >
                        <div className="flex gap-2 items-center">Savar</div>
                    </button>
                </div>
            </div>

        </div>
    )
}