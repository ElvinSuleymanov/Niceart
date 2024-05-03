import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import CompanyCard from 'pages/partners/components/partners-card/partners-card.companent';
import { usePartners } from './actions/partners.query';
import { useLeads } from 'core/common/leads/actions/leads.query';
import useLocalization from 'assets/lang';
import { Col } from 'antd';

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
      <div className='row py-50'>
        {partnersData &&
          partnersData.map((partners, index) => (
            <Col className='col-md-3 col-lg-3 col-sm-6' key={index}>
              <CompanyCard partners={partners} />
            </Col>
          ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
