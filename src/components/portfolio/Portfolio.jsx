import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  desktopPortfolio,
  webPortfolio,
  designPortfolio
} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "Desktop",
      title: "Desktop App",
    },
    {
      id: "design",
      title: "Templates",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "Desktop":
        setData(desktopPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
     <h1>Portfolio</h1>
     <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title}  
          active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
     </ul>
    <div className="container">
    {data.map((d) => (
          <div className="item">
            <a href={d.lien} target="_blank"> <img
              src={d.img}
              alt=""
            />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
    </div>
    </div>
  )
}
