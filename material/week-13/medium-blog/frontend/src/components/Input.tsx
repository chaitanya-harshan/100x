import type { ChangeEvent } from "react";

interface inputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

export const Input = ({ label, placeholder, onChange, type }: inputProps) => {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-3">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
