import React, { useState } from "react";
import axios from "axios";
function PracticeScreenThree() {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    function onButtonClick() {
        setLoading(true);
        axios.get(`https://api.agify.io/?name=${inputValue}`).then((response) => {
            setData(response.data);
            console.log(response);
            setLoading(false);
        }).catch((error) => {
            setError(true);
            setLoading(false);
            console.log(error);
        })
    }
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error...</h2>
    }
    if (Object.keys(data).length > 0) {
        return <>
            <h2>{data?.name}</h2>
            <h2>{data?.age}</h2>
            <h2>{data?.count}</h2>
        </>
    }
    return (
        <div>
            <input type={'text'} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <br />
            <input type={'button'} value="Search" onClick={() => onButtonClick()} />
        </div>
    )
}
export default PracticeScreenThree;