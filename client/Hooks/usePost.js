import React, {useState, useEffect} from 'react'
import axios from 'axios'

function usePost(url, values) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    async function postUrl() {

      axios({
        method: "POST",
        url: url,
        data: values,

      })
        .then(res => {
          setData(res.data)
          setLoading(false);
        })
        .catch(e => {
          setError(e)
          setLoading(false);
        })
    }

      useEffect(() => {
        postUrl();
      }, []);
      return [data, loading];



}

export default usePost