var x = 15;


function fizzbuzz(x){
	var y = 1;
    while (y <= x){
        	if (y % 3 === 0 && y % 5 === 0) {
        		console.log("fizzbuzz");
        		y += 1;
        	} else if (y % 5 === 0){
        		console.log("buzz");
        		y += 1;
        	} else if (y % 3 === 0){
        		console.log("fizz");
        		y += 1;
        	} else {
        		console.log(y);
        		y += 1;
        	}
        }
    }
fizzbuzz(x);