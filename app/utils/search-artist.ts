import { useEffect, useState } from 'react';
import axios from "axios"

export const useSearchArtist = (str: string): string[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!str) {
      return setData([]);
    }
    (async function () {
      try {

        const response = await axios.post(
          JSON.stringify({
            query: `{getArtists(term: "${str}"){artists}}`
          })
        );
        console.log(response.data)
        setData(response.data.data.getArtists.artists);
      }
      catch (err) { console.log(err) }
    })();
  }, [str]);

  return data;
};