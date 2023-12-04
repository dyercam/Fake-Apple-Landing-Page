import Panel from './panel.js';
import Square from './square.js'
import BuyPage from './buy.js';
import pie from './images/apple.png'
import plate from './images/plate.png'
import slice from './images/pieSlice.png'
import thing1 from './images/thing1.png'
import thing2 from './images/thing2.png'
import thing3 from './images/thing3.png'
import { useNavigate } from 'react-router-dom';





export default function MainPage(){

    const secondImage = window.innerWidth > 650 ? 300 : 100;

    

    let navigate = useNavigate();
    const changePage = () =>{
      let path = '/buy';
      navigate(path)
    }

    return(

        <>
        <>
      <div className="headBar">
        <h2>&nbsp;</h2>
      </div>
        <div className='title'>
          <h1 className='topHeader'>Apple Pie</h1>
        </div>

        <div className="App topPanel">
          <div>
          <Panel className="topPanel"
          bSize= 'big'
          photoUrl = {pie}
          altText='Apple Pie'
          apple = "Granny Smith"
          prodName= "Apple Pie"
          price= "$299"
          clicked={changePage}
          />
          </div >
          <div className='break'>
            
          </div>
          <div>
          <Panel
            bSize = 'big'
            photoUrl = {pie}
            altText='Apple Pie'
            apple = "Red Delicious"
            prodName= "Apple Pie"
            price= "$299"
            clicked={changePage}
          />
          </div>
        </div>
        <div className="App lightGrey">
            <h1 style={{paddingBottom: 30}} >Which pie is right for you?</h1>
            <div className="secondPanel">
            <div className="short">
            <Panel 
            bSize='small'
            photoUrl = {pie}
            imgSize={secondImage}
            altText='Apple Pie'
            apple = "Granny Smith"
            prodName= "Apple Pie"
            price= "$299"
            clicked={changePage}
            details={true}
            />
            </div>
            <div className='break'>
            
          </div>
            <div className='short'>
            <Panel
              bSize='small'
              photoUrl = {pie}
              altText='Apple Pie'
              apple = "Red Delicious"
              prodName= "Apple Pie"
              price= "$299"
              clicked={changePage}
              details={true}
            />
            </div>
          </div>
        </div>
        <div className='thirdPanel'>
            <Square className=''
              title = 'Accessories'
              descr = "Find Pie Accessories In store!"
              subDes = "&nbsp;"
              image = {plate}

            />
            <div className='break'></div>
            <Square className=''
              title = 'apple trade in'
              descr = "Get credit towards a new Pie"
              subDes= "Recycle your old pie containers, It's good for you and the planet! Please do not trade in your old Pie."
              image = {slice}
            />

          </div>
          <div className='lightGrey'>
            <div className='fourthPanel'>
              <img  className='fourthImages' src={thing1}></img>
              <img className='fourthImages' src={thing2}></img>
              <img className='fourthImages' src={thing3}></img>

             
              </div>
          <div className='fifthPanel'>
               <p></p>
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Et tortor consequat id porta nibh venenatis cras. At lectus urna duis convallis convallis tellus id. Duis at tellus at urna condimentum mattis pellentesque. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Mauris cursus mattis molestie a iaculis. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Adipiscing elit pellentesque habitant morbi tristique. Sociis natoque penatibus et magnis dis parturient montes. Mattis enim ut tellus elementum. Diam sit amet nisl suscipit. Mauris nunc congue nisi vitae suscipit.

Dui vivamus arcu felis bibendum ut tristique et egestas. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Rhoncus dolor purus non enim praesent elementum. Risus viverra adipiscing at in tellus integer feugiat. Turpis egestas sed tempus urna et. At tellus at urna condimentum mattis pellentesque id nibh. Nisi scelerisque eu ultrices vitae auctor. In hac habitasse platea dictumst quisque sagittis purus sit. Sodales ut eu sem integer vitae justo eget. Commodo elit at imperdiet dui accumsan sit. Non arcu risus quis varius quam quisque id diam vel. In cursus turpis massa tincidunt.

Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Amet cursus sit amet dictum sit. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Malesuada proin libero nunc consequat interdum. Ullamcorper malesuada proin libero nunc consequat. Tincidunt dui ut ornare lectus sit amet est placerat in. Vel pharetra vel turpis nunc eget lorem dolor sed. Arcu felis bibendum ut tristique. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Morbi tristique senectus et netus et malesuada fames ac. Imperdiet dui accumsan sit amet nulla facilisi morbi.

Venenatis urna cursus eget nunc scelerisque viverra mauris. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Suspendisse in est ante in nibh. Dolor magna eget est lorem ipsum. Cursus sit amet dictum sit amet justo. Integer eget aliquet nibh praesent tristique magna sit amet. Lectus mauris ultrices eros in cursus. Eu augue ut lectus arcu bibendum at varius vel pharetra. Commodo odio aenean sed adipiscing diam donec adipiscing. Porttitor rhoncus dolor purus non. Adipiscing at in tellus integer feugiat.

In tellus integer feugiat scelerisque varius morbi. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Aliquet enim tortor at auctor urna. Lectus quam id leo in vitae. Et netus et malesuada fames ac turpis egestas sed tempus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Semper quis lectus nulla at volutpat diam ut. Convallis convallis tellus id interdum velit. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Purus in mollis nunc sed id. Arcu dictum varius duis at consectetur lorem donec massa sapien. Dis parturient montes nascetur ridiculus mus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Enim tortor at auctor urna nunc id cursus metus aliquam. Quis commodo odio aenean sed. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
              </span>
            </div>
            </div>
          
      </>
      </>

    )
}