import fs from "fs/promises";
import path from "path";
function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// should always return props , this function gets executed first , run codes that will never be visivle in client side
export async function getStaticProps() {
  // to get current working directory with process.cwd() , with this our cwd is the overall project rather than in index.js
  const filePath = path.join(process.cwd(), "data", "dummy-bakend.json");
  const jsonData = await fs.readFile(filePath);
  // Json.parse converts json into regular js object
  const data = JSON.parse(jsonData);
  return { props: { products: data.products } };
}

export default HomePage;
