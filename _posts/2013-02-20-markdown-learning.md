---
layout: post
title: "Markdown Learning"
summary: "Markdown is a lightweight markup language."
category: markdown
---

Markdown is a lightweight markup language, originally created by John Gruber with substantial contributions from Aaron Swartz, allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)". The language takes many cues from existing conventions for marking up plain text in email. In other words, Markdown is a text-to-HTML conversion tool (for web writers). &copy; [Wiki][wiki].   
More about Markdown please go __[Markdown][markdown]__ and see.

* At first, it needs to know that Markdown and html tags can mix except some special tags. The following are the rules that Markdown can identify and resolve.

### Headings
	First-level heading
	=================== (for any number)
	Second-level heading
	------------------- (for any number)
	# heading (#) ===> h1 
	## heading (##) ===> h2
	### heading (###) ===> h3
	#### heading (####) ===> h4
	##### heading (#####) ===> h5
	###### heading (#######) ===> h6
### Paragraphs
A paragraph is one or more consecutive lines of text separated by one or more blank lines. Normal paragraphs should not be indented with spaces or tabs.
	This is a paragraph. It has two sentences.<return>
	<space>
	This is another paragraph. It also has<more than two spaces or tabs>
	two sentences
### Line return
Line breaks inserted in the text are removed from the final result: the web browser is in charge of breaking lines depending on the available space. To force a line break, insert two spaces at the end of the line.  
### Lists
No ordered list with __"*" "+" "-"__. If use other inside this, it needs two indentations.
	* An item in a bulleted (unordered) list
    	* A subitem, indented with 4 spaces
	* Another item in a bulleted list
Ordered list with __number and "."__.
	1. An item in an enumerated (ordered) list
		1.1. A subitem, indented with 4 spaces
	2. Another item in an enumerated list
### Blockquotes
Use __">"__. The number means the levels. It is nested with others.
	> line 1
	> line 2
	> > line 3
### Emphasized text
	*emphasis* or _emphasis_  (e.g., italics)
	**strong emphasis** or __strong emphasis__ (e.g., boldface)
### Code
To include code (formatted in monospace font), you can either surround inline code with backticks (`).
	Some text with `some code` inside
or indent several lines of code by at least four spaces.
		line 1 of code
		line 2 of code
		line 3 of code
### External links
	[link text here](link.address.here)
	Ex. [Markdown](http://en.wikipedia.com/wiki/Markdown)
or
	[link text here][linkref]
and other place
	[linkref]: link.address.here "link title here"
### Images
	![Alt text](/path/to/img.jpg "Optional title")
or
	![Alt text][id]
and other place
	[id]: url/to/image  "Optional title attribute"
### Horizontal rules
	* * *
	***
	*****
	- - -
	---------------------------------------
### Others
If want to add __"[ ] ( ) _ * + - ! ` ."__. You can use __"\"__.

{% include href.md %}
