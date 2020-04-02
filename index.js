var conversion = require("./conversion.js");



var arg1 = process.argv[2];
if (arg1 != undefined) {
    arg1 = arg1.toString();
    var startingChar = arg1.substring(0, 1)
    //   console.log(startingChar);  
    if (startingChar == "#") {
        for (i = 2; i < process.argv.length; i++) {
            var rgb = conversion.hexToRgb(process.argv[i]);
            var hsl = conversion.rgbToHSL(rgb.r, rgb.g, rgb.b);
            var output = `RGB: ${JSON.stringify(rgb).replace(/"/g, "")}\nHSL: ${hsl.hsl}`;
            console.log(`\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m%s\x1b[0m`, output);
            var complement = conversion.complement(hsl);
            // console.log(complement);
            // var compParse = conversion.parseHSL(complement);
            var complementRGB = conversion.HSLtoRGB(complement.h,complement.s,complement.l);
            
            console.log(`\x1b[38;2;${complementRGB[0]};${complementRGB[1]};${complementRGB[2]}m%s\x1b[0m`, `Complement: ${complement.hsl}\n`);

            
            //   console.log(rgb);
            //   console.log(hsl); 
        }
    } else if (startingChar == "r") {
        argR = parseInt(process.argv[3]);
        argG = parseInt(process.argv[4]);
        argB = parseInt(process.argv[5]);

        var hex = conversion.rgbToHex(argR, argG, argB);
        var hsl = conversion.rgbToHSL(argR, argG, argB);

        var output = (`HSL: ${hsl.hsl}\nHex: ${hex}`);
        console.log(`\x1b[38;2;${argR};${argG};${argB}m%s\x1b[0m`, output);

        var complement = conversion.complement(hsl);
        // console.log(complement);
        // var compParse = conversion.parseHSL(complement);
        
        var complementRGB = conversion.HSLtoRGB(complement.h,complement.s,complement.l);
        
        console.log(`\x1b[38;2;${complementRGB[0]};${complementRGB[1]};${complementRGB[2]}m%s\x1b[0m`, `Complement: ${complement.hsl}\n`);
        
        // console.log(hsl);
        // console.log(hex);

    }
}
    // console.log(conversion);

    // set as red
    // var r = 255;
    // var b = 0;
    // var g = 0;

    // // this special console will create colored output
    // console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, "test");
