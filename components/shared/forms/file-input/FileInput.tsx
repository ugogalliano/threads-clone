import React from 'react';
import { useField } from 'formik';
import { Input } from '@/components/ui/input';
import { useFormikContext, ErrorMessage } from 'formik';
import ErrorFormMessage from '../error-message-form/ErrorMessageForm';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  function TextInput({ name, ...props }, ref) {
    const { setFieldValue } = useFormikContext();

    const [field] = useField({ name });

    const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files && e.currentTarget.files.length > 0) {
        setFieldValue(name, e.currentTarget.files[0]);
      }
    };

    return (
      <>
        <label htmlFor={props.id || name} className=" text-white">
          {props.label}
        </label>
        <Input
          type={'file'}
          ref={ref}
          {...field}
          onChange={addFile}
          {...props}
          value={undefined}
        />
        <ErrorMessage name={name} component={ErrorFormMessage} />
      </>
    );
  },
);

export default FileInput;
