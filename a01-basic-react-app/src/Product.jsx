import "./Product.css";
export default function Product({idx}) {
    let title=["Mobile","Electonices","Touch light","Earphones"];
    let description=[
        ["Good product hai","best description of India"],
        ["best touch of the world","Modi bhakt"],
        ["best touch of the world","Modi bhakt"],
        ["best touch of the world","Modi bhakt"],
    ];
    let oldPrice =["120","140","340","432"];
    let newPrice = ["540","100","210","100"];

    let styles= {
        height:"200px",
        width:"200px"
    }
    let oldStyle = {
        textDecorationLine :"line-through",
    }
    let newStyle ={
        fontWeight:"bold",
    }
    let style2 ={
        backgroundColor:"yellow",
        height:"30px",
        position:"relative",
        bottom:"-22px",
        borderBottomRightRadius:"10px",
        borderBottomLeftRadius:"10px"
    }
    return (
        <div className="Product" style={styles}>
            <h1>{title[idx]}</h1>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p style={style2}>
            <span style={oldStyle}>{oldPrice[idx]}</span>
            &nbsp; &nbsp;
            <span style={newStyle}>{newPrice[idx]}</span>
            </p>
            
            
        </div>
    );
}

