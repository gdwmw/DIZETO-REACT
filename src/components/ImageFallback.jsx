import React, { useState } from "react";

export default function ImageFallback(props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return <img src={props.src} alt={props.alt} style={{ height: loaded ? "auto" : "300px" }} onLoad={handleLoad} />;
}
