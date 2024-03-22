import { FC, useState } from 'react';

import { IData } from '@utils/types';

import oval from '@assets/Oval.png';
import styles from './Card.module.scss';
import Modal from '@components/Modal';

interface ICardProps extends IData {
  isInModal: boolean;
}

const Card: FC<ICardProps> = ({
  autor,
  views,
  date,
  img,
  tags,
  title,
  text,
  img_2x,
  isInModal,
}) => {
  const [isModal, setIsModal] = useState(false);
  const openModalHandler = () => setIsModal(true);
  const closeModalHandler = () => setIsModal(false);
  return (
    <>
      <div className={styles.card} onClick={() => !isInModal && openModalHandler()}>
        <div className={styles.cardImage}>
          <img src={img} />
        </div>
        <div className={styles.cardTag}>{tags}</div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardCredentials}>
          <span className={styles.cardCredName}>{autor}</span>
          <img src={oval} alt="oval" />
          <span>{date}</span>
          <img src={oval} alt="oval" />
          <span>{views} Views</span>
        </div>
        <p className={styles.cardDescription}>{text}</p>
      </div>

      <Modal
        isOpen={isModal}
        closeModal={closeModalHandler}
        cardInfo={{ autor, views, date, img, tags, title, text, img_2x }}
      />
    </>
  );
};

export default Card;
