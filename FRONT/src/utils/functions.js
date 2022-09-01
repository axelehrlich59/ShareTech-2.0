export const featureNotAvailableYet = () => {
  alert("La fonctionalité n'est pas encore disponible")
}

export const promiseSuccessAlert = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Article modifié !"), 1000)
  });
}