function processData() {
    
    city = document.querySelector("#userinput")
    const url = `https://api.genderize.io/?name=${userinput.value}&fbclid=IwAR1kXWumYfb33xe_g-xpgArrcu5Ch-JGkWcbwtyatQsfXARsDsEm2DXENLU`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        output = document.querySelector("#output")
         gender = data.gender;
    document.querySelector('#output').innerHTML = "The Gender Of The Given Name Is " + " "  + gender.charAt().toUpperCase() + gender.slice(1);
      })
      .catch(error => console.error(error));
  }
  
//   function check(){
//   console.log("first started")
//   fetch(url)
//   console.log("request pathayo internet mah")
//   .then(response => response.json())
//   console.log("request ayo url bata json format mah")
//   .then(data =>{
//     console.log("got output")
//     gender = data.gender;
//     console.log(gender)
//     console.log("finished ")
//   })
// }

// check()