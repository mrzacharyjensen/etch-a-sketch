// Set the dimensions of the etch a sketch
const gridWidth = 16;
const gridHeight = 16;

const grid = document.getElementById("grid")

for (let i=0; i<gridWidth; i++) {
    const column = document.createElement("div");
    column.id = "col"+i;
    for (let j=0;j<gridHeight;j++) {
        const pixel = document.createElement("div");
        pixel.id = "col"+i+"row"+j;
        column.appendChild(pixel);
    };
    grid.appendChild(column);
};