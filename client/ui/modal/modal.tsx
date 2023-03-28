'use client';

import { ReactNode } from 'react';
import { CtaButton } from '../cta-button';

export type ModalProps = {
  title: string;
  body: string | ReactNode;
  isOpen: boolean;
  buttons: { children: ReactNode; onClick: () => void; type: 'normal' | 'danger' | 'warning' | 'cta' }[];
  onBackdropClick?: () => void;
};

const Modal = ({ title, body, isOpen, buttons, onBackdropClick = () => {} }: ModalProps): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <div onClick={onBackdropClick} className="fixed inset-0 z-10 overflow-y-auto border">
      <div className="block min-h-screen items-end justify-center p-0 px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-zinc-900 opacity-75"></div>
        </div>
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="my-8 inline-block w-full max-w-lg transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all dark:bg-zinc-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white p-6 px-4 pt-5 pb-4 dark:bg-zinc-800">
            <div className="flex items-start">
              <div className="mt-3 w-full text-left sm:mt-0 sm:ml-4">
                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white" id="modal-headline">
                  {title}
                </h3>

                <div className="mt-2">
                  {typeof body === 'string' ? (
                    <p className="text-sm text-slate-900 opacity-60 dark:text-white">{body}</p>
                  ) : (
                    body
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse bg-white px-4 py-3 dark:bg-zinc-800">
            {buttons.map((btn, index) => {
              if (btn.type === 'cta') {
                return (
                  <CtaButton key={index} variant="small" action={btn.onClick}>
                    {btn.children}
                  </CtaButton>
                );
              }
              return (
                <button
                  key={index}
                  onClick={btn.onClick}
                  type="button"
                  className="rounded border border-slate-900 bg-transparent py-2 px-4 font-semibold text-slate-900 hover:border-transparent hover:bg-green-500 hover:text-white dark:border-white dark:text-white"
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
