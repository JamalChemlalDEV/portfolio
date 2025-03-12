import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { ContactItem } from "./ContactItem";
import contacts from "../../data/contacts.json";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Kontakt</h2>
                <p>Zögern Sie nicht, sich zu melden!</p>
            </div>
            <ul className={styles.links}>
              {contacts.map( (contact, id) => {
                return (
                  <ContactItem 
                    key={id}
                    imageSrc={contact.imageSrc}
                    alt={contact.alt}
                    href={contact.href}
                    name={contact.name}
                  />
                );
              })}
            </ul>
        </footer>
    )
}