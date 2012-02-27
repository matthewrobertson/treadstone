#Treadstone

A jQuery plugin for converting XML to JSON based on an intuitive templating syntax.

##What is Operation Treadstone?

It is awesome.

##How does it work?

Lets say I have some xml data but what I really want is JSON. No prob Bob, treadstone to the rescue:

So if this was my xml:

    <actor>
      <name href="http://www.imdb.com/name/nm0000354/">Matt Damon</name>
      <movies href="">
        <movie>Good Will Hunting</movie>
        <movie year="1998">Rounders</movie>
        <movie year="1999">Dogma</movie>
        <movie year="2001">The Bourne Identity<movie>
      </movies>
    </actor>


and the dom was stored in javascipt variable called, lets say `mattDamon`, then could convert my xml do JSON like this:

```javascript
var json = $(mattDamon).treadstone(assassinTemplate)
```

where `assassinTemplate` is a *treadstone template* that determines the format of the output JSON.

##Treadstone Templates

The syntax for templates used by treadstone is based on jQuery selectors with some minor enhancements.

A temlate is a simply an object containing all the keys you wish to get back in your JSON result with selectors in place of the actual values. Consider the following simple examples:

###Node Content

Lets say I wanted to parse the actors name out of my xml data listed above. By default treadstone will call `text()` to get the inner node content on anything you select, so I just need to include a selector that will find the `<name>` node. The template for this might look like this:

```javascript
var template = {
	name: "name"
}
```

(or a more direct way to get the result)

```javascript
var result = $(mattDamonXml).treadstone({
	name: "name"
});
```

###Node Attributes

To get an attribute from a node make, you must make the first word in the selector the name of the attribute with an `@` prepended:

```javascript
var result = $(mattDamonXml).treadstone({
	url: "@href name"
})

// result => {url: "http://www.imdb.com/name/nm0000354/"}
```

#Arrays

**TODO: explain how arrays work**


###Literal Values

Probably the simplest type of selector you can have in a treadstone template is used when you want to include some literal text in the result. This is achieved by prepending a colon to text. For example:

```javascript
var result = $(mattDamonXml).treadstone({
	best_bud: ":Ben-Affleck"
})

// result => { best_bud: "Ben-Affleck"}

**TODO: are multi-word literals supported?**
```


##Credits
* The idea for this plugin is based on [Jath](https://github.com/dnewcome/jath)
* [Matthew Robertson](https://github.com/matthewrobertson) worked out the details
* [Esther](https://github.com/estherbeckman) came up with the wicked name