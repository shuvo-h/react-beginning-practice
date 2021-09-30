import logo from './logo.svg';
import './App.css';
import {useEffect, useState, usestate} from 'react';
import DynamicCount from './components/DynamicCount';
import LoadAPI from './components/LoadAPI';
import ElectroComponent from './components/ElectroShop/Electrocomponent';

function App() {
  const titleStyle = {
    color: "green",
    fontFamily : "cursive",
    fontSize : "64px"
  }
  const profession = {
    name : "Gopichad Bagha",
    job : "Singer",
    bestSong : ["Tuta hay ahat a dil mera","Asu hai a khome mera", "Teri hisse me hisse me", "Sob tomar mati hole amar ki?"]
  }
  const songList = [
    {name : "Tuta hay ahat a dil mera", singer: "Asif"},
    {name: "Asu hai a khome mera", singer: "Tulsi kumar"},
    {name: "Teri hisse me hisse me", singer: "Neha"},
    {name: "Sob tomar mati hole a", singer: "Dhupiya"}
  ]
    
  const productList = [
    {name:'Howie', color:'White', price:35000},
    {name:'Oppo', color:'Silver', price:45000},
    {name:'iPhone', color:'Black', price:87000},
    {name:'Real Me', color:'Red', price:25000}
    ];
  
  return (
    <div className="App">
      <ElectroComponent></ElectroComponent>
      {/* <LoadAPI></LoadAPI> */}
{/*       
      {
        productList.map(product => <DynamicCount name={product.name} price={product.price} color={product.color}></DynamicCount>)
      }
      <DynamicCount name="Xami"></DynamicCount>
      <DynamicCount></DynamicCount>
 */}
      {/* <ShowUser></ShowUser> */}
      {/* <ProductSelect></ProductSelect> */}
    {/* <CommentCount></CommentCount> */}
    {/* <LikeCount></LikeCount> */}
      
      {/* <ProjectPlan ourProjects={projects}></ProjectPlan>;
      {
        songList.map(song => <CdPlayer name={song.name} singer={song.singer}></CdPlayer>)
      } */}

      {/* add CSS style in different ways */}
      {/* <div className="container">
        <h2 style={titleStyle}>Introduction</h2>
        <h4><i>Media People</i></h4>
        <ul>
          <li>Persons's Name : {profession.name}</li>
          <li>Person's Profession: {profession.job}</li>
          <li>
            <ol style={{fontStyle: 'italic', color:"blue"}}>Song 1: {profession.bestSong[0]}</ol>
            <ol style={{fontStyle: 'italic', color:"blue"}}>Song 2: {profession.bestSong[1]}</ol>
            <ol style={{fontStyle: 'italic', color:"blue"}}>Song 3: {profession.bestSong[2]}</ol>
          </li>
        </ul>
      </div> */}


      {/* create component dynamically  */}

 
  {/* {
    productList.map(product => <ProductColor name={product.name} color={product.color} price={product.price}></ProductColor>)
  } */}

  

    </div>

  );
}

// ------------------
// call API to load data 
const ShowUser = () =>{
  const [users,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>UserList</h1>
      {
        users.map(user => <UserComponent name={user.name} officialName={user.username} website={user.website}></UserComponent>)
      }
    </div>
  )
}

const UserComponent = (props) => {
  return(
    <div className='card'>
      <h3>Name: {props.name}</h3>
      <p>use-name: {props.officialName}</p>
      <p>Website: {props.website}</p>
    </div>
  )
}

// ------------------


const ProductColor = (props) => {
  return(
    <div>
      <p>Brand Name: {props.name}</p>
      <p>Color Name: {props.color}</p>
      <p>Price Name: {props.price}</p>
    </div>
  )
}

const ProductSelect = () => {
  const [quantity, setQuantity] = useState(10);
  const productSelect = () => quantity > 0 ? setQuantity(quantity+1) : 0;
  const productDeselect = () =>  quantity > 0 ? setQuantity(quantity-1) : 0;
  
  return(
    <div>
      <div>
        <p>Total selected: {quantity}</p>
        <button onClick={productSelect}>Selected</button>
        <button onClick={productDeselect}>Deselected</button>
      </div>
    </div>
  )
}
/*
const MobileColor = () => {
  const productList = [
    {name:'Howie', color:'White', price:35000},
    {name:'Oppo', color:'Silver', price:45000},
    {name:'iPhone', color:'Black', price:87000},
    {name:'Real Me', color:'Red', price:25000}
  ];
  const ProductColor = (props) => {
    return(
      <div>
        <p>Brand Name: {props.name}</p>
        <p>Color Name: {props.color}</p>
        <p>Price Name: {props.price}</p>
      </div>
    )
  }
  {
    productList.map(product => <ProductColor name={product.name} color={product.color} price={product.price}></ProductColor>)
  }
  // console.log(arr);
}
*/

/*
const CommentCount = () => {
  const [number, setCount] = useState(0);
  const CountComment = () => {
    const newComment = number + 1;
    setCount(newComment);
  }
  return(
    <div>
      <h4>Total comments : {number}</h4>
      <button onClick={CountComment}>Post Comment</button>
    </div>
  )
}




const LikeCount = () => {
  const [count, setCount] = useState(0);
  const increaser = () => {
    const newLike = count + 1;
    setCount(newLike);
  }
  return(
    <div>
      <h3>Total: {count}</h3>
      <button onClick={increaser}>like</button>
    </div>
  )
}
*/

  
//     const projects = [
//       {name : 'Tech Echo', amount: 36500}, 
//       {name : "Natural Power", amount: 25000},
//       {name : "Future AI", amount: 4000},
//       {name : "Disaster 2050", amount: 780000}
//     ]
  
// const ProjectPlan = (props) => {
//   // console.log(props);
//   return(
//     props.ourProjects.map(project => <p>Project Title: <i>{project.name}</i> with Budget is ${project.amount}</p>)
//   )
// }

// const CdPlayer = props => {
//   console.log(props);
//   return(
//     <div>
//       <p>Song Name: <strong><i>{props.name}</i></strong></p>
//       <p>Singer: {props.singer}</p>
//     </div>
//   )
// }

export default App;
