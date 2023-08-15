import { object, string } from 'yup';

export const createSchema = object().shape({
  name: string().label('Name').required(),
  logo: string().label('Logo').nullable(),
  location: string().label('Location').required(),
  description: string().label('Description').nullable(),
});
