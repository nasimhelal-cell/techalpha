import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);

  return (
    <div className="products-section container mx-auto">
      <h2 className="space-font font-bold text-2xl text-center py-10">
        Browse all products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
        {status && <p className="col-span-full text-center">{status}</p>}
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
