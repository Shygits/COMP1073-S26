
async function startProgram() {
    // We can make functions more versatile by including PARAMETERS. Parameters are like placeholders for data that the function requires to work properly. We provide the actual values (arguments) at the moment we invoke (call) the function.
    // STEP 6: Light up the main LED with a random colour
    setMainLed(getRandomColor());

    

// STEP 1: Create a FUNCTION called traceSquare that accepts one parameter - distance (in cm) - and returns nothing.
//async function traceSquare() {


    await rollToDistance(180, 15, 10);//direction, speed, time


    await rollToDistance(90, 10, 34);//direction, speed, time


    await rollToDistance(90, 10, 5);//direction, speed, time

    await rollToDistance(0, 5, 120);//direction, speed, time


exitProgram();
}