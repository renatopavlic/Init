const getUserData = (token) => {
  const requestOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
   return fetch(`${process.env.REACT_APP_ROOT_DOMAIN}${process.env.REACT_APP_ENDPOINT_ME}`, requestOptions)
  .then(response => {
    console.log("response.status", response.status);
    if([401, 403].indexOf(response.status)!=-1){
      return Promise.resolve({errorMessage:"Not authed"})
    } else {
      console.log("data recived")
      return response.json()
    }
  })
}

export default {
  getUserData
}