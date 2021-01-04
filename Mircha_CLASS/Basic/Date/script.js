//Los dias de la semana y los meses comienzan en cero
//por lo tanto si queremos podemos restar uno al mes 
//para poder obtener algo esperado.

const Test_date = new Date()
const MYBHD = new Date("2020/07/30")

console.log(Test_date.toLocaleDateString())

console.dir(Test_date.getUTCDay())

console.log(Date.now())
//Los segundo desde 1970 el famosos TimeStamp

console.log(MYBHD);

//Simple Web-APP, MYBHD-WEB
let curren_BHD_day = prompt("When were your day births")
let curren_BHD_month = prompt("When were your month birth")
let curren_BHD_year = prompt("When were your birth year")

const App_day = new Date(`2020/${curren_BHD_month}/${curren_BHD_day}`)

console.log(`Your next BHD is on ${App_day}`);
alert(`Your next BHD is on ${App_day}`)