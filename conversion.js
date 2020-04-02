// Given conversion functions:

module.exports.componentToHex = function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
module.exports.rgbToHex = function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
module.exports.hexToRgb = function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
module.exports.rgbToHSL = function rgbToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    var output = {
        h: h,
        s: s,
        l: l,
        hsl: "hsl(" + h + "," + s + "%," + l + "%)"
    }
    return output;
}


// function parseHSL(str) {
//     var hsl, h, s, l
//     hsl = str.replace(/[^\d,]/g, '').split(',') // strip non digits ('%')  
//     h = Number(hsl[0])                            // convert to number
//     s = Number(hsl[1])
//     if (s>100){
//         s = s/10;
//     }
//     l = Number(hsl[2])
//     if (l>100){
//         l = l/10;
//     }
//     return [h, s, l]                              // return parts
// }

// module.exports.parseHSL = function parseHSL(str) {
//     var hsl, h, s, l
//     hsl = str.replace(/[^\d,]/g, '').split(',')   // strip non digits ('%') 
//     h = Number(hsl[0])                            // convert to number
//     s = Number(hsl[1])
//     if (s>100){
//         s = s/10;
//     }
//     l = Number(hsl[2])
//     if (l>100){
//         l = l/10;
//     }
//     return [h, s, l]                              // return parts
// }

module.exports.complement = function complement(hsl) {
    const [h, s, l] = [hsl.h,hsl.s,hsl.l]

    
        const h1 = (h + 180) % 360
        const c1 = `hsl(${h1}, ${s}%, ${l}%)`
        var output = {
            h: h1,
            s: s,
            l: l,
            hsl: c1
        }
        return output;

}

module.exports.HSLtoRGB = function HSLToRGB(h, s, l) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    var out = [r,g,b];

    return out;
}