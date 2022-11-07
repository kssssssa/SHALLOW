import Navbar from "./Navebar";
import styles from "./Link.module.css";
import Feedback from "./Feedback";



const Link = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
          <div className={styles.box}>
            <a href="https://github.com/kssssssa">Github</a>
            <a href="https://github.com/kssssssa/SHALLOW">SHALLOW-Homepage</a>
            <a href="https://github.com/kssssssa/ChangeColor">Side Project</a>
          </div>
          <div className={styles.box}>
            <Feedback />
          </div>
       
      </div>
    </>
  );
};

export default Link;
