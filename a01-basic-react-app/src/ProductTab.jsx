import Product from "./Product.jsx"
import "./ProductTab.css"

export default function ProductTab(){
    let styles={
        display:"flex",
        justifyContent:"center"
    };
    return(
        <div className="ProductTab" style={styles}>
            <Product idx={0}/>
            <Product idx={1}/>
            <Product idx={2}/>
            <Product idx={3}/>
        </div>
    );
}

