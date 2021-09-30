const getCart = cart => localStorage.getItem(cart);
const updateCart = (key,value) => localStorage.setItem(key,value)

const selectPlayer = id => {
    const existCart = getCart('top-player');
    let selectedPlayers = {};
    if(!existCart){
        selectedPlayers[id] = 1;
    }else{
        selectedPlayers = JSON.parse(existCart);
        if(selectedPlayers[id]){
            const newCount = selectedPlayers[id] + 1;
            selectedPlayers[id] = newCount;

        }else{
            selectedPlayers[id] = 1;
        }
    }
    updateCart('top-player',JSON.stringify(selectedPlayers));
}

const deSelectPlayer = id => {
    const existCart = getCart('top-player');
    const objectData = JSON.parse(existCart);
    console.log(objectData);
    if(!existCart){
        console.log('no cart available');
    }else{
        delete objectData[id];
        updateCart('top-player',JSON.stringify(objectData));
    }
}


export {selectPlayer, deSelectPlayer}