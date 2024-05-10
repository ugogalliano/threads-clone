import React, { ReactNode } from 'react';

type AlertWrapperProps = {
  children: ReactNode;
};

export const AlertWrapper: React.FC<AlertWrapperProps> = ({ children }) => (
  <div className="fixed top-4 w-full">{children}</div>
);
