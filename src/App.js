import styles from './App.module.css';
import Home from './Home/Home';

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.appName}>
          <h3> Calculator App </h3>
        </div>
        <div className={styles.homeCnt}>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
