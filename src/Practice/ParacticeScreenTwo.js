import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function PracticeScreenTwo() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [countArray, setCountArray] = useState([]);
    const [countArrayOne, setCountArrayOne] = useState([]);
    //  console.log(firstName);
    //  console.log(lastName);
    function calculateCount() {
        let tempArray = firstName.split('');
        let tempObj = {};
        for (let i = 0; i < tempArray.length; i++) {
            let char = tempObj[tempArray[i]];
            if (char) {
                tempObj[tempArray[i]] = char + 1;
            }
            else {
                tempObj[tempArray[i]] = 1;
            }
        }
        //   console.log(tempObj);
        const entries = Object.entries(tempObj);
        setCountArray(entries);
        //   console.log(entries);
        //   alert(entries);
    }

    function calculateCountOne() {
        let tempArrayOne = lastName.split('');
        let tempObjOne = {};
        for (let i = 0; i < tempArrayOne.length; i++) {
            let charOne = tempObjOne[tempArrayOne[i]];
            if (charOne) {
                tempObjOne[tempArrayOne[i]] = charOne + 1;
            }
            else
                tempObjOne[tempArrayOne[i]] = 1;
        }
        let entriesOne = Object.entries(tempObjOne);
        setCountArrayOne(entriesOne);
        //  console.log(entriesOne);
    }
    useEffect(() => {
        if (lastName != '') {
            setLastName('');
            setCountArrayOne([]);
        }
        calculateCount();
    }, [firstName]);
    
    useEffect(() => {
        if (firstName != '') {
            setFirstName('');
            setCountArrayOne([]);
        }
        calculateCountOne();
    }, [lastName])
    return (
        <div>
            <h3 >Input Field One</h3>
            <input type={'text'} value={firstName} onChange={(e) =>  setFirstName(e.target.value) } /><br /><br />
            {countArray.map((item, index) => {
                return (
                    <>
                        <h7>
                            {item[0] + "==>" + item[1]} 
                        </h7><br />
                    </>
                )
            })}
            <h3>Input Field Two</h3>
            <input type={'text'} value={lastName} onChange={(e) => { setLastName(e.target.value) }}></input><br /><br />
            {countArrayOne.map((item, index) => {
                return (
                    <>
                        <h7>
                            {item[0] + "=====>" + item[1]}
                        </h7><br />
                    </>
                )

            })}
        </div>
    )


}
export default PracticeScreenTwo;