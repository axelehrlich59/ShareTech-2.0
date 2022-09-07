export const featureNotAvailableYet = () => {
  alert("La fonctionalité n'est pas encore disponible")
}

export const promiseSuccessAlert = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000)
  });
}

export const checkTokenExist = (token) => {
  return token === undefined || token === null ? false : true
}