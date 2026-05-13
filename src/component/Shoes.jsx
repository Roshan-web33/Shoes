import React, { useState } from 'react'

const Shoes = ({ cart, setCart }) => {

     const shoes = [
    {
        id:1,
        img: 'https://cdn.shopify.com/s/files/1/0779/3380/5887/files/Maroon-Women_s-Slip-on-Shoes_600x600.jpg?v=1724921458',
        Name: 'Walkaroo Lightweight Sneakers',
        price : 600,   
    },
     { 
        id:2,
        img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Photoshoot for Nike ',
        price : 1999,   
    },
    {
        id:3,
        img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'So impressed with how comfortable ',
        price : 1999,   
    },
    {
        id:4,
        img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Puma White Sneakers',
        price : 1499,   
    },
    {
        id:5,
        img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Sneaker Shots ',
        price : 599,   
    },
    {
        id:6,
        img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Niki shoes',
        price : 2499,   
    },
    {
        id:7,
        img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Nike Air Force',
        price : 999,   
    },
    {
        id:8,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ_u65MCX0KMgqaI21YUiwVGHZAfhPhizKXFrFINYvpVlDJw8fAJ8kqJxyoON1qk-7sgLtyGq6keEu5oEVAYJAE9O3N1FOmZk3hxnx0mnKMyKl2xDjVmZnRDCLQlwJ8utBwoJ9dw&usqp=CAc',
        Name: 'Bata Comfit Formal Shoes',
        price : 999,  

    }

]



const addToCart = (item) => {
  const exist = cart.find((x) => x.Name === item.Name);

  if (exist) {
    // quantity increase
    const updatedCart = cart.map((x) =>
      x.id === item.id
        ? { ...x, qty: x.qty + 1 }
        : x
    );
    setCart(updatedCart);
  } else {
    // new item
    setCart([...cart, { ...item, qty: 1 }]);
  }
};
  return (
    <section>
        <div className="container">
          {shoes.map((itme)=>(
             <div key={itme.id} className="card">
                <div className="image"><img src={itme.img} alt="" /></div>
                <h2 className="name">{itme.Name}</h2>
                <h3 className="price">${itme.price}</h3>
                <button   className="add" onClick={() => addToCart(itme)}>Add to Cart</button>

            </div>

          ))}
           
        </div>
    </section>
  )
}

export default Shoes
