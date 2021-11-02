import React, {
  ReactElement,
} from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
    name: string;
    state: string;
    onClick: (value: string) => void;
}

const OrderTableHead = ({
  name, onClick, state,
}: Props): ReactElement => (
  <button type="button" onClick={() => onClick(state === name ? `${name}_desc` : name)} className="mt-2 flex items-center">
    {name.charAt(0).toUpperCase() + name.slice(1)}
    {
        state === name ? (
          <ChevronDownIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
        ) : (
          state === `${name}_desc` && (
            <ChevronUpIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
          ))
    }
  </button>
);

export default OrderTableHead;
