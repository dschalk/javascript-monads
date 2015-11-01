##Javascript Monads

This is a revision of the mobservable-monads project. Instead of having reactive buttons and monads, I have made extensive use of "forceUpdate" in functions that change displayed data. Facebook discourages the use of "forceUpdate", perhaps largely to keep things manageable in their large organization. My projects don't need Flux or any of its variations, and they benefit from the liberal use of "forceUpdate". When in doubt, I do things the Facebook way; but I always keep an open, seeking what works best for my projects.
