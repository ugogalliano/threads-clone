import * as yup from 'yup';

export const UserValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Minimum 3 characters.')
    .max(30, 'Maximum 30 characters.')
    .required(),
  username: yup
    .string()
    .min(3, 'Minimum 3 characters.')
    .max(30, 'Maximum 30 characters.')
    .required(),
  bio: yup
    .string()
    .min(3, 'Minimum 3 characters.')
    .max(1000, 'Maximum 1000 characters.')
    .required(),
});
