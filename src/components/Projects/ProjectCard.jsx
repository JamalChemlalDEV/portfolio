import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ( {project} ) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(project.imageSrc)} alt={project.title}  className={styles.image}/>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.skillsContainer}>
            <ul className={styles.skills}>
                {project.skills.map( (skill, id) => {
                    return <li key={id} className={styles.skill}>{skill}</li>
                })}
            </ul>
            </div>
            <div className={styles.links}>
                <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
        </div>
    );
}