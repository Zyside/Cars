function Car (name) {
    this.name = name;
    this.tires = 'летняя';
    this.playMusic = function () {
        console.log('Играет музыка в машине:' + this.name);
    }
    this.startMoving = function () {
        console.log('Машина начало двигаться:' + this.name);
    }

    this.changeTires = function () {
        if (this.tires === "летняя") {
            this.tires = "зимняя";
            console.log('Теперь на машине:' + this.name + this.tires + " резина" )
        } else {
            this.tires = "летняя";
            console.log('Теперь на машине:' + this.name + this.tires + " резина")
        }
    }
}
var car1 = new Car('Kia ');
car1.startMoving();
car1.playMusic();
car1.changeTires();
car1.changeTires();

var car2 = new Car('Lexus ');
car2.startMoving();
car2.playMusic();
car2.changeTires();
car2.changeTires();


