import { ItemPost } from "../ItemPost";
import styles from "./style.module.css";

const generateUniqId = () => {
  return "id_" + Math.random().toString(16).slice(2);
};

const list = [
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    img: "https://kartinkin.net/uploads/posts/2022-03/1646267153_56-kartinkin-net-p-kartinki-odinokaya-devushka-64.jpg",
    text: "Lorem Ipsum is simply dummy text of ...",
    data: "01.01.2001",
  },
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    img: "https://klike.net/uploads/posts/2019-01/1548398620_16.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry of the printing and typesetting industry...",
    data: "13.12.2012",
  },
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of tting industry...",
    data: "05.12.2020",
  },
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    img: "https://kartinkin.net/uploads/posts/2022-03/thumbs/1646267101_63-kartinkin-net-p-kartinki-odinokaya-devushka-71.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    data: "28.10.2021",
  },
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    img: "https://shutniks.com/wp-content/uploads/2020/04/odinochestvo_7_12093234.jpg",
    data: "31.12.2021",
  },
  {
    id: generateUniqId(),
    textTitle: "What is Lorem Ipsum?",
    data: "13.09.2015",
  },
];

export const PostCards = () => {
  return (
    <div className={styles.qw}>
      {list.map((item) => {
        return (
          <ItemPost
            textTitle={item.textTitle}
            img={item.img}
            text={item.text}
            data={item.data}
          />
        );
      })}
    </div>
  );
};
