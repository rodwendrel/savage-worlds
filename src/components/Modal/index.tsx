import * as S from './styles'
import * as React from 'react'
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export const DialogModal = () => {

    return <S.Modal>
        <Modal open={true}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
        </Modal>

    </S.Modal>
}