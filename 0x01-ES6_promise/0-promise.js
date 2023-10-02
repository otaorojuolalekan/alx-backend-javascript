export default function getResponseFromAPI() {
  const promise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject();
  });
  return promise;
}
