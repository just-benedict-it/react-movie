import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <>
      <h1>detail</h1>
    </>
  );
}

export default Detail;
