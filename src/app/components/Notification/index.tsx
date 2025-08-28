interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export const Notification = ({ type, message, onClose }: NotificationProps) => {
  const isError = type === 'error';
  
  return (
    <div className="flex flex-col gap-2 w-full text-[10px] sm:text-xs z-50">
      <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#fffffffc] px-[10px]">
        <div className="flex gap-2">
          <div className={`${isError ? 'text-[#d65563]' : 'text-[#4ade80]'} bg-white/5 backdrop-blur-xl p-1 rounded-lg`}>
            {isError ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div>
            <p className="text-blue-950">{message}</p>
            <p className="text-gray-500">
              {isError ? 'Por favor, tente novamente' : 'Operação concluída com sucesso'}
            </p>
          </div>
        </div>
        <button
          className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear cursor-pointer"
          onClick={onClose}
          aria-label="Fechar notificação"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};