# jQuery Calculate Time Left To Read While Scrolling

* Calculates the time remaining to read a post or container with text as the user scrolls

* Starts with the initial value rounded to the nearest minute and counts down/up from there, depending whether the user is scrolling up or down.

* When the user scrolls the top of the viewport beyond the bottom of the text container, the counter will read 0.

## Installation

* Clone this repo or download the zip file

## Requirements

* Must include jQuery and calculate-time-left.js on index page. jQuery must be before calculate-time-left.js, like so (paths could change depending on your folder structure):

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>"
<script src="/calculate-time-left.js"></script>
```

## Usage

* within your main JS file, have:

```
$(document).ready(function() {
	calculateTotalTimeWords(textContainer);
	minReadLeft(textContainer);
});
```

```
$(document).scroll(function () {
    minReadLeft(textContainer);
});
```

* Replace textContainer above with your container of text, for example: `minReadLeft($('#text-container'))`

* Wherever you want to display the number of minutes left:

`<span class="min-read-text"></span>`

#### The next part is optional:

* You must create a css class called hidden for this to work in your main css file:

```
.hidden {
	display: none;
}
```

* If you want text after it to say min read while at the top of the document or min left once the user begins to scroll, you can add right after, like so:

`<span class="min-read-text"></span> <span id="min-read"> min read</span><span id="min-left"> min left</span>`

* The function will automatically hide/show the correct span above after the number

## Demo

There is a demo.html and demo.css included in the files. If you open demo.html in a browser, you can see how it works. You can delete these demo files if you like.
