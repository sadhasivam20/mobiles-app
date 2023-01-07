import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
<PhoneList />
    </div>
  );
}
function PhoneList(){
  const mobiles= [{
    "model": "OnePlus 9 5G",
    "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    "company": "Oneplus"
    },
    {
    "model": "Iphone 13 mini",
    "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
    "company": "Apple"
    },
    {
    "model": "Samsung s21 ultra",
    "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
    "company": "Samsung"
    },
    {
    "model": "Xiomi mi 11",
    "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
    "company": "Xiomi"
    }
    ]
    return(
      <div>
         {mobiles.map((mc)=>( 
<Phone mobiles={mc}/>
      ))}
      </div>
    )
}
function Phone({mobiles}){
  // singlee value can be created..
  // const mobiles={
  //   "model": "OnePlus 9 5G",
  //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   "company": "Oneplus"
  //   }
    return(
      <div className='phone-container'>
        <img className='phone-picture'   src={mobiles.img}></img>
        <p className='phone-name'>{mobiles.model}</p>
        <p className='phone-company'>{mobiles.company}</p>
      </div>
    )
}

export default App;
