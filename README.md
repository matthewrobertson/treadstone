#Treadstone

A jQuery plugin for converting XML to JSON based on an intuitive templating syntax.

##What is Operation Treadstone?

It is awesome.

##How does it work?

Lets say I have some xml data but what I really want is JSON. No prob Bob, treadstone to the rescue:

So if this was my xml:

    <some>
     <basic>really basic</basic>
      <xml>
        <that>has stuff<that>
        <that>has other stuff<that>
        <that>has even more stuff<that>
      </xml>
    </some>


and the dom was stored in javascipt variable called, lets say `mattDamon`, then could convert my xml do JSON like this:

```javascript
var json = $(mattDamon).treadstone(assassinTemplate)
```

where `assassinTemplate` is a *treadstone template* that determines the format of the output JSON.

##Treadstone Templates

The syntax for templates used by treadstone is based on jQuery selectors with minor enhancements differences.

##Credits
* The idea for this plugin is based on [Jath](https://github.com/dnewcome/jath)
* [Matthew Robertson](https://github.com/matthewrobertson) worked out the details
* [Esther](https://github.com/estherbeckman) came up with the wicked name