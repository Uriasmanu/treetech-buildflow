import { useCallback } from "react";

interface ApiResponse {
    sucess: boolean;
    data?: any;
    error?: string;
}

export const useApiService = () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7084';

    const checkModuleExists = useCallback(async (moduloId: string): Promise<boolean> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/Modulo/${moduloId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 404) {
                return false
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return true;
        } catch (error) {
            console.error('Error checking module:', error);
            throw new Error('Failed to check module existence');
        }
    }, [API_BASE_URL]);

    return {
        checkModuleExists,
    };
};