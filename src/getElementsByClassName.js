// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  function check(element) {
  	
  	if (element.classList && element.classList.contains(className)) {
  		results.push(element);
  	}
  	var children = element.childNodes;
  	if (children) {
  		for (var i = 0; i < children.length; i++) {
  			var child = children[i];
  			check(child);
  		}
  	}
  }
  check(document.body);
  return results;
};
