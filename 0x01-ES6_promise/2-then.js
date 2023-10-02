export default function handleResponseFromAPI(promise) {
  const newpromise = new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve({
        status: 200,
        body: 'success',
      });
    }

    myReject(new Error());
  });
  newpromise.then(() => {
    console.log('Got a response from the API');
  });
}
