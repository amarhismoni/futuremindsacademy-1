function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 10000);
}

console.log("Fetching data..");

fetchData((data) => {
    console.log(data);
});

console.log("Other code running");
