import { useCallback } from "react";

export interface Modulo {
  id: string;
  e3Lib: string;
  nome: string;
  tipoModulo: number;
  subtipo: number;
  categoria: number;
  moduloPrincipalId: string | null;
}

export class ApiServiceError extends Error {
  constructor(message: string, public readonly statusCode?: number) {
    super(message);
    this.name = 'ApiServiceError';
  }
}

export const useApiService = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7084';

  const checkModuleExists = useCallback(async (moduloId: string): Promise<Modulo> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Modulo/${moduloId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 404) {
        throw new ApiServiceError('Módulo não encontrado', 404);
      }

      if (!response.ok) {
        throw new ApiServiceError(`Erro HTTP: ${response.status}`, response.status);
      }

      return await response.json();
      
    } catch (error) {
      if (error instanceof ApiServiceError) {
        throw error;
      }
      throw new ApiServiceError('Falha ao verificar existência do módulo');
    }
  }, [API_BASE_URL]);

  return { checkModuleExists };
};