function parseCount(value) {
    let parsed = Number.parseFloat(value);
    if (isNaN (parsed)) {
        throw new Error('Невалидное значение');
    } else {
    return parsed
}
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error
    }
};



class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
            }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter;
        debugger;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch(error) {
        let errorTriangle = new Triangle(a, b, c);
        errorTriangle.getArea = () => {
            return "Ошибка! Треугольник не существует";
        }
        errorTriangle.getPerimeter  = () =>{
            return "Ошибка! Треугольник не существует";
        }
        return errorTriangle;
    }
}