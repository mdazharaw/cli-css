// Given conversion functions:

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  var arg1 = process.argv[2];
  arg1= arg1.toString();
  var startingChar = arg1.substring(0,1)
//   console.log(startingChar);
  
  if (startingChar == "#"){
      var rgb = hexToRgb(arg1);
      console.log(rgb);
      
  }

  if (startingChar == "r"){
      argR = parseInt(process.argv[3]);
      argG = parseInt(process.argv[4]);
      argB = parseInt(process.argv[5]);

    var hex = rgbToHex(argR,argG,argB);
    console.log(hex);
    
}
  