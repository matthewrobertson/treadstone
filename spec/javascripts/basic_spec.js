describe("treadstone", function() {
	
	describe("fixture1", function() {


		var xmlDoc = $.parseXML( Fixtures.xmlString1 );


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

	describe("fixture2", function() {
		var xmlDoc = $.parseXML( Fixtures.xmlString2 );

		it("handles the default namespace", function() {
			var res = $(xmlDoc).treadstone({
				arr: ["spine itemref", "@idref"]
			});
			expect(res.arr.length).toEqual(7);
			expect(res.arr[0]).toEqual("Page_1");
		});

		it("handles the default namespace", function() {
			var res = $(xmlDoc).treadstone({
				arr: ["spine itemref", "@idref"]
			});
			expect(res.arr.length).toEqual(7);
			expect(res.arr[0]).toEqual("Page_1");
		});

		it("parses a nested array of obj templates", function() {
			var template = {
				manifest: [
					"manifest item", {
						id: "@id",
						href: "@href",
						media_type: "@media-type"
					}
				]
			}
			var result = $(xmlDoc).treadstone(template)
			expect(result.manifest.length).toEqual(33)
			expect(typeof result.manifest[0]).toEqual('object');
			expect(result.manifest[0].media_type).toEqual('text/css')
		})
	})
	

});