do ->
	# Initialize namespaces:
	basepath 	= __dirname;
	autoloader 	= require "use/autoloader";
	packagejson = require "./package";
	autoloader.setBasePath basepath;
	autoloader.setNamespaces packagejson['namespaces'];
	use = require "use";

	console.log use "app/test"

	# Assignment:
	number   = 42
	opposite = true

	# Conditions:
	number = -42 if opposite

	# Functions:
	square = (x) -> x * x

	# Arrays:
	list = [1, 2, 3, 4, 5]

	# Objects:
	math =
	  root:   Math.sqrt
	  square: square
	  cube:   (x) -> x * square x

	# Splats:
	race = (winner, runners...) ->
	  print winner, runners

	# Existence:
	alert "I knew it!" if elvis?

	# Array comprehensions:
	cubes = (math.cube num for num in list)

	console.log "This is coffee script!!!"