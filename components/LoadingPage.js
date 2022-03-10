import styles from './styles/LoadingPage.module.css'
function LoadingPage() {
  return <div className={styles.loading_container}>
     <h2 data-text="Loading..." className={styles.loading_text}>Loading...</h2>
  </div>;
}

export default LoadingPage;
