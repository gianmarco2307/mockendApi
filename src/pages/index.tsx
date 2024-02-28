import { useEffect, useState } from "react";

export default function Home() {
  const [myData, setMyData] = useState([]);

   useEffect(() => {
    try {
      fetch("/api/hello")
        .then((response) => response.json())
        .then((data) => {
          setMyData(data.data);
        });
    } catch(error) {
      setMyData([]);
    }
   }, []);

   console.log(myData);
  return (
    <>
    {/* @ts-ignore */}
    <div>{myData.map((product) => { return <h2>{product.title}</h2> })}</div>
    </>
  );
}
