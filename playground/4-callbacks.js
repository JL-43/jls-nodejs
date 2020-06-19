const add = (x, y, callback) => {
    setTimeout(() => {
        const value = x + y;
        callback(value);
    }, 2000);
}

add(1, 4, (sum)=>{
    console.log(sum);
})
