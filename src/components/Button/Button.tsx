import { CSSProperties, FC, ReactNode } from 'react';
import styles from './index.module.scss';

const Button: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style }) => {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
};

export default Button;
