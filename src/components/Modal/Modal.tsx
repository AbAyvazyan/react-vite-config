import { FC } from 'react'
import Card from '@components/Card/Card'
import { Modal as MUIModal } from '@mui/material'
import { IData } from '@utils/types'

import styles from './Modal.module.scss'

const Modal: FC<{
    isOpen: boolean,
    cardInfo: IData,
    closeModal: () => void
}> = ({ isOpen, closeModal, cardInfo }) => {
    return (
        <MUIModal open={isOpen} onClose={closeModal}>
            <div className={styles.modalContainer}>
                <Card {...cardInfo} isInModal={true}/>
            </div>
        </MUIModal>
    )
}

export default Modal