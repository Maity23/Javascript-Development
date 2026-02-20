
  const orderFood =() => {
      return new Promise ((resolve, reject) => { //special callback function from JS engine.
          let foodReady =true;
          
          setTimeout(()=> {
              if(foodReady){
                  resolve ("Food Delivered!!");
              }
              else{
                  reject("Food delivery failed!!!");
              }
          }, 3000);
      });
  };
  
  orderFood()
  .then((msg) => console.log("Success", msg)) //function parameters dynamically passed.
  .catch((err)=> console.log("Error", err));
  
//Notes
//A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// States:
// pending (initial)
// fulfilled (resolved)
// rejected (error)