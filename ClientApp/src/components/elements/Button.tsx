import React, { ReactElement } from 'react';

export interface ButtonProps {
    children?: React.ReactNode;
    color: 'danger' | 'primary' | 'light' | 'success' | 'warning';
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    submitting?: boolean;
    submit?: boolean
}
type ComponentProps = Omit<JSX.IntrinsicElements['button'], 'ref' | keyof ButtonProps> & ButtonProps;

const colors = {
  danger: 'border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  light: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
  primary: 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  success: 'border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
  warning: 'border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300',
};

const sizes = {
  xsmall: 'px-2.5 py-1.5 text-xs',
  small: 'px-3 py-2 text-sm leading-4',
  medium: 'px-4 py-2 text-sm',
  large: 'px-4 py-2 text-base',
  xlarge: 'px-6 py-3 text-base',
};

const Button = ({ children, ...props }: ComponentProps): ReactElement => (
  <>
    {
      props.submitting ? (
        <button
          type="button"
          tabIndex={props.tabIndex}
          className={`inline-flex items-center border font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-wait opacity-50 ${sizes[props.size]} ${colors[props.color]} ${props.className}`}
          disabled
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {' '}
          { children }
        </button>
      ) : (
        <button
          type={props.submit ? 'submit' : 'button'}
          tabIndex={props.tabIndex}
          className={`inline-flex items-center border font-medium rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 ${sizes[props.size]} ${colors[props.color]} ${props.className}`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {children}
        </button>
      )
    }
  </>
);

export default Button;
