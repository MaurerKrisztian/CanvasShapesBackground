

export class Circle {
    color: string;
    colors = ['blue', 'red', 'green', 'black'];

    constructor(private x: any, private y: any, private dx: any, private dy: any, private radius: any) {
        this.color = this.colors[Math.round(Math.random() * this.colors.length)];
    }

    draw(context: any) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    }


    update(context: any) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);

    }
}
