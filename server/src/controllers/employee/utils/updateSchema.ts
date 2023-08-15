import { object, string } from 'yup';

export const updateSchema = object().shape({
  name: string().label('Name').nullable(),
  logo: string().label('Logo').nullable(),
  location: string().label('Location').nullable(),
  description: string().label('Description').nullable(),
});
