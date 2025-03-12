import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import { AboutItem } from './aboutItem';
import aboutItems from "../../data/aboutItems.json";

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>Kenntnisse</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutMe.png")} 
                className={styles.aboutImage}
                alt="about image" />
                <ul className={styles.aboutItems}>
                    {aboutItems.map( (aboutItem, id) => {
                        return (
                            <AboutItem 
                                key={id}
                                imageSrc={aboutItem.imageSrc}
                                alt={aboutItem.alt}
                                title={aboutItem.title}
                                text={aboutItem.text}
                            />
                        );
                        
                    })}
                </ul>
            </div>
        </section>
    )
}