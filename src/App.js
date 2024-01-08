import styles from './App.module.css';
import Home from './Home/Home';

function App() {
  return (
    <>
      <div className={styles.App}>
        <div>
          <h1> Calculator App </h1>
        </div>
        <div className={styles.homeCnt}>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
