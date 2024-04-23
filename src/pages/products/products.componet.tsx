import { useGetLeads } from "core/common/actions/leads.query";
import { AboutHeading } from "core/shared/about-heading/about-heading.component";
import ProductCard from "core/shared/product-card/product-card.component";
import { useGetProduct } from "./actions/product.query";
import ProductModel from "./models/products.model";
import useLocalization from "assets/lang";

export const ProductsComponent: React.FC = () => {
  const { data: productData } = useGetProduct();
  const { data: leadsData } = useGetLeads();
  const translate = useLocalization();

  const filteredLead = leadsData?.find((lead) => lead.tag === "Products");
  return (
    <div>
      <AboutHeading
        heading={filteredLead?.heading || translate("productsHeading")}
        title={filteredLead?.title || translate("partnersTitle")}
        description={
          filteredLead?.description || translate("partnersDescription")
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
