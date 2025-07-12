// Promise Chaining , to get rid of callback hell
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
