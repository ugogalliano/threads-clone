import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { Input } from '@/components/ui/input';
import ErrorFormMessage from '../error-message-form/ErrorMessageForm';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  function TextInput({ name, ...props }, ref) {
    const [field] = useField({ name });

    return (
      <>
        <label htmlFor={props.id || name} className=" text-white">
          {props.label}
        </label>
        <Input placeholder={props.label} ref={ref} {...field} {...props} />
        <ErrorMessage name={name} component={ErrorFormMessage} />
      </>
    );
  },
);

export default TextInput;
