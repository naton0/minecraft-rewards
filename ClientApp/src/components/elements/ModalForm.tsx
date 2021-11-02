import React, {
  ReactElement, ElementType, useEffect, useState,
} from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';
import Modal from './Modal';
import Button, { ButtonProps } from './Button';
import MiniBanner from './MiniBanner';

interface ButtonAdditionalProps {
  text: string;
  key: string;
  onClick?: () => void;
}

interface Props {
  children: React.ReactNode;
  headline: string;
  buttons?: Array<ButtonSetting>;
  open?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  submitting?: boolean;
  className?: string;
  banners?: Array<{
    icon: ElementType,
    text: string,
    color: 'danger' | 'primary' | 'light' | 'success' | 'warning',
    onClose: () => void | false
  }>
}

export type ButtonSetting = ButtonProps & ButtonAdditionalProps;

const ModalForm = ({ children, headline, ...props }: Props): ReactElement => {
  const [openState, setOpenState] = useState(props.open);

  function generateKey(pre: string) : string {
    return `${pre.replace(/[^\w\s!?]/g, '')}_${new Date().getTime()}`;
  }

  useEffect(() => {
    setOpenState(props.open);
  }, [props.open]);

  return (
    <Modal open={openState} onClose={props.onClose} className={props.className}>
      <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setOpenState(false)}
        >
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
      >
        <div className="sm:block">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
              { headline }
            </Dialog.Title>
            {
            props.banners?.map((banner) => (
              <MiniBanner key={`banner${generateKey(banner.text)}`} onClose={banner.onClose} color={banner.color} icon={banner.icon}>{ banner.text }</MiniBanner>
            ))
          }
            <div className="mt-2">
              {
                children
            }
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          {props.buttons?.map((button) => (
            <Button key={button.key} submit={button.submit} color={button.color} size={button.size} submitting={props.submitting} onClick={button.onClick} className="ml-2">
              { button.text }
            </Button>
          ))}
        </div>
      </form>
    </Modal>
  );
};

ModalForm.defaultProps = {
  buttons: [],
  open: false,
  submitting: false,
  banners: [],
  className: '',
};

export default ModalForm;
