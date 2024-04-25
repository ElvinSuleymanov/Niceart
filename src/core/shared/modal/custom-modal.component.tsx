import { FC } from 'react';
import { useModalStyles } from './modal.style';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useCompanyCardStyles } from '../company-card/company-card.style';
import { ModalProps } from './modal';

const CustomModal: FC<ModalProps> = ({ show, onHide, company }) => {
  const classesM = useModalStyles();
  const classesC = useCompanyCardStyles();
  if (!show || !company) return null;
  return (
    <div className={classesM.modal}>
      <div className={classesM.modalContent}>
        <div>
          <div className={classesC.companyHead}>
            <img
              src={company.file?.url}
              className={classesM.modalImage}
              alt={company.name}
            />
            <div>
              <p className={classesC.companyName}>{company.name}</p>

              <button className={classesC.companyButton}>E-COMMERCE</button>
            </div>
          </div>
        </div>
        <div className={classesM.modalText}>
          <p>{company.description}</p>
        </div>
        <div className={classesM.modalButtons}>
          <Link to={company.site}>
            <Button variant={'primary'} arrow={'up'}>
              Visit Website
            </Button>
          </Link>
          <Button variant={'outline'} onClick={onHide} size={'large'}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
