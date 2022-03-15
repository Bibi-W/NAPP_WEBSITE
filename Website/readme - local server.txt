
This project is now using include statements that only work if run from a server; trying
to run certain pages normally will give you an error. (It's more convenient than it sounds,
it lets us import HTML from files instead of defining it via JavaScript.)

IIRC we all already have Node.js installed, but in case we don't, it's needed and can be
found here: https://nodejs.org/en/

With Node.js installed, you'll want to type this into a command line:
	npm install http-server -g

Then, with the command prompt accessing the "Website" folder, you'll want to type:
	http-server

This will give you a local server that you can access by putting this in your browser's
URL bar:
	http://localhost:8080

And that'll show you the directory in your browser. Navigating to HTML/search.html will
show the current results card page, with two cards displayed.

The template for a blank card is stored in searchcard.html; haven't tested how that
looks if you load it directly. There's also a search.css and a search.js,
for stuff that relates to the appearance and generation of cards respectively.
