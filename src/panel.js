import './panel.css'
import greenApple from './images/greenApple.png'
import redApple from './images/redApple.png'
import scentLines from './images/odorLines.png'

export default function Panel({photoUrl, imgSize, altText, apple, prodName ,price, clicked, details = false, bSize}){


    function detail(){
        if(apple==="Granny Smith"){
            return(
                <>
                <div >&nbsp;</div>
                <div style={{padding:10}}>
                    <h4>10.3"</h4>
                    <span>Diameter</span>
                </div>
                &nbsp;
               <div style={{padding:10}}>
                    <h4>Granny Smith</h4>
                    <span>Apple</span>
               </div >
               &nbsp;
               <div style={{padding:10}}>
                    <h4>Short Crust</h4>
                    <span>Crust</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4><img className='subimage' src={greenApple} alt="Green Apple"></img></h4>
                    <span>up to 8 apples</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4>4.1 lb.</h4>
                    <span>weight</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4><img className='subimage' src={scentLines} alt='scent'></img></h4>
                    <span>Scented</span>
               </div>
               <p></p>
                </>
            )
        }
        else{
            return(
                <>
                <div>&nbsp;</div>
                <div style={{padding:10}}>
                    <h4>11"</h4>
                    <span>Diameter</span>
                </div>
                &nbsp;
                <div style={{padding:10}}>
                    <h4>Red Delicious</h4>
                    <span>Apple</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4>Puff Pastry</h4>
                    <span>Crust</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4><img className='subimage' src={redApple} alt="red apple"></img></h4>
                    <span>up to 10 apples</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4>4.8 lb.</h4>
                    <span>weight</span>
               </div>
               &nbsp;
               <div style={{padding:10}}>
                    <h4><img className='subimage' src={scentLines} alt='scent'></img></h4>
                    <span>Scented</span>
               </div>
               <p></p>
                </>
                
            )
        }
        
    }

    
    let bStyle = '';
    if(bSize === 'big'){
       bStyle = 'bigB'
    }
    else{
        bStyle='smallB'
    }

    return(
        <div className='alignCol'>

            <img className = 'img' src={photoUrl} alt={altText} height={imgSize} width={imgSize}></img>
            <h3>{apple}</h3>
            <h1>{prodName}</h1>
            <span className='align'>From {price}</span>
            <button className={bStyle} onClick={clicked}>Buy</button>

                {details ? (
                    <>
                    <p></p>
                    {detail()}
                    </>
                ) : (
                    null
                )}


        </div>
    )
}