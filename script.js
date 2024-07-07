fetch("users/data/user.json")
    .then( (response) => {

      return response.json()
    } ).then( text => {
     // put your name in the place of user.name
      return fetch( `https://api.github.com/users/${user.name}` )
    } ).then( (response) => {

      return response.json()

    } ).then( githubUser => {
     return new Promise( (resolve, reject) => {
         
      let name = document.createElement("p")
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      document.body.append(img);
      name.innerHTML = githubUser.name;
      document.body.append(name);
      document.body.append(document.createElement('p').innerHTML = githubUser.location)
         
      setTimeout( () => {
          img.remove();
          resolve(githubUser)
      } , 3000 )
     })
} )
