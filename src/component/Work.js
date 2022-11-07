import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "./Navebar";
import { WorkData } from "./WorkData";
import styles from "./Work.module.css";




const Work = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [view, setView] = useState({ img: "", i: 0 });

  useEffect(() => {
    setData(WorkData);
    setCollection([...new Set(WorkData.map((item) => item.title))]);
  }, []);

  const workFilter = (itemData) => {
    const filterData = WorkData.filter((item) => item.title === itemData);
    setData(filterData);
  };
  //-------------------------
  const viewImage = (img, i) => {
    setView({ img, i });
  };

  const viewAction = (action) => {
    if (action === "none-img") {
      setView({ img: "", i: 0 });
    }
  };

  return (
    <>
      {view.img && (
        <div className={styles.view} onClick={() => viewAction("none-img")}>
         
          <img src={view.img} className={styles.viewImg} alt="" />
          <p className={styles.viewTag}>{view.tag}</p>
          
        </div>
      )}

      <Navbar />
      <div className={styles.workWrapper}>
        <h1 key="h1">My work</h1>
        <ul className={styles.filterItem}>
          <li key="all">
            <button onClick={() => setData(WorkData)} key="all">
              All
            </button>
          </li>
          {collection.map((item) => (
            <li key={item.toString()}>
              <button
                onClick={() => {
                  workFilter(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.workContainer}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              {data.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  className={styles.workItem}
                  alt=""
                  onClick={() => viewImage(item.image, item.id)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Work;
