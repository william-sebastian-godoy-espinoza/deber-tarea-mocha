function describe(description, func) {
    console.log(description);
    func();
  }
  
  function it(msg, func) {
    try {
      func();
      console.log(msg + ": Test Passed");
    } catch (e) {
      console.log(msg + ": Test Failed");
    }
  }
  
  
  function assertEqual(a, b) {
    if (a !== b) {
      throw new Error();
    }
    
    function suma(a,b){
        return(a+b);
    }

    function resta(a,b){
        return(a-b);
    }
    function multiplicacion(a,b){
        return(a*b);
    }

    function division(a,b){
        return(a/b);
    }
      
  }


function pow(x,n){
    return Math.pow(x, n);
     }



      describe("suma", function() {
        it("realizar la suma correctamente", function() {
          assertEqual(suma(2, 3), 8);
                
    });
          
            it("realizar la resta correctamente", function() {
              assertEqual(resta(8, 3), 2);
                    
    });
  it("realizar la multiplicacion correctamente", function() {
    assertEqual(multiplicacion(8, 3), 2);
          
  });
it("realizar la division correctamente", function() {
  assertEqual(divide(8, 3), 2);
        
  });
  });