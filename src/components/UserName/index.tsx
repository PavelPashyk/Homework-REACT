import styles from "./style.module.css";

interface IProps {
  userName: string;
  isDark?: boolean;
}

export const UserName = (props: IProps) => {
  const initials = props.userName.split(" ");
  const initialsFirst = initials[0][0].toUpperCase();
  const initialsSecond = initials[1] ? initials[1][0].toUpperCase() : "";

  return (
    <div
      className={`${styles.userNameBlock} ${
        props.isDark ? styles.isDarkBlock : null
      }`}
    >
      <div className={styles.userNameBlockInner}>
        <h2
          className={`${styles.innerBlockInitials} ${
            props.isDark ? styles.isDarkBlockInner : ""
          }`}
        >
          {initialsFirst}
          {initialsSecond}
        </h2>
        <h2 className={styles.innerBlockAllName}>{props.userName}</h2>
      </div>
    </div>
  );
};
