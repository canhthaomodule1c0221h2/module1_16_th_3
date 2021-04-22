class Circle {
    constructor(x, y, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    setRadius(r){
        this.radius = r;
    }
    setColor(color){
        this.color=color;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    drawCircle(){
        let draw = document.getElementById("myCanvas").getContext("2d");
        draw.beginPath();
        draw.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        draw.stroke();
    }
}
let Circle1 = new Circle(100,100,40,"black");
// document.write(Circle1);
// Circle1.drawCircle();
Circle1.setX(0)
Circle1.setY(0);
Circle1.setRadius(80);
Circle1.drawCircle();