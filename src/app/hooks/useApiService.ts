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

export const useApiService = () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7084';

     const checkModuleExists = useCallback(async (moduloId: string): Promise<Modulo | null> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/Modulo/${moduloId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 404) {
                return null
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const modulo: Modulo = await response.json();
            return modulo;

        } catch (error) {
            console.error('Error checking module:', error);
            throw new Error('Failed to check module existence');
        }
    }, [API_BASE_URL]);

    return {
        checkModuleExists,
    };
};