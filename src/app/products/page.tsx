import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <Link href="products/1">
        <h3>Product 1</h3>
      </Link>
      <Link href="products/2">
        <h3>Product 2</h3>
      </Link>
      <Link href="products/3" replace>
        <h3>Product 3</h3>
      </Link>
    </>
  );
}
