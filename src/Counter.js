
import React, { useState, useEffect } from "react"
import { badgen } from "badgen"

// @FIXME
// force render badge next to blog title
const style = {
  top: '-222px',
  left: '234px',
  position: 'relative'
};

function Counter() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:7071/api/SqlSequence")
      .then(res => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setCount(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const status = error ? error :
                  !isLoaded ? 'Loading...' : count;
  const svgString = badgen({
    label: 'Views',
    status : `${status}`,
    color: 'blue',
    scale: 1
  })
  return (
    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`} style={style}/>
  );
}

export default Counter;
