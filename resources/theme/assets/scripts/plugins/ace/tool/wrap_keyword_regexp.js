var inputString=process.argv.splice(2)[0],outputString=inputString.replace(/\\b/g,"(?:\\\\b)");outputString=outputString.split("b)("),outputString=outputString[0]+"b)("+outputString[1].replace(/\(([^\?])/g,"(?:$1"),console.log("\n\n"+outputString+"\n\n");