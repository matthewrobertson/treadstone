describe("treadstone", function() {
	
	// very simple xml doc
	var xmlString = "";
	xmlString += "<note>"
    xmlString += "<to id='foo'>Tove</to>"
    xmlString += "<from thing='baz'>Jani</from>"
    xmlString += "<heading>Reminder</heading>"
    xmlString += "<body>Foo bar monkey</body>"
    xmlString += "<arr>"
    xmlString += "<thing attr='banana'>stuff</thing>"
    xmlString += "<thing attr='banana'>thats</thing>"
    xmlString += "<thing attr='banana'>cool</thing>"
    xmlString += "</arr>"
	xmlString += "</note>"
	var xmlDoc = $.parseXML( xmlString );


	it("parses node text", function() {
		var res = $(xmlDoc).treadstone({
			body: "body"
		})
		expect(res.body).toEqual("Foo bar monkey")
	});

	it("parses node attributes", function() {
	  	var res = $(xmlDoc).treadstone({
			attr: "@thing from"
		});
		expect(res.attr).toEqual("baz")
	});

	it("accepts literal text", function() {
	  var res = $(xmlDoc).treadstone({
	  	text: ":literal"
	  })
	  expect(res.text).toEqual("literal");
	});

	it("accepts nested templates", function() {
		var res = $(xmlDoc).treadstone({
			nest: {
				attr: "@thing from"
			}
		});
		expect(res.nest.attr).toEqual("baz")
	});

	describe("templates with arrays", function() {
		it("accepts arrays in templates", function() {
	  		var res = $(xmlDoc).treadstone({
	  			arr: ["thing", ":literal"]
	  		});
	  		expect(res.arr.length).toEqual(3);
	  		expect(res.arr[0]).toEqual("literal");
		});

		it("accepts empty strings as text selectors", function() {
	  		var res = $(xmlDoc).treadstone({
	  			arr: ["thing", ""]
	  		});
	  		expect(res.arr.length).toEqual(3);
	  		expect(res.arr[0]).toEqual("stuff");
		});

		it("returns text when no second selector is passed", function() {
	  		var res = $(xmlDoc).treadstone({
	  			arr: ["thing"]
	  		});
	  		expect(res.arr.length).toEqual(3);
	  		expect(res.arr[0]).toEqual("stuff");
		});

		it("it allows for parsing of attrs", function() {
	  		var res = $(xmlDoc).treadstone({
	  			arr: ["thing", "@attr"]
	  		});
	  		expect(res.arr.length).toEqual(3);
	  		expect(res.arr[0]).toEqual("banana");
		});

		it("it allows for arrays of tempates", function() {
	  		var res = $(xmlDoc).treadstone({
	  			arr: ["thing", {
	  				attr: "@attr"
	  			}]
	  		});
	  		expect(res.arr.length).toEqual(3);
	  		expect(res.arr[0].attr).toEqual("banana");
		});
	});
	

});