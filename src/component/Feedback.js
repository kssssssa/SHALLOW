import { useState } from "react";
import axios from "axios";
import styles from "./Feedback.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);

    const data = {
      Title: title,
      Content: content,
    };

    axios
      .post(
        process.env.REACT_APP_SHEET_API,
        data
      )
      .then((response) => {
        console.log(response);
        //clearing form fields
        setTitle("");
        setContent("");
      });
  };

  const notify = () => {
    if (title !== "" && content !== "")
      toast.success("已送出", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
  };

  return (
    <>
      <div className={styles.container}>
        {/* Title*/}
        <h2>SHALLOW Feedback</h2>
        {/* From */}
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={handlerSubmit}
        >
          <label>回報主題：</label>
          <input
            type="text"
            placeholder="請輸入回報主題"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />

          <label>狀況詳述：</label>
          <textarea
            type="text"
            placeholder="請描述所遇到的狀況"
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <br />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
          <button type="submit" className={styles.form_button} onClick={notify}>
            回報
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
