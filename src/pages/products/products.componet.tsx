import { useProduct } from './actions/product.query';
import ProductModel from './models/products.model';
import useLocalization from 'assets/lang';
import { useLeads } from 'core/common/leads/actions/leads.query';
import { Breadcrumb } from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import { useMemo } from 'react';
import { Routes } from 'router/routes';
import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import ProductCard from './components/product-card/product-card.component';

export const ProductsComponent: React.FC = () => {
  const { data: productData } = useProduct();
  const { data: leadsData } = useLeads();
  const translate = useLocalization();

  const filteredLead = leadsData?.find((lead) => lead.tag === 'Products');
  const breadCrumbItems = useMemo(
    () => [
      {
        title: <HomeIcon />,
      },
      {
        title: translate('products'),
        path: Routes.products,
      },
    ],
    [translate]
  );

  return (
    <div>
      <Breadcrumb className='my-0' items={breadCrumbItems} />
      <AboutHeading
        heading={filteredLead?.heading || translate('products_heading')}
        title={filteredLead?.title || translate('partners_title')}
        description={
          filteredLead?.description || translate('partners_description')
        }
      />
      <div>
        {productData &&
          productData.map((product: ProductModel) => (
            <ProductCard key={product.about.id} product={product} />
          ))}
      </div>
    </div>
  );
};
