
const Colors = ['Red','Blue','Green','Yellow']
const Obj_color = {}


console.log(Obj_color) //it's empty

Colors.forEach((colors,index) => Obj_color[`C-${index}`] = colors)

console.log(Obj_color)


let aletario = Math.round(Math.random() * 100)

Obj_color[`E00_${aletario}`] = 'Pulple'

console.log(aletario)

console.log(Obj_color)
