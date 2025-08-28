interface ResumoProps {
    data: {
        e3lib: string;
        nome: string;
        tipoModulo: string;
        subtipo: string;
        categoria: string;
        versaoFirmware: string;
        tagMapa: string;
        moduloPrincipal: string;
        protocolo: string;
        caminhoMapa: string;
        caminhoDestino: string;
    };
    onEditar: () => void;
}

export const Resumo = ({ data, onEditar }: ResumoProps) => {
    return (
        <div
            className="max-w-[80%] max-h-[80%] p-6  bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group z-10"
        >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <h2 className="text-lg font-semibold">Resumo das informações</h2>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 gap-1">
                    {[
                        { label: "Nome:", value: data.e3lib },
                        { label: "Descrição:", value: data.nome },
                        { label: "Tipo do Módulo:", value: data.tipoModulo },
                        { label: "Subtipo:", value: data.subtipo },
                        { label: "Categoria:", value: data.categoria },
                        { label: "Versão de Firmware:", value: data.versaoFirmware },
                        { label: "Tag do Mapa:", value: data.tagMapa },
                        { label: "Módulo Principal:", value: data.moduloPrincipal },
                        { label: "Protocolo:", value: data.protocolo },
                        { label: "Caminho do Mapa:", value: data.caminhoMapa },
                        { label: "Caminho de Destino:", value: data.caminhoDestino }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex justify-between items-center py-1 ${idx !== 10 ? 'border-b border-green-50' : ''}`}
                        >
                            <span className="font-light text-green-800 text-sm">{item.label}</span>
                            <span className="text-gray-700 text-sm text-right max-w-[50%] whitespace-nowrap overflow-hidden text-ellipsis">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        className="flex items-center cursor-pointer gap-2 px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-md hover:bg-orange-600 transition-all"
                        onClick={onEditar}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 20h9"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Editar
                    </button>

                    <button
                        className="flex items-center cursor-pointer gap-2 px-3 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-md hover:bg-emerald-700 transition-all"
                    >
                        Enviar
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12 3 4a60 60 0 0 1 18 8 60 60 0 0 1-18 8l3-8Zm0 0h8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
