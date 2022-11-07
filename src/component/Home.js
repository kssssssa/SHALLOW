import React from "react";
import styles from "./Home.module.css";
import Navbar from "./Navebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.banner}>
        <div className={styles.banner_text}>
          <h1>Welcome to Shallow</h1>
          <h4>來自一個新鮮人的Portfolio</h4>
        </div>
      </section>
 
        <div className={styles.about}>
        <h1 className={styles.about__title}>About me</h1>

          <p>
            嗨！我是陳瀚璇，出生自桃園，畢業於國立勤益科技大學的文化創意事業系。個性沉靜隨和，有著學習的熱忱。喜歡嘗試新奇的東西，對於科技的發展也很有興趣，平時也會利用網路多看多學。
            <br />
          </p>

          <img
            className={styles.about__img}
            src={require("../S__1736724.jpg")}
            alt=""
          />

          <p>
            我曾在大三時，與系上的學長姐一同參加了2020放視大賞，在過程中我學習到了企劃的基本技術、搜尋並分析競品的資料及大數據的手段，以及實作的重要性。這時的我對於程式語言仍是零概念，但因為平常也喜歡玩遊戲，所以對寫程式有了興趣。
            <br />
            另外就是校外實習，在實習中我體驗到職場生活，與上課不同，上班不是被動接收訊息，而是需要主動了解主管需求，因為交派給我工作的主管很忙，時常不會在第一時間把所有需要的事情都交代到。必須自己意識到有哪些事情也是需要了解才不會去執行的時候搞錯。
          </p>
          <p>
            在這大學四年，我更認識自己，也發現自己對有互動性的內容感興趣，於是朝著網頁這個方向在網路尋找前端程式語言的課程及文章，並自主學習。目前對前端工程已有基本概念，也隨時準備接受更多挑戰，達成幫助公司與自我實現的目標。
          </p>
        </div>
    </>
  );
};

export default Home;
