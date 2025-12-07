import { useEffect, useState } from "react";
export function useFetch(fetchFn, intialData){
    const [isFecthing, setIsFetching]=useState(false);
    const [error, setError] = useState();
    const [fetchData, setFetchData] = useState(intialData)
    useEffect(()=> {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const data=await fetchFn();
            setFetchData(data);
            
          } catch(error) {
            setError({message: error.message || 'Could not fetch places.'});
            setIsFetching(false);
          }
          
        }
        fetchPlaces();
      }, [fetchFn]);

      return {
        isFecthing,
        fetchData, 
        setFetchData,
        error
      }
}