export default function getFullResponseFromAPI(success) {
  const promise = new Promise((myResolve, myReject) => {
    if (success) {
      myResolve({
        status: 200,
        body: 'Success',
      });
    }
    myReject(new Error('The fake API is not working currently'));
  });
  return promise;
}
