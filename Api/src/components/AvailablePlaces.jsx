import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from './../loc.js'
import {fetchAvailablePleace} from './../http.js'
import {useFetch} from './../hooks/useFetch.js'

async function fetchSortedPlaces() {
  const places = await fetchAvailablePleace();
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces=sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
        resolve(sortedPlaces);
      })
            
  })
}

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isLoading, setIsLoading]=useState(false);
  // const [availablePlaces, setAvailablePlaces]=useState([]);
  // const [error, setError] = useState();
  // useEffect(()=> {
  //   // fetch('http://localhost:3000/places').then((response)=> {
  //   //   return response.json();
  //   // }).then((resData) => {
  //   //   setAvailablePlaces(resData.places);
  //   // })
  //   async function fetchPlaces() {
  //     setIsLoading(true);
  //     try {
  //       const places=await fetchAvailablePleace();
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces=sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
  //         setAvailablePlaces(sortedPlaces);
  //         setIsLoading(false);
  //       })
        
  //     } catch(error) {
  //       setError({message: error.message || 'Could not fetch places.'});
  //       setIsLoading(false);
  //     }
      
  //   }
  //   fetchPlaces();
  // }, []);

  const {isLoading, error, fetchData: availablePlaces } = useFetch(fetchSortedPlaces, []);
  
  if(error) {
    return <Error title="An error occured!" message={error.message}></Error>
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText={'Places are fetching...'}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
