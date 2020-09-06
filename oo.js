class Vector {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get x() { return this._x }

    get y() { return this._y }

    get z() { return this._z }

    multiply() { return this._x * this._y * this._z }
}

const v = new Vector(1, 2, 3);

console.log([v.x, v.y, v.z])
console.log('Produto', v.multiply())
