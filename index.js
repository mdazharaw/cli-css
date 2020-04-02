var conversion = require("./conversion.js");
var arg1 = process.argv[2];
if (arg1 != undefined){
    arg1= arg1.toString();
    var startingChar = arg1.substring(0,1)
} 

//   console.log(startingChar);
  
  if (startingChar == "#"){
      var rgb = conversion.hexToRgb(arg1);
      console.log(rgb);
      
  }

  if (startingChar == "r"){
      argR = parseInt(process.argv[3]);
      argG = parseInt(process.argv[4]);
      argB = parseInt(process.argv[5]);

    var hex = conversion.rgbToHex(argR,argG,argB);
    console.log(hex);
    
}
// console.log(conversion);

  