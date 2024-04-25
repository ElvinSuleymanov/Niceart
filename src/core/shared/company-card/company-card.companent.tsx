import { FC, useState } from 'react';
import { useCompanyCardStyles } from './company-card.style';
import { CompanyCardProps } from './company-card';
import CustomModal from '../modal/custom-modal.component';

const CompanyCard: FC<CompanyCardProps> = ({ company }) => {
  const classes = useCompanyCardStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={openModal} className={classes.companyCard}>
        <div className={classes.companyHead}>
          <img
            src={company.file?.url}
            className={classes.companyImage}
            alt={company.name}
          />
          <p className={classes.companyName}>{company.name}</p>
        </div>
        <div>
          <button className={classes.companyButton}>E-COMMERCE</button>
        </div>
      </div>
      <CustomModal
        company={company}
        show={isModalOpen}
        onHide={closeModal}
      />
    </>
  );
};

export default CompanyCard;
