import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/store/userStore';
import { shortAddress } from '@/utils/shortAddress';
import { date2string } from '@/utils/date2string';

const AccountOverview: React.FC = () => {
  const { userWallets, user } = useUserStore();

  const { t } = useTranslation();
  return (
    <div className="mb-6 dark:bg-dark-surface2">
      <h2 className="text-lg font-semibold mb-2 text-black dark:text-gray-200">
        {t('profile.overView.title')}
      </h2>
      <table className="w-full text-left border border-gray-300 rounded-lg dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-dark-surface2">
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              {t('profile.overView.date')}
            </th>
            <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              {t('profile.overView.walletAddress')}
            </th>
            <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              {t('profile.overView.email')}
            </th>
            <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              {t('profile.overView.action')}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-dark-surface">
          {userWallets.map((wallet) => (
            <tr key={wallet.wallet_address}>
              <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {date2string(wallet.created_at) || '20/09/2022'}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {shortAddress(wallet.wallet_address) || 'XMD...22DR'}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {user?.email || 'randalVciano@gmail.com'}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                <button className="text-gray-500">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountOverview;
