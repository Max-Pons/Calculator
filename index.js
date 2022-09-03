/* CALCULATOR PLANNING
    
    Description:

    We are building a basic calculator that allows the user to add, substract, multiply & divide numbers. 
    It should also let the user apply a decimal dot.

    The caculcator must display the operands & the operator. 

    The display must limit the amount of characters to: 20
    If the user divides by 0, the calculator will display de next message: "Ohhh jeez, no can do..."


    1.- What funcionality will it have? add, substract, multiply and divide numbers.
    
    2.- What input will it have? the user will give the operands and operator by pressing buttons.

    3.- Desired output: A functional graphic interface calculator.

    4.- Pseudocode:

        First Part: Displaying the buttons we press. 

        1.0 select all buttons giving them a unique variable to each of them
        1.1 add event listeners that display the number or symbol of the button we are clicking on
        1.1.2 add event listeners to press buttons with your keyboard. 
            Numbers: 48-57 = 0-9 & 96-105 = 0-9;
            Operators: + = 187 & + = 107. - = 189 & - = 109. / = 111. * = 106.
            Punctuation: . = 190.   
            Delete: backspace = 8.
            Equality: equalsign = 13.
        1.3 prohibit the display from displaying more than 18 characters.

        Second Part: Operation functions 

        2.0 add a function that is called to display a result when the user presses the 
            equal sign button.
        2.1 three variables (result, resultDisplay & num2). The operation function is called as the user
            enters the resultDisplay, the operator(the operator button will determine which function to 
            call) and the num2. The value that the function returns will only be visible as the user
            presses enter. 
        2.2 when you press enter, you will see the value that function returns, which will be saved in resultDisplay
            basically resultDisplay changes its initial value to the result, that way, you may use result to start
            another operation with the last operation result.

        e.g. resultDisplay(its displayed) +(itsdisplayed) num2(itsdisplayed) = result(itsNOTdisplayed)
                you press enter then: resultDisplay = result, resultDisplay(itsdisplayed and ready to be used for another 
                    operation)
        
        function add(resultDisplay, num2) {
            let result = resultDisplay + num2; 
            resultDisplay = result
        }

        2.3 if the resultDisplay result is higher than 18 characters return("Number is too big")
        2.4 if the user divided a number by 0, retunr("Ohhh jeez, no can do...") 
            */


/*  Variables used to select existing buttons in html to add eventListeners */
        const numberZero = document.querySelector(`#numberZero`);
        const numberOne = document.querySelector(`#numberOne`);
        const numberTwo = document.querySelector(`#numberTwo`);
        const numberThree = document.querySelector(`#numberThree`);
        const numberFour = document.querySelector(`#numberFour`);
        const numberFive = document.querySelector(`#numberFive`);
        const numberSix = document.querySelector(`#numberSix`);
        const numberSeven = document.querySelector(`#numberSeven`);
        const numberEight = document.querySelector(`#numberEight`);
        const numberNine = document.querySelector(`#numberNine`);

        const clear = document.querySelector(`#clear`);
        const eraser = document.querySelector(`#delete`);
        const dot = document.querySelector(`#numberDot`)
        const equal = document.querySelector(`#equal`);
        const add = document.querySelector(`#operatorAdd`);
        const substract = document.querySelector(`#operatorSubstract`);
        const divide = document.querySelector(`#operatorDivide`)
        const multiply = document.querySelector(`#operatorMultiply`)

/*  Booleans used to tell the program if an operator(or dot) is been displayed, so it does
    not allow the user to repeat the operator(or the dot) symbol in the display */  
      
        let addCheck = false;
        let substractCheck = false;
        let divideCheck = false;
        let multiplyCheck =  false;
        let dotCheck = false;

/*  Booleans ussed to perfom an operation when I click the `equal` button. As I press
    it, only one of these will be true, whatever operator is true, will be the one wich
    result will be returned/displayed when pressing `=` */

        let addOp = false;
        let subsOp = false;
        let divideOp = false;
        let multiplyOp = false;

/*  Variables used to display values. 
    The resultDisplay variable gathers all the characters as an array that we apply and
    its turned into a string which is displayed when we call
    the  displayCharacters function */

        let display = document.querySelector(`#display`);
        let welcome = "Welcome!";
        display.innerHTML = welcome;
        let resultDisplay = [];
        let val1 = [];

        function displayCharacters(resultDisplay) {
            display.innerHTML = resultDisplay.join("");
            console.log(resultDisplay.join(""))
        }

/*  These are the eventListeners to clear the display,
    delete one character at a time and to to add a dot. */
        
        clear.addEventListener(`click`, () => {
            resultDisplay = [];
            displayCharacters(resultDisplay)
            addCheck = false;
            addCheck = false;
            substractCheck = false;
            divideCheck = false;
            multiplyCheck = false;
            dotCheck = false;
            num1 = 0;
            num2 = 0;
            val1 = [];
        })
    
        eraser.addEventListener(`click`, () => {
            resultDisplay.pop();
            displayCharacters(resultDisplay)
            addCheck = false;
            addCheck = false;
            substractCheck = false;
            divideCheck = false;
            multiplyCheck = false;
            dotCheck = false;
        })

        dot.addEventListener(`click`, () => {
            
            if (resultDisplay.length < 17 && resultDisplay.length > 0 && dotCheck === false) {
                resultDisplay.push(`.`);
                val1.push(`.`);
                displayCharacters(resultDisplay)
                dotCheck = true;
            }

        })

/*  These are the eventListeners for the number buttons, the way it works
    is that it adds its corresponding value to val1 array (featured above) 
    then, when we meet the operators eventListeners the val1 will be turned 
    into a string and inherit its value to the variable num1 so that we can 
    later inherit the 2nd operand through the same val1 array.*/

        numberZero.addEventListener(`click`, () => {
            
            if (resultDisplay.length < 17) {
                resultDisplay.push(0);
                val1.push(0);
                displayCharacters(resultDisplay)
            }

        })

        numberOne.addEventListener(`click`, () => {
            
            if (resultDisplay.length < 17) {
                resultDisplay.push(1);
                val1.push(1);             
                displayCharacters(resultDisplay)
            }
            
        })

        numberTwo.addEventListener(`click`, () => {
            
            if (resultDisplay.length < 17) {
                resultDisplay.push(2);
                val1.push(2);
                displayCharacters(resultDisplay)
            }

        })

        numberThree.addEventListener(`click`, () => {
           
            if (resultDisplay.length < 17) {
                resultDisplay.push(3);
                val1.push(3);
                displayCharacters(resultDisplay)
            }     

        })

        numberFour.addEventListener(`click`, () => {
           
            if (resultDisplay.length < 17) {
                resultDisplay.push(4);
                val1.push(4);
                displayCharacters(resultDisplay)
            }

        })

        numberFive.addEventListener(`click`, () => {
        
            if (resultDisplay.length < 17) {
                resultDisplay.push(5);
                val1.push(5);
                displayCharacters(resultDisplay)
            }

        })

        numberSix.addEventListener(`click`, () => {
            if (resultDisplay.length < 17) {
                resultDisplay.push(6);
                val1.push(6);
                displayCharacters(resultDisplay)
            }
        })

        numberSeven.addEventListener(`click`, () => {
           
            if (resultDisplay.length < 17) {
                resultDisplay.push(7);
                val1.push(7);
                displayCharacters(resultDisplay)
            }

        })

        numberEight.addEventListener(`click`, () => {
       
            if (resultDisplay.length < 17) {
                resultDisplay.push(8);
                val1.push(8);
                displayCharacters(resultDisplay)
            }

        })

        numberNine.addEventListener(`click`, () => {
        
            if (resultDisplay.length < 17) {
                resultDisplay.push(9);
                val1.push(9);
                displayCharacters(resultDisplay)
            }

        })


/*  These are the eventListeners used to perform the operators, the operator buttons return
    a `true` value for its corresponding operator, when we press the equal button it asks if
    either operator its true and it performs it. The equal eventListener also inherits the 2nd 
    operand through val1 variable. */

        add.addEventListener(`click`, () => {
            
            if (resultDisplay.length < 17 && resultDisplay.length > 0 && addCheck === false &&  substractCheck === false 
                && divideCheck === false && multiplyCheck === false) {
                resultDisplay.push(`+`);
                addOp = true;
                addCheck = true;
                substractCheck = true;
                divideCheck = true;
                multiplyCheck = true;
                dotCheck = false;
                num1 = val1.join(``);
                console.log(num1)  
                num1 = Number(num1);
                val1 = [];
                displayCharacters(resultDisplay)
            }

        })

        substract.addEventListener(`click`, () => {
          
            if (resultDisplay.length < 17 && resultDisplay.length > 0 && addCheck === false &&  substractCheck === false 
                && divideCheck === false && multiplyCheck === false) {
                resultDisplay.push(`-`);
                subsOp = true;
                addCheck = true;
                substractCheck = true;
                divideCheck = true;
                multiplyCheck = true;
                dotCheck = false;
                num1 = val1.join(``);
                num1 = Number(num1);
                val1 = [];
                displayCharacters(resultDisplay)
            }

        })

        divide.addEventListener(`click`, () => {
           
            if (resultDisplay.length < 17 && resultDisplay.length > 0 && addCheck === false &&  substractCheck === false 
                && divideCheck === false && multiplyCheck === false) {
                resultDisplay.push(`÷`);
                divideOp = true;
                addCheck = true;
                substractCheck = true;
                divideCheck = true;
                multiplyCheck = true;
                dotCheck = false;
                num1 = val1.join(``);
                num1 = Number(num1);
                val1 = [];
                displayCharacters(resultDisplay)
            }

        })

        multiply.addEventListener(`click`, () => {
         
            if (resultDisplay.length < 17 && resultDisplay.length > 0 && addCheck === false &&  substractCheck === false 
                && divideCheck === false && multiplyCheck === false) {
                resultDisplay.push(`X`);
                multiplyOp = true;
                addCheck = true;
                substractCheck = true;
                divideCheck = true;
                multiplyCheck = true;
                dotCheck = false;
                num1 = val1.join(``);
                num1 = Number(num1);
                val1 = [];
                displayCharacters(resultDisplay)
            }

        })


        equal.addEventListener(`click`, () => {
            num2 = val1.join(``);
            console.log(num2)  
            num2 = Number(num2);          
            val1 = [];
                
            if (addOp === true) {
                resultDisplay = [];
                resultDisplay.push(num1 + num2);;
                val1.push(num1 + num2);
                displayCharacters(resultDisplay)
                console.log(`${val1}`)
                addOp = false;
                addCheck = false;
                substractCheck = false;
                divideCheck = false;
                multiplyCheck = false;
                dotCheck = false;
                }
                    else if (subsOp === true) {
                        resultDisplay = [];
                        resultDisplay.push(Number(num1) - Number(num2));;
                        val1.push(Number(num1) - Number(num2));
                        displayCharacters(resultDisplay)
                        console.log(`${val1}`)
                        subsOp = false;
                        addCheck = false;
                        substractCheck = false;
                        divideCheck = false;
                        multiplyCheck = false;
                        dotCheck = false;
                }
                    else if (divideOp === true) {

                        if (num2 === 0) {
                            resultDisplay = [];
                            msg = `Its huh... at least 40.`
                            resultDisplay.push(msg)
                            displayCharacters(resultDisplay)
                        }
                        else {
                        resultDisplay = [];
                        resultDisplay.push(Number(num1) / Number(num2));;
                        val1.push(Number(num1) / Number(num2));
                        displayCharacters(resultDisplay)
                        console.log(`${val1}`)
                        divideOp = false;
                        addCheck = false;
                        substractCheck = false;
                        divideCheck = false;
                        multiplyCheck = false;
                        dotCheck = false;
                        }
                }   
                    else if (multiplyOp === true) {
                        resultDisplay = [];
                        resultDisplay.push(Number(num1) * Number(num2));;
                        val1.push(Number(num1) * Number(num2));
                        displayCharacters(resultDisplay)
                        console.log(`${val1}`)
                        multiplyOp = false;
                        addCheck = false;
                        substractCheck = false;
                        divideCheck = false;
                        multiplyCheck = false;
                        dotCheck = false;
                }

        })





