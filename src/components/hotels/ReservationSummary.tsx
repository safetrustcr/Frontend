import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

interface ReservationSummaryProps {
  hotelName: string;
  description: string;
  price: number;
  tax: number;
  checkIn: Date;
  checkOut: Date;
}

const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  hotelName,
  description,
  price,
  tax,
  checkIn,
  checkOut,
}) => {
  const { t } = useTranslation();
  const totalAmount = price + tax;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <Card className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-gray-300">
          {t('reservationSummary.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between dark:text-gray-400">
          <span>{t('reservationSummary.from')}</span>
          <span>{formatDate(checkIn)}</span>
        </div>
        <div className="flex justify-between dark:text-gray-400">
          <span>{t('reservationSummary.to')}</span>
          <span>{formatDate(checkOut)}</span>
        </div>
        <Separator className="my-4 dark:bg-gray-700" />
        <div>
          <h4 className="font-semibold mb-2 dark:text-gray-300">{hotelName}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <Separator className="my-4 dark:bg-gray-700" />
        <div>
          <h4 className="font-semibold mb-4 dark:text-gray-300">
            {t('reservationSummary.priceSummary')}
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between dark:text-gray-400">
              <span>{t('reservationSummary.price')}</span>
              <span>${price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between dark:text-gray-400">
              <span>{t('reservationSummary.vat')}</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator className="my-2 dark:bg-gray-700" />
            <div className="flex justify-between font-semibold text-green-600 dark:text-green-500">
              <span>{t('reservationSummary.totalAmount')}</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Button
          className="w-full dark:bg-default-color dark:text-white dark:hover:bg-default-color/90"
          size="lg"
        >
          {t('reservationSummary.payWithWallet')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReservationSummary;
