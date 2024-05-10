'use client';
import React, { useCallback, useEffect, useMemo } from 'react';
import { AlertType } from '../../../hooks/alert/Alert';

type AlertProps = {
  message: string;
  onClose: () => void;
  variant: AlertType;
};

const Alert = ({ message, onClose, variant }: AlertProps) => {
  useEffect(() => {
    const closeAlert = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(closeAlert);
  }, [onClose]);

  const colorAlert = useCallback(() => {
    switch (variant) {
      case 'Success':
        return 'border-green-400 bg-green-100 text-green-700';

      case 'Error':
        return 'border-red-400 bg-red-100 text-red-700';

      case 'Warning':
        return 'border-yellow-400 bg-yellow-100 text-yellow-700';

      default:
        return 'border-yellow-400 bg-yellow-100 text-yellow-700';
    }
  }, [variant]);

  const colorSvg = useMemo(
    () =>
      variant === 'Error'
        ? 'text-red-500'
        : variant === 'Success'
          ? 'text-green-500'
          : 'text-yellow-500',
    [variant],
  );

  return (
    <div
      className={`${colorAlert()} relative  top-4 mx-auto  w-[90%]  rounded border  px-4 py-3 `}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
        <svg
          className={`h-6 w-6 fill-current ${colorSvg}`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => onClose()}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
