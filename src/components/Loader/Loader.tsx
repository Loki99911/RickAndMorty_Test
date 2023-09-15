import { Oval } from "react-loader-spinner";
import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Oval
      height={110}
      width={110}
      color="#4fa94d"
      wrapperStyle={{}}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  </div>
);
