// Promise Chaining , to get rid of callback hell // readability is good with prmoises
// Promise - why? 1. We can't rely on setTimout for interval for all async tasks.
//  2 promises provide three satates pending, fulfill & reject
//  3 promise is async -> triggers event loop.
//  new Promise (cb(),res, rej) name doesn't matter but sequence matters. 
function uploadFile(){
    return new Promise ((resolve , reject) =>{
        setTimeout (()=>{
        console.log("Uploading file");
        resolve();
    },1000);
    })
}
function readingFile(){
    return new Promise ((resolve , reject) =>{
        setTimeout (()=>{
        console.log("Reading file");
        resolve();
    },1000);
    })
}

function analyseFile(){
    return new Promise ((resolve , reject) =>{
        setTimeout (()=>{
        console.log("Analyse file");
        reject("Corrupted File");
    },1000);
    })
}

function compilingFile(){      // This function call is skipped since it is failing in anaylyseFile and it calls the catch block.
    return new Promise ((resolve , reject) =>{
        setTimeout (()=>{
        console.log("Compiling file");
        resolve();
    },1000);
    })
}

 uploadFile()
.then(()=> readingFile ())
.then(()=> analyseFile ())
.then(()=> compilingFile ())
.then(()=>{
    console.log("All process is completed");
})
.catch((err)=>{
  console.log (err);
})
