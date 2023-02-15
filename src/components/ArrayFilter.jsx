import products from "../utils/products";
const ArrayFilter = () => {

  


    return <ol className="text-center">
        {
            products.filter(( {onSale} ) => onSale !== false).map(({onSale, name}) => <li key={onSale}>{name}</li>)
        }
    </ol>
}

export default ArrayFilter;