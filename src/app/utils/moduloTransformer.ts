import { Modulo } from "@/app/hooks/api/useApiService";

export interface DeviceDisplayValues {
  id: string;
  e3lib: string;
  nome: string;
  nomeLib: string;
  tipoModulo: string;
  subtipo: string;
  categoria: string;
  moduloPrincipal: string;
}

export const transformModuloToDisplayValues = (modulo: Modulo | null): DeviceDisplayValues => {
  if (!modulo) {
    return getEmptyDisplayValues();
  }

  return {
    id: modulo.id || "",
    e3lib: modulo.e3Lib || "",
    nome: modulo.nome || "",
    nomeLib: modulo.e3Lib || "",
    tipoModulo: formatTipoModulo(modulo.tipoModulo),
    subtipo: formatSubtipo(modulo.subtipo),
    categoria: formatCategoria(modulo.categoria),
    moduloPrincipal: modulo.moduloPrincipalId || "N/A",
  };
};

const formatTipoModulo = (tipo: number): string => {
  return tipo.toString();
};

const formatSubtipo = (subtipo: number): string => {
  return subtipo.toString();
};

const formatCategoria = (categoria: number): string => {
  return categoria.toString(); 
};

const getEmptyDisplayValues = (): DeviceDisplayValues => ({
  id: "",
  e3lib: "",
  nome: "",
  nomeLib: "",
  tipoModulo: "",
  subtipo: "",
  categoria: "",
  moduloPrincipal: "",
});