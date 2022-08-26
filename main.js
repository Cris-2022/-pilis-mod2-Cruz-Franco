/* CLIMA */
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-24.183133853538152&lon=-65.33130863194877&appid=c7eb81a7e5dabe1d37507274a340061b")
    .then(response => response.json())
    .then(json => setdata(json))
const setdata = json => {
    console.log(json)
    const weatherdata = {
        location: json.name,
        description: json.weather[0].main,
        humidity: json.main.humidity,
        pressure: json.main.pressure,
        temperature: json.main.temp,
        date: getDate(),

    }
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key];
    });
}
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}
/* CLIMA-FIN */

/* FORMULARIO */
function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  
    const mensaje = {
      name: document.getElementById('emp-nombre').value,
      rubro: document.getElementById('emp-sector').value,
      job: document.getElementById('emp-produccion').value,
      info: document.getElementById('emp-info').value,
      ubi: document.getElementById('departamento').value,
      ubi2: document.getElementById('localidad').value,
      direccion: document.getElementById('emp-direc').value,
      name2: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      email: document.getElementById('email').value,
      telf: document.getElementById('telefono').value,
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
            'Enviado',
            'Gracias por Registrarte',
            'success'
          );
          cleanForm();
        })
    }

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);