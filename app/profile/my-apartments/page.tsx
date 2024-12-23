'use client';
import Header from '@/layouts/Header';
import { IoHomeOutline } from 'react-icons/io5';
import ApartmentsComponent from '@/components/profile/pages/ApartmentsComponent';
import { useTranslation } from 'react-i18next';
import { BackToButton } from '../../../src/components/ui/button/BackToButton';

const MyApartments: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-light-secondary dark:bg-dark-background overflow-hidden min-h-screen flex flex-col">
      <Header />
      <div className="self-start px-4 mt-16 md:px-24">
        <BackToButton path="/profile" />
      </div>
      <section className="bg-light-secondary dark:bg-dark-background flex gap-4 flex-col items-start w-full pt-8 px-4 sm:flex-row sm:justify-between sm:items-center md:px-24">
        <h1 className="text-light-primary dark:text-dark-primary font-bold text-[28px] sm:text-[36px]">
          {t('myApartments.title')}
        </h1>
        <button className="bg-default-color max-w-sm w-full sm:w-[210px] font-bold text-[16px] text-white h-[36px] rounded-[7px] flex justify-center items-center gap-2">
          <IoHomeOutline className="w-[20px] h-[20px]" />
          {t('myApartments.newApartmentBtn')}
        </button>
      </section>

      <section className="px-4 mt-6 md:px-24">
        <ApartmentsComponent />
      </section>
    </div>
  );
};

export default MyApartments;
