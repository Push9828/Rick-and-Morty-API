import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/pagination.css";

const Pagination = ({ setCharacters, setIsLoading }) => {
  const [info, setInfo] = useState(1)

  const fetchCharacters = async (pageNumber) => {
    setIsLoading(true)

    let baseUrl = 'https://rickandmortyapi.com/api/character'

    if (pageNumber) {
      baseUrl += `/?page=${pageNumber}`
    }

    const result = await axios(baseUrl);

    const pageInfo = result.data.info

    setInfo({
      next: pageNumber < pageInfo.pages ? pageNumber + 1 : null,
      current: pageNumber,
      prev: pageNumber > 1 ? pageNumber - 1 : null
    })
    setCharacters(result.data.results)
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCharacters(1)
  }, [])

  return (
    <div className="pagination">
      {
        info.prev ? (
          <button type="button" onClick={ () => fetchCharacters(info.prev) }>
            { info.prev }
          </button>
        ) : (
          <React.Fragment/>
        )
      }

      <button type="button">
        { info.current }
      </button>

      {
        info.next ? (
          <button type="button" onClick={ () => fetchCharacters(info.next) }>
            { info.next }
          </button>
        ) : (
          <React.Fragment/>
        )
      }
    </div>
  )
};

export default Pagination;
