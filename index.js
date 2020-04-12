// Import stylesheets
import './style.css';

var months    = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
//var days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo']

var today = new Date();
var time = today.getDate()+' de '+months[today.getMonth()]+' del '+today.getFullYear();

// Write Javascript code!
const appDiv = document.getElementById('fecha');
appDiv.innerHTML = `<span>`+time+`</span>`;