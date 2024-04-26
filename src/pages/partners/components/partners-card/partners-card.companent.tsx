import { FC, useCallback, useState } from "react";
import { usePartnersCardStyles } from "./partners-card.style";
import CustomModal from "../../../../core/shared/modal/custom-modal.component";
import { PartnersCardProps } from "./partners-card";
// import { Modal, Flex } from "antd";

const PartnerCard: FC<PartnersCardProps> = ({ partners }) => {
  const classes = usePartnersCardStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const openModalHandler = useCallback(() => {
  //   setIsModalOpen(!isModalOpen);
  // }, [isModalOpen]);
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

      {/* <Modal cancelText='Close' cancelButtonProps={{className:classes.cancelBtn}} open={isModalOpen} >
          <Flex vertical>
      
            <Flex align='center' gap={20}>
              <img className={classes.image} src={partners.file.url as string}  />
              <Flex vertical>
                  {partners.name}
                  <span>
                    {partners.tag}
                  </span>
              </Flex>
            </Flex>

            {partners.description}
          </Flex>

        </Modal> */}
    </>
  );
};

export default PartnerCard;
