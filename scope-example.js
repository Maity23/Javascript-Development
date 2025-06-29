function demoVarLetConst(){
    var a =10;
    let b =20;
    const c=30;
    
    if(true){
        var a=100;
        let b= 200;
        const c= 300;
        console.log("Inside Block:", a,b,c);
    }
    console.log("Outside Block:", a, b, c);
}
demoVarLetConst();
