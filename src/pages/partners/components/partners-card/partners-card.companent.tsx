import { FC, useState } from 'react';
import { usePartnersCardStyles } from './partners-card.style';
import CustomModal from '../../../../core/shared/modal/custom-modal.component';
import { PartnersCardProps } from './partners-card';

const PartnerCard: FC<PartnersCardProps> = ({ partners }) => {
  const classes = usePartnersCardStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className={classes.partnersCard}>
        <div className={classes.partnersHead}>
          <img
            src={partners.file?.url}
            className={classes.partnersImage}
            alt={partners.name}
          />
          <p className={classes.partnersName}>{partners.name}</p>
        </div>
        <div>
          <button className={classes.partnersButton}>{partners.tag}</button>
        </div>
      </div>
      <CustomModal partners={partners} show={isModalOpen} onHide={closeModal} />
    </>
  );
};

export default PartnerCard;
