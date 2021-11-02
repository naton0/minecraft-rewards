import React, { ReactElement } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface InputProps {
    label: string;
    error?: false | {
        message: string
    };
}
type ComponentProps = Omit<JSX.IntrinsicElements['input'], 'ref' | keyof InputProps> & InputProps;

const Input = ({ ...props }: ComponentProps): ReactElement => (
  <div>
    <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
      { props.label }
    </label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        type="text"
        name={props.id}
        id={props.id}
        className={`block w-full pr-10 ${props.error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} focus:outline-none sm:text-sm rounded-md ${props.className}`}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        aria-invalid={!!props.error}
        aria-describedby={`${props.id}-error`}
        onChange={props.onChange}
      />
      {props.error
        && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
        )}
    </div>
    {props.error
      && (
      <p className="mt-2 text-sm text-red-600" id={`${props.id}-error`}>
        { props.error?.message }
      </p>
      )}
  </div>
);

Input.defaultProps = {
  error: false,
};

export default Input;
