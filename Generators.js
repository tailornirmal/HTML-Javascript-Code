console.log("Generators");

function* generateSequence() {
    yield 1;
    yield { x: 34, y: 54 };
    yield 3;
}

const sequenceGenerationObject = generateSequence();

// console.log(sequenceGenerationObject.next());
// console.log(sequenceGenerationObject.next());
// console.log(sequenceGenerationObject.next());
// console.log(sequenceGenerationObject.next());

// for(let sequence of sequenceGenerationObject) {
//     console.log(sequence);
// }

// const sequence = [0, ...generateSequence()];

// console.log(sequence);

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }

// console.log([...generateSequence(A,B)]);

export function printName(name) {
    return name;
}