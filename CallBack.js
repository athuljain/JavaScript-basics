// call back


// normal two function

// function a(){
//     console.log("inside function A");
// }

// function b(){
//     console.log("inside function B");
// }

// a()
// b()


// CallBack Function

// function a(callBack){
//     callBack()
//     console.log("inside function A");
   
// }

// function b(){
//     console.log("inside function B");
// }

// a(b)


// we can pass anonymous function as callback

// function a(cb){
//     cb()
//     console.log("inside Function A")
    
// }

// a(function(){
//     console.log("test Callback");
// })






// const posts=[
//     {id:1,title:"indroduction"},
//     {id:2,title:"chapter-1"}
// ]

// const getPost=()=>{
//     setTimeout(()=>{
//         console.log(posts)
//     },1000)
// }
// // getPost()

// const addPost =(post)=>{
//     setTimeout(()=>{
//         posts.push(post)
//     },2000)
// }

// addPost({id:3,title:"chapter-2"})

// getPost()


// call back


// const posts=[
//     {id:1,title:"indroduction"},
//     {id:2,title:"chapter-1"}
// ]

// const getPost=()=>{
//     setTimeout(()=>{
//         console.log(posts)
//     },1000)
// }
// // getPost()

// const addPost =(post,callBack)=>{
//     setTimeout(()=>{
//         posts.push(post)
//         callBack()
//     },2000)
// }

// addPost({id:3,title:"chapter-2"},getPost)

// const posts=[
//     {id:1,title:"indroduction"},
//     {id:2,title:"chapter-1"}
// ]

// const getPost=()=>{
    
//         console.log(posts)
    
// }


// const addPost =(post)=>{
    
//         posts.push(post)
        
   
// }

// addPost({id:3,title:"chapter-2"})
// getPost()