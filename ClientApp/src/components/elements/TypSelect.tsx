import React, { Fragment, ReactElement } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Listbox, Transition } from '@headlessui/react';
import { FolienTypList } from '../../api/getItems';

export interface Props {
    onChange: (value: string) => void,
    value: string,
}

const TypSelect = ({ ...props }: Props): ReactElement => (
  <Listbox value={props.value} onChange={props.onChange}>
    <Listbox.Label className="block text-sm font-medium text-gray-700">Typ</Listbox.Label>
    <div className="mt-1 relative">
      <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span className="block truncate">{props.value === '' ? 'Alle' : props.value}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {FolienTypList.map((item) => (
            <Listbox.Option
              key={item}
              className={`cursor-default select-none relative py-2 pl-3 pr-9 ${item === props.value ? 'text-white bg-indigo-600' : 'text-gray-900'}`}
              value={item}
            >
              <span className={`block truncate ${item === props.value ? 'font-semibold' : 'font-normal'}`}>
                {item}
              </span>

              {item === props.value && (
                <span
                  className={`absolute inset-y-0 right-0 flex items-center pr-4 ${item === props.value ? 'text-white' : 'text-indigo-600'}`}
                >
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);

export default TypSelect;
