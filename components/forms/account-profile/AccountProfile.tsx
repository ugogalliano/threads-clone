'use client';

import { Formik } from 'formik';
import { UserData } from '@/shared/models/user.model';
import { UserValidation } from '@/lib/validations/user';
import AccountProfileSubform from './AccountProfileSubform';
import { useCallback, useMemo } from 'react';

type AccountProfileProps = {
  user: UserData;
  btnTitle?: string;
};

interface UserFormValue {
  profile_photo: File | undefined | string;
  name: string;
  username: string;
  bio: string;
}

export const AccountProfile = ({ user }: AccountProfileProps) => {
  const userFormValues: UserFormValue = useMemo(
    () => ({
      profile_photo: user?.image ? user.image : '',
      name: user?.name ? user.name : '',
      username: user?.username ? user.username : '',
      bio: user?.bio ? user.bio : '',
    }),
    [user],
  );

  const handleSubmit = useCallback(() => {
    //provider where save the photo of the user
  }, []);

  return (
    <div className="w-3/4 bg-dark-2 p-10">
      <Formik
        initialValues={userFormValues}
        enableReinitialize
        validationSchema={UserValidation}
        onSubmit={handleSubmit}
      >
        <AccountProfileSubform />
      </Formik>
    </div>
  );
};
