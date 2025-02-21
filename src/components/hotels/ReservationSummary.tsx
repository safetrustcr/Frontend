import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
  const totalAmount = price + tax;

  return (
    <Card className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-gray-300">
          Reservation Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between dark:text-gray-400">
          <span>From</span>
          <span>{checkIn.toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between dark:text-gray-400">
          <span>To</span>
          <span>{checkOut.toLocaleDateString()}</span>
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
            Your price summary
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between dark:text-gray-400">
              <span>Price</span>
              <span>${price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between dark:text-gray-400">
              <span>+ VAT</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator className="my-2 dark:bg-gray-700" />
            <div className="flex justify-between font-semibold text-green-600 dark:text-green-500">
              <span>Total amount</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Button
          className="w-full dark:bg-default-color dark:text-white dark:hover:bg-default-color/90"
          size="lg"
        >
          Pay with wallet
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReservationSummary;
