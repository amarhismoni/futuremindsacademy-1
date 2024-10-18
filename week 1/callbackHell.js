function getUser(id, callback) {
    setTimeout(() => {
        console.log(`User ${id} fetched`);
        callback();
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Posts for user ${userId} fetched`);
        callback();
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log(`Comments for post ${postId} fetched`);
        callback();
    }, 1000);
}

getUser(1, ()=>{
    getPosts(1, ()=>{
        getComments(1, ()=>{
            console.log(("finished operation"));
            
        })
    })
})
