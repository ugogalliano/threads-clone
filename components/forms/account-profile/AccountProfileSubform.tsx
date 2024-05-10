'use client';

import React from 'react';
import { Form } from 'formik';
import TextInput from '@/components/shared/forms/text-input/TextInput';
import { Button } from '@/components/ui/button';
import TextAreaInput from '@/components/shared/forms/text-area-input/TextAreaInput';

const AccountProfileSubform = () => {
  return (
    <Form className="flex flex-col justify-start gap-8">
      <div className="grid-cols-1">
        <TextInput label="Name" name="name" />
      </div>

      <div className="grid-cols-1">
        <TextInput label="Username" name="username" />
      </div>

      <div className="grid-cols-1">
        <TextAreaInput rows={4} label="Bio" name="bio" />
      </div>

      <Button type="submit" variant={'secondary'}>
        Submit
      </Button>
    </Form>
  );
};

export default AccountProfileSubform;
