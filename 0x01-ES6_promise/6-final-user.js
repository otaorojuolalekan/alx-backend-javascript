import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const resp = [];
  try {
    const user = await signUpUser(firstName, lastName);
    resp.push({ status: 'fulfilled', value: user });
  } catch (error) {
    resp.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    resp.push({ status: 'fulfilled', value: upload });
  } catch (error) {
    resp.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  return resp;
}
