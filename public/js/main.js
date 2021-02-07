console.log("connected");

const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
// const datahide=document.querySelector('#data_hide')
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status')
const middle_layer = document.getElementsByClassName('middle_layer')
console.log(middle_layer);

console.log(temp_status);
console.log(city_name);
// console.log(datahide);

const getInfo = async (e) => {
  e.preventDefault();

  let cityVal = cityName.value;
  console.log(cityVal);

  if (cityVal === "") {
      city_name.innerText = "Plz write the name before you search";
      console.log(middle_layer);
      
      
  } else {
    try {
      let url = `https:api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=19a2ba02bd48606fd40ca31e8fcf22dd`;

      const response = await fetch(url);
      const data = await response.json();
    //   console.log(data);
        
        const arrData = [data];
        

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_val.innerText = arrData[0].main.temp;
       

        let tempMood = arrData[0].weather[0].main;
        // console.log(tempMood);
        //condition to check sunny or cloudy
        if (tempMood == 'clear') {
            temp_status.innerHTML = `<i class="far fa-sun" style="color:#FFFF00;"</i>`;
        } else if (tempMood == 'Clouds') {
            temp_status.innerHTML = `<i class="fas fa-cloud "style="color:#DDDDDD;"></i>`;
        } else if (tempMood == 'Rain') {
            temp_status.innerHTML = `<i class="fas fa-cloud-rain"style="color:#DDDDDD;"></i>`;
        } else {
            temp_status.innerHTML = `<i class="fas fa-cloud"style="color:#DDDDDD;"></i>`;
        }
       

       
        
    } catch {
        city_name.innerText = `Enter the city name correctly`;
        datahide.classList.add('data_hide');
    }
  }
};

submitBtn.addEventListener("click", getInfo);
