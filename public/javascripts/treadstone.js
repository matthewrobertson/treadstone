(function($) {

	var TEMPL_TYPE = {
		attr: 1,
		text: 2,
		arry: 3,
		litr: 4,
		temp: 5
	}

	/**
	* typeOf function published by Douglas Crockford in ECMAScript recommendations
	* http://www.crockford.com/javascript/recommend.html
	*/
	var typeOf = function(value) {
		var s = typeof value;
		if (s === 'object') {
			if (value) {
				if (typeof value.length === 'number' &&
						!(value.propertyIsEnumerable('length')) &&
						typeof value.splice === 'function') {
					s = 'array';
				}
			} else {
				s = 'null';
			}
		}
		return s;
	};

	var tempateType = function(obj) {

		var type = typeOf(obj);

		if(type === "array") {
			return TEMPL_TYPE.arry;
		}

		if(type === "object") {
			return TEMPL_TYPE.temp;
		}

		if(type === "string") {
			if( obj[0] === "@" ) {
				return TEMPL_TYPE.attr;
			}
			if( obj[0] === ":" ) {
				return TEMPL_TYPE.litr;
			}
			return TEMPL_TYPE.text;
		}

		// there is an error in the template syntax
		return null;

	}

	// determine if a selector is an attr selector
	var isAttr = function(selector) {
		// for now I'm hard coding this in but later make it configurable
		return selector[0] === "@"; 
	};

	var splitSelector = function(sel) {
		var temp = sel.split(' ', 2);
		temp[0] = temp[0].substr(1);
		return temp;
	}

	var parseOne = function(sltor, dom) {
		var selSplit; var result;

		// if the sltor is null, undefined or "" 
		// just return the text
		if(!sltor) {
			return $(dom).text()
		}

		var type = tempateType( sltor );

		if(type === TEMPL_TYPE.litr) {
			return sltor.substr(1);
		}
		else if(type === TEMPL_TYPE.text) {
			return $(sltor, dom).text();
		}
		else if(type === TEMPL_TYPE.attr) {
			selSplit = splitSelector( sltor );
			if(selSplit[1]) {
				return $(selSplit[1], dom).attr(selSplit[0]);
			}
			else {
				// if there is no second part of the
				// selector just pull it off the root
				return $(dom).attr(selSplit[0]);
			}
			
		}
		else if(type === TEMPL_TYPE.temp) {
			result = {};
			parseResult(sltor, result, dom);
			return result;
		}
		else if(type === TEMPL_TYPE.arry) {
			result = [];
			$(sltor[0], dom).each(function() {
				// could it be this simple???
				result.push( parseOne( sltor[1], $(this) ) )
			})
			return result;
		}
		
	};

	var parseResult = function(template, result, dom) {
		var key;
		for(key in template) {
			result[key] = parseOne(template[key], dom);
		}

	};

	$.fn.treadstone = function(template) {

 		if(!template) {
 			return {}; // if the template is null pass back an empty obj
 		}

 		var result = {};
 		parseResult(template, result, this)

    	return result;
	};
	
})(jQuery);