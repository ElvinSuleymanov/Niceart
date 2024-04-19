import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import CompanyCard from 'core/shared/company-card/company-card.companent';
import { useGetPartnersCompamy } from './actions/partners.query';

const PartnersComponent = () => {
  const { data: companyCardData } = useGetPartnersCompamy();
  // const { data: aboutPartnersData } = useAboutPartners();
  return (
    <div>
      <AboutHeading
        heading={'Title for about us or Lorem Ipsum motto'}
        title={'Lectus mauris pulvinar'}
        desc={
          'Commodo interdum at lorem eget amet placerat nunc posuere. Viverra lacus, nisl cursus senectus malesuada leo donec pellentesque. Id faucibus nulla adipiscing pellentesque vulputate quis pulvinar. Sapien est vestibulum in porttitor volutpat.'
        }
        buttonFirst='Became a partner'
      />
      <div className='row py-50'>
        {companyCardData?.map((company, index) => (
          <div className='col-md-3 col-lg-3 col-sm-6' key={index}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PartnersComponent;
