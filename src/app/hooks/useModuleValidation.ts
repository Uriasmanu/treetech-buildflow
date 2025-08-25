'use client';

import { useState } from "react";
import { useApiService } from "./useApiService";

interface Notification {
    type: 'success' | 'error';
    message: string;
}

interface UseModuleValidationReturn {
    moduleId: string;
    isLoading: boolean;
    notification: Notification | null;
    setModuleId: (id: string) => void;
    checkModule: (id: string) => Promise<boolean>;
    clearNotification: () => void;
    reset: () => void;
}

export const useModuleValidation = (): UseModuleValidationReturn => {
    const [moduleId, setModuleId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState<Notification | null>(null);

    const apiService = useApiService();

    const checkModule = async (id: string): Promise<boolean> => {
        if (!id.trim()) {
            setNotification({
                type: 'error', message: 'Por favor, insira um ID de módulo'
            });
            return false
        }
        setIsLoading(true);
        setNotification(null);

        try {
            const moduleExists = await apiService.checkModuleExists(id)

            if (moduleExists) {
                return true;
            } else {
                setNotification({ type: 'error', message: 'Módulo não encontrado' });
                return false;
            }
        } catch (error) {
            console.error('Erro ao verificar módulo:', error);
            setNotification({
                type: 'error',
                message: error instanceof Error ? error.message : 'Erro ao conectar com a API'
            });
            return false;
        } finally {
            setIsLoading(false);
        }
    };
    const clearNotification = () => {
        setNotification(null);
    };

    const reset = () => {
        setModuleId('');
        setIsLoading(false);
        setNotification(null);
    };

    return {
        moduleId,
        isLoading,
        notification,
        setModuleId,
        checkModule,
        clearNotification,
        reset
    };
};