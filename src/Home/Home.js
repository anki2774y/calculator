import { useState } from "react";
import styles from "./Home.module.css";

function Home() {

    const [input, setInput] = useState("0");
    const [result, setResult] = useState(0);

    const buttonValues = {
        "clear": 'C', "power": '^', "percentage": '%', "divide"  : '÷',
        "seven": 7, "eight": 8, "nine": 9, "multiply": 'x',
        "four": 4, "five": 5, "six": 6, "subtract": '-',
        "one": 1, "two": 2, "three": 3, "add": '+',
        "zero": 0, "decimal": ".", "equalTo": '='
    };

    function handleClick(buttonValue) {
        if(buttonValue === '=') {           
            evaluateInput();
        } else if(buttonValue === 'C') {
            setResult(0);
            setInput('');
        } else {
            if(input === '0') {
                setInput((prevInput) => buttonValue);
            } else {
                setInput((prevInput) => prevInput + buttonValue);
            }
        }
    }

    const evaluateInput = () => {
        try {
          // Use regex to split the input string into an array of numbers and operators
          const parts = input.match(/[+\-x÷^]|\d+/g);
          if (!parts) return;
          // Initialize result with the first number
          let tempResult = parseFloat(parts[0]);
    
          // Iterate over the remaining parts and perform addition/subtraction
          for (let i = 1; i < parts.length; i += 2) {
            const operator = parts[i];
            const nextNumber = parseFloat(parts[i + 1]);
    
            if (operator === '+') {
              tempResult += nextNumber;
            } else if (operator === '-') {
              tempResult -= nextNumber;
            } else if (operator === '÷') {
                tempResult /= nextNumber;
            } else if (operator === 'x') {
                tempResult *= nextNumber;
            } else if (operator === '^') {
                for(let i=1; i < nextNumber; i++) {
                    tempResult *= tempResult
                }
            }
          }    
          // Update the result state with the final result
          setResult(tempResult);
        } catch (error) {
          setResult('Error');
        }
    };


    return (
        <>
            <div className={styles.homeCnt}>
                <div className={styles.consoleCnt}>
                    <div className={styles.result}> Ans: {result} </div>
                    <hr />
                    <div className={styles.input}> {input} </div>  
                </div>
                <div>
                    <div>
                        <span className={styles.lftbtn} onClick={()=>handleClick(buttonValues.clear)}> {buttonValues.clear} </span>
                        <span onClick={()=>handleClick(buttonValues.power)}> {buttonValues.power} </span>
                        <span onClick={()=>handleClick(buttonValues.percentage)}> {buttonValues.percentage} </span>
                        <span className={styles.rgtbtn} onClick={()=>handleClick(buttonValues.divide)}> {buttonValues.divide} </span>
                    </div>
                    <div>
                        <span className={styles.lftbtn} onClick={()=>handleClick(buttonValues.seven)}> {buttonValues.seven} </span>
                        <span onClick={()=>handleClick(buttonValues.eight)}> {buttonValues.eight} </span>
                        <span onClick={()=>handleClick(buttonValues.nine)}>  {buttonValues.nine} </span>
                        <span className={styles.rgtbtn} onClick={()=>handleClick(buttonValues.multiply)}> {buttonValues.multiply} </span>
                    </div>
                    <div>
                        <span className={styles.lftbtn} onClick={()=>handleClick(buttonValues.four)}> {buttonValues.four} </span>
                        <span onClick={()=>handleClick(buttonValues.five)}> {buttonValues.five} </span>
                        <span onClick={()=>handleClick(buttonValues.six)}> {buttonValues.six} </span>
                        <span className={styles.rgtbtn} onClick={()=>handleClick(buttonValues.subtract)}> {buttonValues.subtract} </span>
                    </div>
                    <div>
                        <span className={styles.lftbtn} onClick={()=>handleClick(buttonValues.one)}> {buttonValues.one} </span>
                        <span onClick={()=>handleClick(buttonValues.two)}> {buttonValues.two} </span>
                        <span onClick={()=>handleClick(buttonValues.three)}> {buttonValues.three} </span>
                        <span className={styles.rgtbtn} onClick={()=>handleClick(buttonValues.add)}> {buttonValues.add}</span>
                    </div>
                    <div>
                        <span className={styles.zeroBtn} onClick={()=>handleClick(buttonValues.zero)}> {buttonValues.zero} </span>
                        <span className={styles.decBtn} onClick={()=>handleClick(buttonValues.decimal)}>  {buttonValues.decimal} </span>
                        <span className={styles.eqlBtn} onClick={()=>handleClick(buttonValues.equalTo)}> {buttonValues.equalTo}  </span>
                    </div>
                </div>
            </div>
        </>
    )        
}

export default Home;
