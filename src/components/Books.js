import Book from './Book';
import styles from '../styles/Books.module.css';

const Books = () => (
  <div className={styles.books}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Book title="The Hunger Games" author="Suzanne Collins" />
      </li>
      <li className={styles.item}>
        <Book title="Dune" author="Frank Herbert" />
      </li>
      <li className={styles.item}>
        <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
      </li>
    </ul>
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Book title"
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Author"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Book
      </button>
    </form>
  </div>
);
export default Books;
