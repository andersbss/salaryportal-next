'use client';

import { ReactNode } from 'react';

export type ModalProps = {
  title: string;
  message: string;
  isOpen: boolean;
  buttons: { children: ReactNode; onClick: () => void; type: 'normal' | 'danger' | 'warning' }[];
  onBackdropClick?: () => void;
};

const Modal = ({ title, message, isOpen, buttons, onBackdropClick = () => {} }: ModalProps): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <div onClick={onBackdropClick} className="fixed z-10 inset-0 overflow-y-auto border">
      <div className="items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center block p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-zinc-900 opacity-75"></div>
        </div>
        <span className="inline-block align-middle h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="inline-block bg-white dark:bg-zinc-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white dark:bg-zinc-800 px-4 pt-5 pb-4 p-6">
            <div className="flex items-start">
              <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-white" id="modal-headline">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-slate-900 dark:text-white opacity-60">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 px-4 py-3 flex flex-row-reverse">
            {buttons.map((btn, index) => {
              return (
                <button
                  key={index}
                  onClick={btn.onClick}
                  type="button"
                  className="bg-transparent text-slate-900 dark:text-white hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-slate-900 dark:border-white hover:border-transparent rounded"
                >
                  {btn.children}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
