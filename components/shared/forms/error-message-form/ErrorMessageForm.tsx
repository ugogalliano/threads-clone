import React from 'react';

interface ErrorFormMessage {
  children?: string;
}
const ErrorFormMessage = (props: ErrorFormMessage) => {
  return <div className="mt-1 uppercase text-red-500">{props.children}</div>;
};

export default ErrorFormMessage;
