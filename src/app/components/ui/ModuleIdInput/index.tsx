import { InputHTMLAttributes } from "react";

interface ModuleIdInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
}

export const ModuleIdInput = ({ value, onChange, ...props }: ModuleIdInputProps) => {
    return (
        <input
            {...props}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 bg-amber-50 text-emerald-950 border-0 rounded-md p-2 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
        />
    )
}