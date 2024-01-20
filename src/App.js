import styles from './App.module.css';
import Home from './Home/Home';

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.homeCnt}>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
