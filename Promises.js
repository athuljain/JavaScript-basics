// const promise1= new Promise((res,rej)=>{
//     res()
// })

// promise1.then(()=>{
//     console.log("promise Success");
// }).catch(()=>{
//     console.log("Promise Rejected");
// }).finally(()=>{
//   console.log("promise work");
// })

// after execution if the promise is resolve .then will work
// after execution if the promise is rejected .catch will work







const posts = [
  { id: 1, title: "indroduction" },
  { id: 2, title: "chapter-1" },
];

const getPost = () => {
  setTimeout(() => {
    console.log(posts);
  }, 1000);
};

// getPost()

const addPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;
      if (err) {
        reject();
      } else {
        resolve();
      }
    }, 2000);
  });
};

addPost({ id: 3, title: "chapter-3" })
.then(getPost)
.catch(()=>{
    console.log("error");
}).finally(()=>{
  console.log("Promise Working");
})

