'use client';

import { Formik } from 'formik';
import { UserValidation } from '@/lib/validations/user';
import AccountProfileSubform from './AccountProfileSubform';
import { useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { updateUser } from '@/lib/actions/user.actions';
import { useAlert } from '@/hooks/alert/Alert';
import { User } from '../../../lib/actions/user.actions';

type AccountProfileProps = {
  user: User;
  btnTitle?: string;
};

interface UserFormValue {
  name: string;
  username: string;
  bio: string;
}

export const AccountProfile = ({ user }: AccountProfileProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const alert = useAlert();

  const userFormValues: UserFormValue = useMemo(
    () => ({
      name: user?.name ? user.name : '',
      username: user?.username ? user.username : '',
      bio: user?.bio ? user.bio : '',
    }),
    [user],
  );

  const handleSubmit = useCallback(
    async (value: UserFormValue) => {
      try {
        await updateUser({
          userId: user.id,
          ...value,
          path: pathname,
        });
        alert.showAlert(
          'Success',
          'Il processo di onboarded è avvenuto con successo',
        );
        if (pathname === '/profile/edit') {
          router.back();
        } else {
          router.push('/');
        }
      } catch (error) {
        alert.showAlert('Error', 'Si è verificato un errore');
      }
    },
    [pathname, user.id, router, alert],
  );

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
