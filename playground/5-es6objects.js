const name = 'JL';
const userAge = 23;

const user = {
    name,
    userAge,
    location: 'Manila'
}

console.table(user);

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock, rating} = product;
console.table({productLabel, stock, rating});

const transaction = (type, {label, stock}) => {
    console.table({type, label, stock})
}

transaction('order', product);