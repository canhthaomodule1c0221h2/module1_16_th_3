class Rectange {
    constructor(width, heigh, x, y) {
        this.width = width;
        this.heigh = heigh;
        this.x = x;
        this.y = y;
    }
    setWidth(width){
        this.width = width;
    }
    setheigh(heigh){
        this.heigh = heigh;
    }
    setX(x){
        this.x = x;
    }
    setY (y){
        this.y = y;
    }
    setArea(){
        return document.write("dien tich la" + this.x*this.y);
    }
    setchuvi(){
        return document.write("chu vi la " + 2*(this.x + this.y));
    }
    draw(){
    let draw = document.getElementById("myCanvas").getContext("2d");
    draw.beginPath();
    draw.fillRect(100,100,200,100);
    draw.stroke();
    }
}
 let rectange1 = new Rectange(10,20,10,10);
let rectange2 = new Rectange(20,40,30,30);
 rectange1.draw();
rectange2.draw();
document.write("<br>")
rectange2.setArea();
document.write("<br>")
rectange2.setchuvi();
// rectange1.setX(20);
// rectange1.setY(30);
