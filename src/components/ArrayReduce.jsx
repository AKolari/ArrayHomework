import products from "../utils/products";

const ArrayReduce = () => {

    

    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

   


    return  <div>
                <p className="text-center">Total Price: {totalPrice}</p>
               
            </div>
}

export default ArrayReduce;