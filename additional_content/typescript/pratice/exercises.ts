export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export const sumArray = (numbers: number[]): number => numbers.reduce(add, 0);

export function mult(x: number, y: number): number {
    return x * y;
}

export const fatorial = (number: number): number => Array
    .from({ length: number }, (_, i) => ++i).reduce(mult);

export function triangle(base: number, heigth: number): number {
    return (base * heigth) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, heigth: number): number {
    return base * heigth;
}

export function lozenge(largerDiagonal: number, lessDiagonal: number): number {
    return (largerDiagonal * lessDiagonal) / 2
}

export function trapeze(largerBase: number, lessBase: number, heigth: number): number {
    return ((largerBase + lessBase) * heigth) / 2
}

export function circle(raio: number): number {
    const PI = 3.14;
    return PI * (raio ** 2);
}