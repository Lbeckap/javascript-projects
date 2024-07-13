function processor(transmission) {
    transmission = transmission.trim();
    if (transmission.indexOf("::") < 0) {
       // Data is invalid
       return -1;
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (rawData[0] !== "<") {
       rawData = -1;
    }
    return {
       transmission: transmission, 
       id: Number(parts[0]),
       rawData: rawData
    };
 }

 module.exports = processor;