function fetchData() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved("example #1");
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("error", error);
    });
