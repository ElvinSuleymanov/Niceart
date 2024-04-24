import { FC } from 'react';
import { useModalStyles } from './modal.style';
import { Link } from 'react-router-dom';
import { ModalProps } from './modal';
import ButtonComponent from '../button/button.component';
import { usePartnersCardStyles } from 'pages/partners/components/partners-card/partners-card.style';

const CustomModal: FC<ModalProps> = ({ show, onHide, partners }) => {
  const classesM = useModalStyles();
  const classesC = usePartnersCardStyles();
  if (!show || !partners) return null;
  return (
    <div className={classesM.modal}>
      <div className={classesM.modalContent}>
        <div>
          <div className={classesC.partnersHead}>
            <img
              src={partners.file?.url}
              className={classesM.modalImage}
              alt={partners.name}
            />
            <div>
              <p className={classesC.partnersName}>{partners.name}</p>

              <button className={classesC.partnersButton}>E-COMMERCE</button>
            </div>
          </div>
        </div>
        <div className={classesM.modalText}>
          <p>{partners.description}</p>
        </div>
        <div className={classesM.modalButtons}>
          <Link to={partners.site}>
            <ButtonComponent type={'primary'} arrow={'up'}>
              Visit Website
            </ButtonComponent>
          </Link>
          <ButtonComponent type={'secondary'} onClick={onHide}>
            Close
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
