import './square.css'


export default function Square({title, descr, image, subDes}){

    return(
        <>
            <div className='square'>

                <h2>{title}</h2>
                <h1>{descr}</h1>
                <span>{subDes}</span>
                <div className='imgHolder'>
                <img src={image} className='spacer'></img>
                </div>
                </div>

        </>
    )
}