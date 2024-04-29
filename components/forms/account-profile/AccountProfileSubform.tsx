import React, { useMemo } from 'react';
import { Form, useFormikContext } from 'formik';
import TextInput from '@/components/shared/forms/text-input/TextInput';
import FileInput from '@/components/shared/forms/file-input/FileInput';
import { Button } from '@/components/ui/button';
import TextAreaInput from '@/components/shared/forms/text-area-input/TextAreaInput';
import Image from 'next/image';

interface UserFormValue {
  profile_photo: File | undefined | string;
  name: string;
  username: string;
  bio: string;
}

const AccountProfileSubform = () => {
  const { values } = useFormikContext<UserFormValue>();

  const profilePhoto = useMemo(
    () =>
      typeof values.profile_photo === 'string' ? values.profile_photo : '',
    [values.profile_photo],
  );

  return (
    <Form className="flex flex-col justify-start gap-8">
      {profilePhoto !== '' && (
        <div className="flex items-center justify-center">
          <Image
            src={profilePhoto}
            alt="profile_icon"
            width={96}
            height={96}
            priority
            className="rounded-full object-contain"
          />
        </div>
      )}

      <div className=" grid-cols-1">
        <FileInput
          label="Immagine"
          placeholder="Aggiungi foto"
          accept="image/*"
          name="profile_photo"
          className="bg-white"
        />
      </div>

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
