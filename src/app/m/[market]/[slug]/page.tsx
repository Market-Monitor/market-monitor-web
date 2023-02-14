const ProductPage = ({
  params,
}: {
  params: { market: string; slug: string };
}) => {
  return (
    <p>
      {params.slug} | {params.market}
    </p>
  );
};

export default ProductPage;
