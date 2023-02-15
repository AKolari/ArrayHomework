import products from '../utils/products';



const Map=() =>{
    return <div className="cards">
        {products.map((product)=>{

            const {
                id,
                name,
                price,
               
                
            }=product;


            
            return <div key={id}> 
            
            <p className="text-center">{name}</p>
            <p className="text-center">{price}</p>
            
            

            </div>
        })}
    </div>
}

export default Map;