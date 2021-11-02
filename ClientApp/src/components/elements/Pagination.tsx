import React, { ReactElement } from 'react';
import Button from './Button';

interface Props {
  count: number,
  page: number,
  setPage: (value: number) => void
}

const Pagination = ({ count, page, setPage }: Props): ReactElement => {
  const maxPage = Math.ceil(count / 25);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{page * 25 + 1}</span>
            {' '}
            bis
            {' '}
            <span className="font-medium">{count < (25 * page + 25) ? count : 25 * page + 25}</span>
            {' '}
            von
            {' '}
            <span className="font-medium">{count}</span>
            {' '}
            Ergebnissen
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          {
            page > 0 && <Button className="mr-2" color="light" size="medium" onClick={() => setPage(page - 1)}>Zurück</Button>
          }
          {
            page < (maxPage - 1) && <Button color="light" size="medium" onClick={() => setPage(page + 1)}>Weiter</Button>
          }
        </div>
      </div>
    </div>
  );
};
export default Pagination;
