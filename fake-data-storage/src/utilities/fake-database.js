// add fake database to local storage 

const addToDb = (id) => {
    const exist = getDb('cosmetic-cart')
    let cosmetic_cart = {};
    if(!exist){
        cosmetic_cart[id] = 1;
    }else{
        cosmetic_cart = JSON.parse(exist);
        console.log(cosmetic_cart);
        if(cosmetic_cart[id]){
            const newCount = cosmetic_cart[id] +1;
            cosmetic_cart[id] = newCount;
        }else{
            cosmetic_cart[id] = 1;
        }
    }
    localStorage.setItem('cosmetic-cart', JSON.stringify(cosmetic_cart));
}

const getDb = cart => localStorage.getItem(cart);
const updatCart = (cart,newCart) => localStorage.setItem(cart,JSON.stringify(newCart))
const deleteDb = id => {
    const exist = getDb('cosmetic-cart');
    if(!exist){
        console.log('no item is stored');
    }else{
        const cosmetic_cart = JSON.parse(exist);
        delete cosmetic_cart[id];
        updatCart('cosmetic-cart',cosmetic_cart)
    }
}

export {addToDb, deleteDb};