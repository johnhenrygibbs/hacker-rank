grades = [4, 73, 67, 38, 33];

function gradingStudents(grades) {

    let gradesRounded = [];

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] < 38) {

            gradesRounded.push(grades[i]);

        } else {

            let nextMultiple = Math.ceil(grades[i] / 5);
            let roundedUp = nextMultiple * 5;

            if (roundedUp - grades[i] < 3) {

                gradesRounded.push(roundedUp);

            } else {

                gradesRounded.push(grades[i]);

            }

        }

    }

    return gradesRounded;

}

console.log(gradingStudents(grades));