import TableProducts from '@/app/components/ProductsWrapper';
import Search from '@/app/components/Search';
import { fetchProducts, } from '@/app/helpers/api';


const Products = async () => {

    const products = await fetchProducts();

    console.log("PRODUCTOS >>>> ", products);

    return (
        <>
            <h1>Productos</h1>
            <Search />
            <TableProducts products={products} />
        </>
    )
}

export default Products;