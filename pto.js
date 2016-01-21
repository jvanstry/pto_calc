var fs = require('fs')
var args = process.argv

var ACCRUE_RATE = 2.77
var WEEK = 604800000
var start = 1450656000000
var now = Date.now()

var contents = fs.readFileSync("used.txt", "utf8")
var currentUsed = parseFloat(contents.replace(/[\n\r]+/g, ''))

if (args[2] === "take") {
	var taken = parseFloat(args[3])
	var totalTaken = taken + currentUsed
	
	fs.writeFile("used.txt", totalTaken, "utf8")

} else if (args[2] === "check") {
	var current = ((now - start) * ACCRUE_RATE / WEEK) - currentUsed
	console.log("You got ", current.toFixed(1), " hours of PTO!!!")
}

