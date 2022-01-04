var array = new Array();
array[0]= "Itachi";
array[1] = "Priyansh";
array[2] = "Jonas";
array[3] = "Yakov";
array[4] = "Jay";
array[5] = "Mitsuke";
array[6]= "Jerry";
array[7]= "Jim";
array[8] = "Mark";

for (var i=0; i<array.length;i++){
    if(array[i].charAt(0)==='J' || array[i].charAt(0)==='j'){
        console.log("Goodbye "+array[i]);
    }
    else{
        console.log("Hello "+array[i]);
    }
}