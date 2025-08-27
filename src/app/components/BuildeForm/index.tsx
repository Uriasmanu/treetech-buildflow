'use client';
import Image from "next/image";
import logo from "../../../../public/image/logo.png"
import { useState, useEffect } from "react";

interface BuildeFormProps {
    initialValues?: {
        e3lib?: string;
        nome?: string;
        tipoModulo?: string;
        subtipo?: string;
        categoria?: string;
        versaoFirmware?: string;
        tagMapa?: string;
        moduloPrincipal?: string;
        protocolo?: string;
        caminhoMapa?: string;
        caminhoDestino?: string;
    };
    loading?: boolean;
    onSave?: (formData: any) => void;
}


interface TreetechSensor {
    codigo: string;
    imagem: string;
}

const sensoresTreetech: TreetechSensor[] = [
    { codigo: "AVR_V1", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-AVR.png" },
    { codigo: "AVR_V2", imagem: "https://treetech.com.br/wp-content/uploads/2025/08/sensor-AVR-v2.png" },
    { codigo: "BM", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-BM.png" },
    { codigo: "DI", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-DI.png" },
    { codigo: "DM", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-DM.png" },
    { codigo: "GMM", imagem: "https://treetech.com.br/wp-content/uploads/2016/06/sensor-GMM-MMI.png" },
    { codigo: "GMP", imagem: "https://treetech.com.br/wp-content/uploads/2021/11/sensor-GMP.png" },
    { codigo: "IDM", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-IDM.png" },
    { codigo: "MBR", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-MBR.png" },
    { codigo: "MO", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-MO.png" },
    { codigo: "PI", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-PI.png" },
    { codigo: "PS", imagem: "https://treetech.com.br/wp-content/uploads/2016/06/sensor-PS.png" },
    { codigo: "RR", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-RR.png" },
    { codigo: "SD", imagem: "https://treetech.com.br/wp-content/uploads/2025/05/sd-sensor.jpg" },
    { codigo: "SDG", imagem: "https://treetech.com.br/wp-content/uploads/2017/11/sensor-SDG.png" },
    { codigo: "SDM", imagem: "https://treetech.com.br/wp-content/uploads/2019/06/sensor-IDM-SDM.png" },
    { codigo: "SDT", imagem: "https://treetech.com.br/wp-content/uploads/2018/07/sensor-SDT.png" },
    { codigo: "SDV", imagem: "https://treetech.com.br/wp-content/uploads/2018/07/sensor-SDV.png" },
    { codigo: "SPS", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-SPS.png" },
    { codigo: "TI", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-TI.png" },
    { codigo: "TM", imagem: "https://treetech.com.br/wp-content/uploads/2024/01/TM-novo-v2.png" },
    { codigo: "TM1", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-TM1.png" },
    { codigo: "TM2", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-TM1.png" },
    { codigo: "TMV", imagem: "https://treetech.com.br/wp-content/uploads/2018/05/sensor-TMV-desc.png" },
    { codigo: "TS", imagem: "https://treetech.com.br/wp-content/uploads/2014/10/sensor-TS.png" }
];

// Arrays de opções
const tipoModuloOptions = [
    { value: 0, label: "Indefinido" },
    { value: 1, label: "Supervisao" },
    { value: 2, label: "Engenharia" },
    { value: 3, label: "Geral" },
    { value: 4, label: "Auxiliar" },
    { value: 5, label: "Componente" },
];

const subtipoOptions = [
    { value: 0, label: "Indefinido" },
    { value: 1, label: "Tmv" },
    { value: 2, label: "ComponenteTemperaturaTmv" },
    { value: 3, label: "ComponenteRegulacaoTensaoTmv" },
    { value: 4, label: "ConjuntoRegulacaoTmv" },
    { value: 5, label: "Tm1" },
    { value: 6, label: "Tm2" },
    { value: 7, label: "Dtm" },
    { value: 8, label: "Lad" },
    { value: 9, label: "BM" },
    { value: 10, label: "Gmm" },
    { value: 11, label: "Gmp" },
    { value: 12, label: "MO" },
    { value: 13, label: "Idx" },
    { value: 14, label: "Ids" },
    { value: 15, label: "Idm" },
    { value: 16, label: "Dm1" },
    { value: 17, label: "Dm2" },
    { value: 18, label: "Avr" },
    { value: 19, label: "ConjuntoRegulacaoAvr" },
    { value: 20, label: "Sps" },
    { value: 21, label: "TS" },
    { value: 22, label: "PI" },
    { value: 23, label: "TransdutorDigital" },
    { value: 24, label: "Cromatografia" },
    { value: 25, label: "FisicoQuimico" },
    { value: 26, label: "ManutencaoResfriamento" },
    { value: 27, label: "AguaPapel" },
    { value: 28, label: "DiferencialTemperaturaComutador" },
    { value: 29, label: "EficienciaResfriamento" },
    { value: 30, label: "EnvelhecimentoIsolacao" },
    { value: 31, label: "GradienteFinalEnrolamento" },
    { value: 32, label: "ManutencaoComutador" },
    { value: 33, label: "SimulacaoCarga" },
    { value: 34, label: "ComponenteConcentradorTmv" },
    { value: 35, label: "Vamp321" },
    { value: 36, label: "Hydran" },
    { value: 37, label: "Sel2414" },
    { value: 38, label: "DI" },
    { value: 39, label: "Lap" },
];

const categoriaOptions = [
    { value: 0, label: "Indefinido" },
    { value: 1, label: "Integral" },
    { value: 2, label: "Componentizado" },
];

const renderOptions = (options: { value: number; label: string }[]) =>
    options.map(opt => (
        <option key={opt.value} value={opt.value}>
            {opt.value} ({opt.label})
        </option>
    ));


export default function BuildeForm({ initialValues = {}, loading = false, onSave }: BuildeFormProps) {

    const [e3lib, setE3lib] = useState(initialValues.e3lib || "");
    const [nome, setNome] = useState(initialValues.nome || "");
    const [tipoModulo, setTipoModulo] = useState(initialValues.tipoModulo || "");
    const [subtipo, setSubtipo] = useState(initialValues.subtipo || "");
    const [categoria, setCategoria] = useState(initialValues.categoria || "");
    const [versaoFirmware, setVersaoFirmware] = useState(initialValues.versaoFirmware || "");
    const [tagMapa, setTagMapa] = useState(initialValues.tagMapa || "");
    const [moduloPrincipal, setModuloPrincipal] = useState(initialValues.moduloPrincipal || "");
    const [protocolo, setProtocolo] = useState(initialValues.protocolo || "");
    const [caminhoMapa, setCaminhoMapa] = useState(initialValues.caminhoMapa || "");
    const [caminhoDestino, setCaminhoDestino] = useState(initialValues.caminhoDestino || "");


    useEffect(() => {
        if (initialValues.e3lib !== undefined) setE3lib(initialValues.e3lib);
        if (initialValues.nome !== undefined) setNome(initialValues.nome);
        if (initialValues.tipoModulo !== undefined) setTipoModulo(initialValues.tipoModulo);
        if (initialValues.subtipo !== undefined) setSubtipo(initialValues.subtipo);
        if (initialValues.categoria !== undefined) setCategoria(initialValues.categoria);
        if (initialValues.versaoFirmware !== undefined) setVersaoFirmware(initialValues.versaoFirmware);
        if (initialValues.tagMapa !== undefined) setTagMapa(initialValues.tagMapa);
        if (initialValues.moduloPrincipal !== undefined) setModuloPrincipal(initialValues.moduloPrincipal);
        if (initialValues.protocolo !== undefined) setProtocolo(initialValues.protocolo);
        if (initialValues.caminhoMapa !== undefined) setCaminhoMapa(initialValues.caminhoMapa);
        if (initialValues.caminhoDestino !== undefined) setCaminhoDestino(initialValues.caminhoDestino);
    }, [initialValues]);

    const deviceData = {
        e3lib: "E3Lib do IED: GMPEST",
        nome: "Descrição do IED",
        protocolo: "Protocolo",
        versaoFirmware: "Versão de Firmware",
        tagMapa: "Tag do Mapa",
        tipoModulo: "Tipo do Módulo",
        subtipo: "Subtipo",
        categoria: "Categoria",
        moduloPrincipal: "Módulo Principal ID",
        caminhoMapa: "Caminho do Mapa",
        caminhoDestino: "Caminho de Destino"
    };

    // Função para determinar qual imagem exibir
    const getImagem = () => {
        if (!e3lib || e3lib.trim() === "") {
            return logo;
        }

        const textoE3Lib = e3lib.toUpperCase();
        const sensorEncontrado = sensoresTreetech.find(sensor =>
            textoE3Lib.includes(sensor.codigo.toUpperCase())
        );

        return sensorEncontrado ? sensorEncontrado.imagem : logo;
    };

    const imagemParaExibir = getImagem();

    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-2 items-center w-[80%] max-md:max-w-full mb-5">
                    <div
                        className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full"
                    >
                        <div
                            className="flex relative flex-col justify-center self-stretch  h-[60px] min-h-[60px] rounded-[16px] overflow-hidden w-[70px]"
                        >
                            <div className="flex items-center justify-center h-[60px] w-[60px] rounded-[16px] overflow-hidden">
                                <Image
                                    src={imagemParaExibir}
                                    alt={imagemParaExibir === logo ? "Logo Treetech" : "Imagem do Sensor"}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col text-1xl self-stretch my-auto min-w-[240px]">
                            <div className="text-base text-gray-800">{e3lib}</div>
                            <div className="text-sm text-gray-500">
                                {nome}
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
                            placeholder={deviceData.e3lib}
                            value={e3lib}
                            onChange={(e) => setE3lib(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.nome}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <input
                            type="text"
                            id="floating_outlined"
                            className="block w-full text-sm h-[35px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            placeholder={deviceData.nome}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.nome}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <select
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            value={tipoModulo}
                            onChange={(e) => setTipoModulo(e.target.value)}
                            required
                        >
                            <option value="" disabled>{deviceData.tipoModulo}</option>
                            {renderOptions(tipoModuloOptions)}
                        </select>

                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.tipoModulo}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <select
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            value={subtipo}
                            onChange={(e) => setSubtipo(e.target.value)}
                            required
                        >
                            <option value="" disabled>{deviceData.subtipo}</option>
                            {renderOptions(subtipoOptions)}
                        </select>
                        <label
                            htmlFor="floating_outlined"
                            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            {deviceData.subtipo}
                        </label>
                    </div>

                    <div id="input" className="relative">
                        <select
                            id="floating_outlined"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        >
                            <option value="" disabled>{deviceData.categoria}</option>
                            {renderOptions(categoriaOptions)}
                        </select>
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
                            value={moduloPrincipal}
                            onChange={(e) => setModuloPrincipal(e.target.value)}
                            required
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
                        className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-[#FFC300] hover:bg-green-700 font-bold border-violet-500-violet- text-emerald-950 cursor-pointer focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
                        type="button"
                    >
                        <div className="flex gap-2 items-center">Savar</div>
                    </button>
                </div>
            </div>

        </div>
    )
}