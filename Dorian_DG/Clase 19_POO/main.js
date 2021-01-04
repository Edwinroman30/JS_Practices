class Cars{

	constructor(model,year,color,numTires)
	{
		this.model = model
		this.year = year
		this.color = color
		this.tires = numTires
		this.status = false
	}

	On(){
		this.status = true
	}


	Off(){
		this.status= false
	}

	show_Info(){
		console.log(`This is a ${this.model} from ${this.year},it's ${this.color} and it have ${this.tires} tires`);
		console.log(`it's ${this.status == true ? `On`:`Off`}`);
	}

}


//Exelenct class of javascript

const  My_car = new Cars('Dodge Charger',2020,'gray-white',4);

My_car.show_Info()

My_car.On()

My_car.show_Info()

const Second_car = new Cars('Tesla',2019,'white',4)

Second_car.On()

Second_car.show_Info()
