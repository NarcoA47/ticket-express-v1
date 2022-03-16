import Layout from "./Layout";
import styles from "./styles/NoItems.module.css";

function NoItems() {
  return (
    <Layout>
      <div className={styles.no_content}>
        <div>
          <pre>Sorry, no items to display :/</pre>
          <h2 className="text-2xl">More events coming soon!</h2>
          <p className={styles.subtext}>Try visiting one of the links below</p>
          <small>
            <br />
            <br />
            (This could also be caused by bad network)
          </small>
        </div>
      </div>
    </Layout>
  );
}

export default NoItems;
