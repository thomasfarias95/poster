
import styles from "../Button/style.module.css"

export default function Button(props) {
    return <button className={styles.wrapper}>{props.text}</button>
}