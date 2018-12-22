var katzDeliLine = [];
var number = 0

function takeANumber(katzDeliLine) {
  
  number++ 
  katzDeliLine.push(number)

  return number 
  }

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
    }
    var name = line[0]
    line.shift()
    return `Currently serving ${name}.`
    }
    
function currentLine(line) {
  var array = [];
  if (line.length === 0) {
        return "The line is currently empty."
      }

      for (var i = 0; i < line.length; i++) {
        array.push(`${i+1}. ${line[i]}`)
      }
    
     return `The line is currently: ${array.join(", ")}`

}
  
      
     
  