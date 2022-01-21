const seed = ~~(fxrand()*123456789); // random seed

/**
 * The setup function is called once when the program starts
 */
export function setup() {
    // Create a canvas
    const size = min(windowWidth, windowHeight); // Get the smaller of the two dimensions
    createCanvas(size, size);

    // Set the background color
    background(0); // black

    // put setup code here
}

/**
 * The draw function is called over and over again
 */
export function draw() {
    // To make every render the same randomness use:
    // randomSeed(seed)

    // put drawing code here
}
