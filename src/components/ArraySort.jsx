
import products from "../utils/products";

const ArraySort = () => {

         products.sort((a,b) => a.price - b.price);
           const ProductNames=products.map((product)=>{
                return product.name+": $"+product.price+", ";
            });


            
        
        
    

    return <div>
        <h3 className="text-center">Sorted by Price:</h3>
            <p className="text-center">
           {ProductNames}
            </p>
        
        
    </div>
}

export default ArraySort;