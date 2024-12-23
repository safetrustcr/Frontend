interface BoundedProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const Bounded = ({ className, title, children }: BoundedProps) => {
  return (
    <main className={`p-10 flex-grow ${className ?? ''}`}>
      <h2 className="font-bold text-3xl mb-10 text-light-primary dark:text-dark-primary">{title}</h2>
      {children}
    </main>
  );
};

export default Bounded;
