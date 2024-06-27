

console.log(makeLine(5));

function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

console.log(makeSquare(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += `\n${makeLine(size)}`; 
    } 
    return square;
}

console.log(makeRectangle(5, 3));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += `\n${makeLine(width)}`;
    }
    return rectangle;
}

console.log(makeDownwardStairs(5));

function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += `\n${makeLine(i + 1)}`;
    }
    return triangle;
}

console.log(makeSpaceLine(3, 5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ''
    function insertSpaces(spaceCount) {
        for (let i = 0; i < spaceCount; i++) {
            spaceLine += ' ';
        }
        return spaceLine;
    }
    insertSpaces(numSpaces);
    spaceLine += (makeLine(numChars));
    insertSpaces(numSpaces);

    return spaceLine;
}

console.log(makeIsoscelesTriangle(5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle += `\n${(makeSpaceLine(height - i - 1, 2*i + 1))}`;
    }
    return triangle;
}

console.log(makeDiamond(5));

function makeDiamond(height) {
   let diamond = '';
    diamond += `${makeIsoscelesTriangle(height).split('').reverse().join('')}`;

    return diamond;
}

