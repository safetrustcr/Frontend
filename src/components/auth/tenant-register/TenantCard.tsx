import { TenantRegister } from './TenantRegister';

const TenantCard = () => {
  return (
    <div className="flex justify-start items-center min-h-screen bg-white sm:bg-cover sm:bg-center sm:bg-[url('/img/background.png')]">
      <div className="bg-white p-8 rounded-lg w-full max-w-md ml-0 md:ml-10 lg:ml-20 dark:bg-dark-surface">
        <TenantRegister />
      </div>
    </div>
  );
};

export default TenantCard;
