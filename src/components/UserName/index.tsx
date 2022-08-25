import styles from "./style.module.css";

interface Props {
  userName: string;
}

export const UserName = (props: Props) => {
  const initials = props.userName.split(" ");
  const initialsFirst = initials[0][0].toUpperCase();
  const initialsSecond = initials[1] ? initials[1][0].toUpperCase() : "";

  return (
    <div className={styles.userNameBlock}>
      <div className={styles.userNameBlockInner}>
        <h2 className={styles.innerBlockInitials}>
          {initialsFirst}
          {initialsSecond}
        </h2>
        <h2 className={styles.innerBlockAllName}>{props.userName}</h2>
      </div>
    </div>
  );
};
