// Set the dimensions of the etch a sketch
const gridWidth = 16;
const gridHeight = 16;

const grid = document.getElementById("grid")

// Set up grid
for (let i=0; i<gridWidth; i++) {
    const column = document.createElement("div");
    column.className = "column";
    column.id = "col"+i;
    for (let j=0;j<gridHeight;j++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.id = "col"+i+"row"+j;
        column.appendChild(pixel);
    };
    grid.appendChild(column);
};

// Event listener
grid.querySelectorAll('div').forEach((div1) => {
    div1.querySelectorAll('div').forEach((div2) => {
        div2.addEventListener('mouseover', () => {
            div2.style.background = "blue";
        });
    });
});

