let error = new Error('Невалидное значение');

function parseCount(value) {
    let parsed = Number.parseFloat(value);
    console.log(parsed);
    if (isNaN (parsed)) {
        throw error;
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
};



class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
        this.error = new Error('Треугольник с такими сторонами не существует');
            throw error;
        }
    }

    get perimetr() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimetr;
        return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
    }
}

function getTriangle(a, b, c) {
    let triangleError = new Error('Ошибка! Треугольник не существует')
    try {
        return new Triangle(a, b, c);
    } catch (triangleError) {
        return Triangle.perimetr().area();
        }
    }
