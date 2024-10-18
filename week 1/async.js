async function getUser(id) {
    setTimeout(() => {
        console.log(`User ${id} fetched`);
        return 1;
    }, 1000);
}

async function getPosts(userId) {
    setTimeout(() => {
        console.log(`Posts for user ${userId} fetched`);
        return 2;
    }, 2000);
}

async function getComments(postId) {
    setTimeout(() => {
        console.log(`Comments for post ${postId} fetched`);
        return 3;
    }, 3000);
}

const userData = getUser(1);
if (userData){
    const userPosts = getPosts(1);
    if (userPosts){
        const userComments = getComments(1);
        console.log(userData, ",", userPosts, ",", getComments)
    }
}

// async function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`User ${id} fetched`);
//         }, 2000);
//     });
// }

// const response = getUser(1);
// console.log("Response", response);

// async function getPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Posts for user ${userId} fetched`);
//         }, 2000);
//     });
// }

// const response1 = getPosts(2);
// console.log("Response", response1);

// function getComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Comments for post ${postId} fetched`);
//         }, 2000);
//     });
// }

// const response2 = getComments(3);
// console.log("Response", response2);




