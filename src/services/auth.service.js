const login = async (user, pass) => {

  //const data =  { "username": "john@doe.com", "password": "test123" };
  const rawResponse = await fetch(`${process.env.REACT_APP_ROOT_DOMAIN}${process.env.REACT_APP_ENDPOINT_AUTH}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      username: user,
      password: pass
    })
  });

  const response = await rawResponse.json();
  return response;
};

export default {
  login
}
