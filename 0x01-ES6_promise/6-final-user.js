import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(filename);

  return Promise.allSettled([user, photo]).then((value) => {
    const result = [];
    value.forEach((item) => {
      if (item.status === 'fulfilled') {
        result.push({ status: item.status, value: item.value });
      } else {
        result.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return result;
  });
}
