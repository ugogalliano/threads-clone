'use client';
import React, { useCallback, useContext } from 'react';
import { ReactNode, createContext, useState } from 'react';
import { AlertWrapper } from './AlertWrapper';
import Alert from '@/components/shared/alert/Alert';

export type AlertType = 'Success' | 'Error' | 'Warning';

type AlertState = {
  type: AlertType;
  message: string;
};

type AlertContext = {
  showAlert: (type: AlertType, message: string) => void;
};

type AlertContextProvider = {
  children: ReactNode;
};

const AlertContext = createContext<AlertContext | null>(null);

export const AlertContextProvider: React.FC<AlertContextProvider> = ({
  children,
}) => {
  const [alertMessage, setAlertMessage] = useState<AlertState[]>([]);

  const hideAlert = useCallback((index: number) => {
    setAlertMessage((prev) => prev.filter((_, i) => i != index));
  }, []);

  const showAlert = useCallback(
    (type: AlertType, message: string) => {
      const messageToUpdate: AlertState = {
        type,
        message,
      };
      setAlertMessage((prev) => [...prev, messageToUpdate]);
    },
    [alertMessage],
  );

  const contextValue: AlertContext = {
    showAlert,
  };

  return (
    <AlertContext.Provider value={contextValue}>
      <AlertWrapper>
        {alertMessage.map((alert, index) => (
          <Alert
            message={alert.message}
            onClose={() => hideAlert(index)}
            variant={alert.type}
            key={index}
          />
        ))}
      </AlertWrapper>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider');
  }
  return context;
};
