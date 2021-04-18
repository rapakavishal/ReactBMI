import {useEffect, useState} from 'react';
import './App.css';

function WebHits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    


    const apiUrl = 'https://bmi-fucntion.azurewebsites.net/api/HttpTrigger1?code=PQBK4WWGRJqIk1sNWR80V7FGagFd4mL7D6K2XEqL9cxRZaHHMH0jWw==&id=home';
    useEffect(() => {
        fetch(apiUrl, {
            mode: 'cors',
        })
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    },[])

  if (error) {
    return <h2>Number of views Error: {error.message}</h2>;
  } else if (!isLoaded) {
    return <p>Tying to load the total number of views for this react site...</p>;
  } else {
    return (
            <h2>Total number of views {items}</h2>
    );
  }
}

export default WebHits;