import './buy.css'
import pie from './images/apple.png'
import botInfo from './images/botImage.png'
import { useState, useEffect} from 'react'

export default function BuyPage(){

    const [appleCount, setApplecount] = useState(8)
    const [pieSize, setPieSize] = useState(8)
    const [crust, setCrust] = useState('Flaky')
    const [appleVal, setAppleVal] = useState(0)
    const [sizeVal, setSizeVal] = useState(0)
    const [crustVal, setCrustVal] = useState(0)
    


    function Option({text, cost, styling, clicked, selected = false}){
        return(

            <label className={styling} onClick={clicked}>
                <h4 className='buttonText'>{text}</h4>
                <h4 className='buttonCost'> { !selected ? (cost > 0 ? '+' +  "$" + cost : '-' + "$" + cost*-1) : null}</h4>
            </label>
        )

    }

    function appleChange(){
        if(appleCount === 8){
            setApplecount(12)
            setAppleVal(90)
        }
        else if (appleCount === 12){
            setApplecount(8)
            setAppleVal(0)
        }
    }

    function sizeChange(id){
        if (id === 8){
            setPieSize(8)
            setSizeVal(0)
        }
        else if (id === 10){
            setPieSize(10)
            setSizeVal(40)

        }
        else if (id === 12){
            setPieSize(12)
            setSizeVal(80)

        }
        else if (id === 16){
            setPieSize(16)
            setSizeVal(120)

        }
    }

    function crustChange(type){
        if(type === "Flaky"){
            setCrust("Flaky")
            setCrustVal(0)
        }
        else if (type === "Filo"){
            setCrust("Filo")
            setCrustVal(50)
        }
        else if (type = "Puff Pastry"){
            setCrust("Puff Pastry")
            setCrustVal(100)
        }
    }
    const [scWidth, setscWidth] = useState(window.innerWidth)
   
       

        useEffect(()=>{
            function handleResize() {
                setscWidth(window.innerWidth)
            }
            window.addEventListener('resize', handleResize)
        })



    return(
        <>
        <div className="headBar">
    <h2>&nbsp;</h2>
    </div>
            <div className='cont'>
                { scWidth > 1000 ? (
                <div className="contL">
                    <img className='imgTag' src={pie}></img>
                    <img className = 'botInfo' src={botInfo}></img>
                    <p style={{maxWidth: 500}}></p>
                </div>) : (<div className="contL"></div>)
                }
                <div className="contR">
                    <h1>Customize your Pie</h1>
                    <span className='info'><b>{appleCount}</b> freshly picked apples, baked right into the pie</span>
                    <span className='info'><b>{pieSize}</b> inch diameter pie pan</span>
                    <span className='info'>A delicious {crust} crust</span>
                    <p className=''></p>
                    <h4>Apple trade in</h4>
                    <span>Again, please do not trade in your old Apple Pie. They don't last long enough to return. We reccomend eating them as soon as you can!</span>
                    <p></p>
                    <h4>Apples</h4>
                    <span>How many apples are right for you?</span>
                    <div className='optionDiv'>
                    <Option
                    styling= {appleCount === 8 ? "optionButtonSelect" : "optionButton"}
                    text = '8 Apples'
                    cost = {0 - appleVal}
                    clicked= {appleChange}
                    selected = {appleCount === 8 ? true : false}
                    />
                    <div>&nbsp;</div>
                    <Option 
                    styling= {appleCount === 12 ? "optionButtonSelect" : "optionButton"}
                    text = '12 Apples'
                    cost = {90 -appleVal}
                    clicked={appleChange}
                    selected = {appleCount === 12 ? true : false}
                    />
                    </div>
                    <h4>Size</h4>
                    <span>What size Pie is best for you?</span>
                    <div className='optionDiv'>
                        <Option 
                        styling= {pieSize === 8 ? "optionButtonSelect" : "optionButton"}
                        text='8 Inch Diameter'
                        cost={0 - sizeVal}
                        clicked={() => sizeChange(8)}
                        selected = {pieSize === 8 ? true : false}
                        />
                         <div>&nbsp;</div>
                        <Option 
                        styling= {pieSize === 10 ? "optionButtonSelect" : "optionButton"}
                        text='10 Inch Diameter'
                        cost={40 - sizeVal}
                        clicked={() => sizeChange(10)}
                        selected = {pieSize === 10 ? true : false}

                        />
                         <div>&nbsp;</div>
                        <Option 
                        styling= {pieSize === 12 ? "optionButtonSelect" : "optionButton"}
                        text='12 Inch Diameter'
                        cost={80 - sizeVal}
                        clicked={() => sizeChange(12)}
                        selected = {pieSize === 12 ? true : false}

                        />
                         <div>&nbsp;</div>
                        <Option 
                        styling= {pieSize === 16 ? "optionButtonSelect" : "optionButton"}
                        text='16 Inch Diameter'
                        cost={120 - sizeVal}
                        clicked={() => sizeChange(16)}
                        selected = {pieSize === 16 ? true : false}

                        />
                    </div>
                    <h4>Crust</h4>
                    <span>What crust is right for you?</span>
                    <div className='optionDiv'>
                        <Option 
                        styling= {crust === "Flaky" ? "optionButtonSelect" : "optionButton"}
                            text='Flaky'
                            cost={0 - crustVal}
                            clicked={()=> crustChange("Flaky")}
                            selected = {crust === "Flaky" ? true : false}

                        />
                        &nbsp;
                        <Option 
                        styling= {crust === "Filo" ? "optionButtonSelect" : "optionButton"}
                            text='Filo'
                            cost={50 - crustVal}
                            clicked={()=> crustChange("Filo")}
                            selected = {crust === "Filo" ? true : false}

                        />
                        &nbsp;
                        <Option 
                        styling= {crust === "Puff Pastry" ? "optionButtonSelect" : "optionButton"}
                            text='Puff Pastry'
                            cost={100 - crustVal}
                            clicked={()=> crustChange("Puff Pastry")}
                            selected = {crust === "Puff Pastry" ? true : false}

                        />
                        &nbsp;
                    </div>
                </div>
            </div>
            
            <div className='lightGrey'>
            <span className='lorem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Et tortor consequat id porta nibh venenatis cras. At lectus urna duis convallis convallis tellus id. Duis at tellus at urna condimentum mattis pellentesque. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Mauris cursus mattis molestie a iaculis. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Adipiscing elit pellentesque habitant morbi tristique. Sociis natoque penatibus et magnis dis parturient montes. Mattis enim ut tellus elementum. Diam sit amet nisl suscipit. Mauris nunc congue nisi vitae suscipit.

Dui vivamus arcu felis bibendum ut tristique et egestas. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Rhoncus dolor purus non enim praesent elementum. Risus viverra adipiscing at in tellus integer feugiat. Turpis egestas sed tempus urna et. At tellus at urna condimentum mattis pellentesque id nibh. Nisi scelerisque eu ultrices vitae auctor. In hac habitasse platea dictumst quisque sagittis purus sit. Sodales ut eu sem integer vitae justo eget. Commodo elit at imperdiet dui accumsan sit. Non arcu risus quis varius quam quisque id diam vel. In cursus turpis massa tincidunt.

Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Amet cursus sit amet dictum sit. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Malesuada proin libero nunc consequat interdum. Ullamcorper malesuada proin libero nunc consequat. Tincidunt dui ut ornare lectus sit amet est placerat in. Vel pharetra vel turpis nunc eget lorem dolor sed. Arcu felis bibendum ut tristique. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Morbi tristique senectus et netus et malesuada fames ac. Imperdiet dui accumsan sit amet nulla facilisi morbi.

Venenatis urna cursus eget nunc scelerisque viverra mauris. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Suspendisse in est ante in nibh. Dolor magna eget est lorem ipsum. Cursus sit amet dictum sit amet justo. Integer eget aliquet nibh praesent tristique magna sit amet. Lectus mauris ultrices eros in cursus. Eu augue ut lectus arcu bibendum at varius vel pharetra. Commodo odio aenean sed adipiscing diam donec adipiscing. Porttitor rhoncus dolor purus non. Adipiscing at in tellus integer feugiat.

In tellus integer feugiat scelerisque varius morbi. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Aliquet enim tortor at auctor urna. Lectus quam id leo in vitae. Et netus et malesuada fames ac turpis egestas sed tempus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Semper quis lectus nulla at volutpat diam ut. Convallis convallis tellus id interdum velit. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Purus in mollis nunc sed id. Arcu dictum varius duis at consectetur lorem donec massa sapien. Dis parturient montes nascetur ridiculus mus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Enim tortor at auctor urna nunc id cursus metus aliquam. Quis commodo odio aenean sed. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
              </span>
              <p className='pSpace'></p>
            </div>
            <div className='botBanner lightGrey'>
                <div className='price'>
                <h2> ${299 + appleVal + sizeVal + crustVal} or</h2>
                <h2>${((299 + appleVal + sizeVal + crustVal)/12).toFixed(2)}/mo. for 12 mo.</h2>
                </div>
                <div style={{paddingTop:20, paddingLeft: 10}}>
                <button onClick={() => alert("This button does not buy anything, as this is an example website.")} className='buyButton'> Buy</button>
                </div>
            </div>
        </>
    )
}

//lets have # of apples, size of pie, and type of crust be changeable