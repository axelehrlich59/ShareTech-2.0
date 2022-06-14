export const featureNotAvailableYet = () => {
  alert("La fonctionalité n'est pas encore disponible")
}

export const onInsertArticleToDb = (dataToInsert) => {
  return fetch('http://localhost:8000/stored', {
    method: 'POST',
    body: JSON.stringify(dataToInsert),
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true,
    },
  }) 
  .then(res => res.json())
  .then(data => console.log(data)); 
}