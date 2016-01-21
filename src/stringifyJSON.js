// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var arrayValues = [];
	var objKeys = [];
	var keyValues = [];

  // Check for primitive types
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
  	return '' + obj;
  }
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  // Check for Array
  else if (Array.isArray(obj)) {
  	if (obj.length === 0) {
  		return '[]';
  	}
  	else {
  		obj.forEach(function(item) {
  			arrayValues.push(stringifyJSON(item));
  		});
  		return '[' + arrayValues + ']';
  	}
  }
  // Check for Object
  else if (obj instanceof Object) {
  	objKeys = Object.keys(obj);
  	objKeys.forEach(function(key) {
  		var stringKey = '"' + key + '":';
  		var keyVal = obj[key];
  		if (typeof keyVal === undefined || keyVal instanceof Function) {
  			keyValues.push('');
  		}
  		else if (typeof keyVal === 'string') {
  			keyValues.push(stringKey + '"' + keyVal + '"');
  		}
  		else if (typeof keyVal === 'boolean' || typeof keyVal === 'number' || keyVal === null) {
  			keyValues.push(stringKey + keyVal);
  		}
  		// Recursive case: check for nested objects
  		else if (keyVal instanceof Object) {
  			keyValues.push(stringKey + stringifyJSON(keyVal));
  		}
  	});
  	return '{' + keyValues + '}';
  }
};
