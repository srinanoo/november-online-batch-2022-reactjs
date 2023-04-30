import { useEffect, useState } from "react";

function FnAPI() {

    const [apiData, setAPIData] = useState({});
    const [zipcode, setZipcode] = useState(33162);

    const fetchData = (usCode) => {
        fetch(`https://api.zippopotam.us/us/${usCode}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAPIData(data);
            });
    }

    useEffect(() => {
        // let timer = setInterval(() => {
        //     console.log("useEffect...")
        //     fetchData(zipcode);    
        // }, 10000);

        // return () => clearInterval(timer);

        fetchData(zipcode);
    }, [zipcode]);

    console.log("rendering...");

    return (
        <>
            <h1>API Data</h1>
            {
                apiData.places && <p>State: {apiData.places[0].state}</p>
            }
            
            <p>Country: {apiData.country}</p>

            <p><button onClick={() => setZipcode(94501)}>Show Zipcode of 94501</button></p>
        </>
    )
}

export default FnAPI;