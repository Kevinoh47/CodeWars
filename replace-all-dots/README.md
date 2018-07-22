https://www.codewars.com/kata/fixme-replace-all-dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
Task

Fix the bug so we can all go home early.
Notes

String str will never be null.

Solution:

There were two problems with the code: 
1) the "." indicates any character in a regex, so it must be escaped.
2) if the global flag (g) is not used, the replace function only replaces the first instance.

I also solved this by a more manual process, iterating over the string and building out a new string and returning that. 