import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const AboutItem = (props) => {
    return (
        <li className={styles.aboutItem}>
            <img src={getImageUrl(`about/${props.imageSrc}`)} alt={props.alt} />
            <div className={styles.aboutItemText}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </li>
    )
}