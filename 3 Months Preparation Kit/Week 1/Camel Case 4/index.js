function processData(input) {

    let inputArray = input.split("\r\n");
    let result = [];

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i][0] == 'S' && inputArray[i][2] == 'M') {

            let splitMethod = inputArray[i].split(';').pop();
            let methodName = splitMethod.split(/(?=[A-Z])/);
            result.push(methodName.join(" ").toLowerCase());

        } else if (inputArray[i][0] == 'S' && inputArray[i][2] == 'C') {

            let splitClass = inputArray[i].split(';').pop();
            let className = splitClass.split(/(?=[A-Z])/);
            result.push(className.join(" ").toLowerCase());

        } else if (inputArray[i][0] == 'S' && inputArray[i][2] == 'V') {

            let splitVariable = inputArray[i].split(';').pop();
            let variableName = splitVariable.split(/(?=[A-Z])/);
            result.push(variableName.join(" ").toLowerCase());

        }

        if (inputArray[i][0] == 'C' && inputArray[i][2] == 'M') {

            let combineMethod = inputArray[i].split(';');
            combineMethod.splice(0, 2);
            let methodArray = combineMethod[0].split(" ");

            for (let j = 1; j < methodArray.length; j++) {

                let upperCaseWord = methodArray[j].charAt(0).toUpperCase() + methodArray[j].slice(1).toLowerCase();
                methodArray[0] += upperCaseWord;

            }

            result.push(methodArray[0] + "()");

        } else if (inputArray[i][0] == 'C' && inputArray[i][2] == 'C') {

            let combineClass = inputArray[i].split(';');
            combineClass.splice(0, 2);
            let classArray = combineClass[0].split(" ");
            let newClass = "";

            for (let j = 0; j < classArray.length; j++) {

                let upperCaseWord = classArray[j].charAt(0).toUpperCase() + classArray[j].slice(1).toLowerCase();
                newClass += upperCaseWord;

            }

            result.push(newClass);

        } else if (inputArray[i][0] == 'C' && inputArray[i][2] == 'V') {

            let combineVariable = inputArray[i].split(';');
            combineVariable.splice(0, 2);
            let variableArray = combineVariable[0].split(" ");

            for (let j = 0; j < variableArray.length; j++) {

                let upperCaseWord = variableArray[j].charAt(0).toUpperCase() + variableArray[j].slice(1).toLowerCase();
                variableArray[0] += upperCaseWord;

            }

            result.push(variableArray[0]);

        }

    }

    for (let i = 0; i < result.length; i++) {

        console.log(result[i]);

    }

}

console.log(processData(sampleTestCase1));