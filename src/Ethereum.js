export const getEthereumPrice = async () => {
    try{
    const res = await fetch (`https://api.coindesk.com/v1/epi/currentprice/USD.json`)
    return await res.json();
    }catch(e){
        console.error(e);

    }
}