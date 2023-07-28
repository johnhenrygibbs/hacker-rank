let arr = [2, 3, 4, 3, 2];

function chiefHopper(arr) {

    let botEnergy = Math.floor(arr[0] / 2);
    let traversed = false;

    // Set up a while loop in order to carry out certain operations until the length of the array has been traversed.

    while (traversed === false) {

        let newEnergy = botEnergy;

        for (let i = 0; i < arr.length; i++) {

            let height = arr[i];

            // Two conditions are carried out on newEnergy based on its relation to the next building's height.

            if (newEnergy < height) {

                newEnergy -= (height - newEnergy);

            } else if (newEnergy > height) {

                newEnergy += (newEnergy - height);

            }

            // If at any point the newEnergy value dips below 0, we start the while loop over with the next minimum value.

            if (newEnergy < 0) {

                botEnergy += 1;
                break;

            // Once we reach the end of the for loop, we know we've successfully carried out all operations and found our min value.

            } else if (i + 1 === arr.length) {

                traversed = true;
                break;

            }

        }

    }

    return botEnergy;

}

console.log(chiefHopper(arr));