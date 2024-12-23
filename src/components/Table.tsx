import React from 'react';
import {
  Card,
  Typography,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
} from '@material-tailwind/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { DataTableProps, TableData } from '@/@types/table';
import { useTranslation } from 'react-i18next';

export function Table({
  data,
  onActionClick,
}: {
  data: TableData[];
  onActionClick: (action: string, item: TableData) => void;
}) {
  const { t } = useTranslation();
  const TABLE_HEAD = [
    t('interestedPeople.table.columnOne'),
    t('interestedPeople.table.columnTwo'),
    t('interestedPeople.table.columnThree'),
    t('interestedPeople.table.columnFour'),
    t('interestedPeople.table.columnFive'),
    t('interestedPeople.table.columnSix'),
    t('interestedPeople.table.columnSeven'),
  ];

  return (
    <Card className="w-full bg-transparent shadow-none" {...({} as any)}>
      <CardBody className="overflow-x-auto px-0" {...({} as any)}>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className={`${index === 0 ? 'rounded-tl-xl' : index === TABLE_HEAD.length - 1 && 'rounded-tr-xl'} 
                                             border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-[#6565641F]`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold text-black leading-none opacity-70 dark:text-gray-300"
                    {...({} as any)}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dark:bg-dark-surface2">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={TABLE_HEAD.length}
                  className="p-4 text-center text-gray-500"
                >
                  {t('interestedPeople.table.notFound')}
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-blue-gray-50';

                return (
                  <tr key={item.id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-400"
                        {...({} as any)}
                      >
                        {item.id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-400"
                        {...({} as any)}
                      >
                        {item.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-400"
                        {...({} as any)}
                      >
                        {item.phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-400"
                        {...({} as any)}
                      >
                        {item.wallet.slice(0, 3) +
                          '...' +
                          item.wallet.slice(-3)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-400"
                        {...({} as any)}
                      >
                        {item.offerDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography
                          variant="small"
                          className={`font-medium ${
                            item.status === 'rejected'
                              ? 'text-red-600 bg-red-200'
                              : item.status === 'pending'
                                ? 'text-yellow-600 bg-yellow-200'
                                : 'text-light-blue-600 bg-light-blue-200'
                          } px-2  rounded-full`}
                          {...({} as any)}
                        >
                          {item.status === 'accepted' ? (
                            <>{t('interestedPeople.table.state.stateOne')}</>
                          ) : item.status === 'rejected' ? (
                            <>{t('interestedPeople.table.state.stateTwo')}</>
                          ) : (
                            <>{t('interestedPeople.table.state.stateThree')}</>
                          )}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Menu placement="left-start">
                        <Tooltip content="Actions">
                          <MenuHandler>
                            <IconButton
                              variant="text"
                              color="blue-gray"
                              {...({} as any)}
                            >
                              <EllipsisHorizontalIcon className="h-10 w-10 text-default-color" />
                            </IconButton>
                          </MenuHandler>
                        </Tooltip>
                        <MenuList {...({} as any)}
                          className="dark:bg-dark-surface"
                        >
                          <MenuItem
                            onClick={() => onActionClick('accept', item)}
                            {...({} as any)}
                          >
                            {t('interestedPeople.table.actionList.actionOne')}
                          </MenuItem>
                          <MenuItem
                            onClick={() => onActionClick('reject', item)}
                            {...({} as any)}
                          >
                            {t('interestedPeople.table.actionList.actionTwo')}
                          </MenuItem>
                          <MenuItem
                            onClick={() => onActionClick('pend', item)}
                            {...({} as any)}
                          >
                            {t('interestedPeople.table.actionList.actionThree')}
                          </MenuItem>
                          <MenuItem
                            onClick={() => onActionClick('edit', item)}
                            {...({} as any)}
                          >
                            {t('interestedPeople.table.actionList.actionFour')}
                          </MenuItem>
                          <MenuItem
                            onClick={() => onActionClick('delete', item)}
                            {...({} as any)}
                          >
                            {t('interestedPeople.table.actionList.actionFive')}
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
