var conversion = require("./conversion.js");
var arg1 = process.argv[2];
if (arg1 != undefined){
    arg1= arg1.toString();
    var startingChar = arg1.substring(0,1)
} 

//   console.log(startingChar);
  
  if (startingChar == "#"){
      var rgb = conversion.hexToRgb(arg1);
      var hsl = conversion.rgbToHSL(rgb.r,rgb.g,rgb.b);
      var output = JSON.stringify(rgb) +"\n" + hsl;
      console.log(`\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m%s\x1b[0m`, output);

    //   console.log(rgb);
    //   console.log(hsl);


      
  }

  if (startingChar == "r"){
      argR = parseInt(process.argv[3]);
      argG = parseInt(process.argv[4]);
      argB = parseInt(process.argv[5]);

    var hex = conversion.rgbToHex(argR,argG,argB);
    var hsl = conversion.rgbToHSL(argR,argG,argB);
    
    var output = hsl +"\n" + hex;
    console.log(`\x1b[38;2;${argR};${argG};${argB}m%s\x1b[0m`, output);
    // console.log(hsl);
    // console.log(hex);
    
}
// console.log(conversion);

// set as red
// var r = 255;
// var b = 0;
// var g = 0;

// // this special console will create colored output
// console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, "test");
  