let DB = [
    {
    id : 1,
    name: "Kaushik"
    },
    
    {
    id : 2,
    name: "Abhijit"
    },
    
    {
    id : 3,
    name: "Daatu"
    },
    
    {
    id : 4,
    name: "Banra"
    }
    ]
    
    let ApiCall = new Promise ((resolve , reject) =>{
        let server = true ;
        
        setTimeout (() =>{
            if (server) {
               resolve(DB);
            }
            else{
                reject("404 DB Call failed")
            }
        }, 5000);
    })
    
    ApiCall.then((param)=>{
        console.log("Runs for Resolve" , param);
        
        param.forEach((elem,i)=>{
            console.log(elem.name);
        })
    })
    .catch((param)=>{
               console.log("Runs for Reject" , param);
    })
    .finally(()=>{
        console.log("Please be aware of the ApiCall");
    })
    


