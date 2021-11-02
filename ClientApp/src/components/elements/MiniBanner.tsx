import { XIcon } from '@heroicons/react/outline';
import React, {
  ReactElement, ElementType,
} from 'react';

interface Props {
  icon: ElementType,
  children: React.ReactNode,
  color: 'danger' | 'primary' | 'light' | 'success' | 'warning',
  onClose?: () => void | false,
}

const colors = {
  danger: 'border-transparent bg-red-600 text-white',
  light: 'border-gray-300 bg-white text-gray-700',
  primary: 'border-transparent bg-indigo-600 text-white',
  success: 'border-transparent bg-green-500 text-white',
  warning: 'border-transparent bg-yellow-400 text-white',
};

const MiniBanner = ({ children, onClose, ...props }: Props): ReactElement => (
  <div className={`p-2 rounded-lg shadow-lg ${colors[props.color]}`}>
    <div className="flex items-center justify-between flex-wrap">
      <div className="w-0 flex-1 flex items-center">
        <span className="flex p-2 rounded-lg bg-black bg-opacity-25">
          <props.icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className="ml-2 font-normal truncate">
          {children}
        </p>
      </div>
      {
        onClose && (
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
          <button
            type="button"
            className="-mr-1 flex p-2 rounded-md hover:bg-black hover:bg-opacity-20 focus:outline-none"
            onClick={() => onClose()}
          >
            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        )
      }
    </div>
  </div>
);

MiniBanner.defaultProps = {
  onClose: false,
};

export default MiniBanner;
