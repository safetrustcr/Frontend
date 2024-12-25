import Image from 'next/image';

interface PasswordHeaderProps {
  title: string;
  subtitle: string;
}

export function PasswordHeader({ title, subtitle }: PasswordHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-16 h-16 bg-default-color rounded-full flex items-center justify-center mb-4">
        <Image
          src="/img/icon.svg"
          alt="Password Icon"
          width={32}
          height={32}
          priority
        />
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-black dark:text-gray-200">
        {title}
      </h1>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base dark:text-gray-200">
        {subtitle}
      </p>
    </div>
  );
}
