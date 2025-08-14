import ProductSection from "./ProductSection.tsx";
import { useEffect } from "react";
import type { AppDispatch } from "../../stores/store.ts";
import { useDispatch } from "react-redux";
import { fetchPublicSections } from "../../stores/ProductSectionThunk.ts";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores/store.ts";

const FeaturedProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sections = useSelector(
    (state: RootState) => state.productSection.sections
  );
  const sortedSections = [...sections].sort(
    (a, b) => a.display_order - b.display_order
  );

  useEffect(() => {
    dispatch(fetchPublicSections());
  }, []);

  return (
    <div>
      {sortedSections.map((section, index) => (
        <div key={index}>
          <ProductSection
            title={section.title}
            products={section.product_section_products}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProduct;
