import { useState, useRef } from 'react';

interface Props {
  length: number;
  onComplete: (code: string) => void;
}
export const VerificationCodeInput: React.FC<Props> = ({
  length,
  onComplete,
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allows digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit) && newCode.join('').length === length) {
      onComplete(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0 && !code[index]) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center my-8">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e.key)}
          className="w-12 h-12 text-center text-xl border rounded-md focus:border-default-color focus:ring-1 focus:ring-default-color text-black"
        />
      ))}
    </div>
  );
};
