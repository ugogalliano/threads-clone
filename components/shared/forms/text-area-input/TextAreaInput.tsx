import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { Textarea } from '@/components/ui/textarea';
import ErrorFormMessage from '../error-message-form/ErrorMessageForm';

interface TextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  function TextAreaInput({ name, ...props }, ref) {
    const [field] = useField({ name });

    return (
      <>
        <label htmlFor={props.id || name} className=" text-white">
          {props.label}
        </label>
        <Textarea placeholder={props.label} ref={ref} {...field} {...props} />
        <ErrorMessage name={name} component={ErrorFormMessage} />
      </>
    );
  },
);

export default TextAreaInput;
