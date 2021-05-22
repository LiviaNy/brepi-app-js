import { useEffect, useState } from "react";
import Beers from "./Beers";
import Paginator from "./Paginator";

const Home = () => {
  let [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        const beerData = [];
        for (let i = 0; i < data.length; i++) {
          beerData.push(data[i].description);
        }
        setDatas(data);
      });
  }, [page]);

  const handlePage = (number) => {
    if (number > 0) {
      setPage(number);
    } else if (number === -1 && page !== 6) {
      setPage(page++);
    } else if (number === -2 && page !== 1) {
      setPage(page--);
    } else {
      setPage(1);
    }
  };

  const [datas, setDatas] = useState([]);
  const handleClick = () => {
    console.log(datas);
    console.log("Clicked");
  };
  return (
    <div className="home">
      {datas && <Beers beers={datas} onClick={handleClick} />}
      {page && <Paginator handlePage={handlePage} />}
    </div>
  );
};

export default Home;
<div className="home"></div>;
