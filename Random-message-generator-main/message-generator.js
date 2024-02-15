//random fact generato
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const travelGenerator = {
    destination: ['Thaildand','Duabi', 'Hungary','Monaco','Miami','Norway'],
    temp: ['Hot','Very hot', 'Cold','Cool','Snowy'],
    price: ['Cheap','expensive','average']   
}

const destination = [];

for (let x in travelGenerator){
    let options = generateRandomNumber(travelGenerator[x].length);

    switch(x) {
        case 'destination':
            destination.push(`Your destination is: ${travelGenerator[x][options]}`);
            break;
        case 'temp':
            destination.push(`The temperature will be: ${travelGenerator[x][options]}`);
            break;
        case 'price':
            destination.push(`The price will be: ${travelGenerator[x][options]}`);
            break;
        default:
            destination.push('There is not enough info.');
    }
}
function format (dest){
    const formatted = destination.join('\n')
    console.log(formatted)
};

format(destination);