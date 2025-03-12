import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const ContactItem = (props) => {
    return (
        <li className={styles.link}>
            <img src={getImageUrl(`contact/${props.imageSrc}`)} alt={props.alt} />
            <a href={props.href} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </li>
    )
}