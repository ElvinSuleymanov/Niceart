import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import PartnerCard from 'pages/partners/components/partners-card/partners-card.companent';
import { usePartners } from './actions/partners.query';
import { useLeads } from 'core/common/leads/actions/leads.query';
import useLocalization from 'assets/lang';
import { Row, Col } from 'antd';

const PartnersComponent = () => {
  const { data: partnersData } = usePartners();
  const { data: leadsData } = useLeads();
  const translate = useLocalization();
  const filteredLead = leadsData?.find((lead) => lead.tag === 'Our goal');
  return (
    <div className='px-15'>
      <AboutHeading
        heading={filteredLead?.heading || translate('partners_heading')}
        title={filteredLead?.title || translate('partners_title')}
        description={
          filteredLead?.description || translate('partners_description')
        }
        buttonFirst={translate('became_partner')}
      />
       <Row gutter={[16, 16]} justify='start'>
        {partnersData &&
          partnersData.map((partners, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <PartnerCard partners={partners} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PartnersComponent;
