# Guide to Using Git and Git CLI while FRC Programming

Coming soon! In the meantime, see this doc: https://docs.google.com/document/d/1NePrEethFhoQQv6VUiASzOYpK84FSHwKw6qN7PlqUHg/edit

# To clone a repository
Often used to create code from a template
1. Go to the GitHub repo and select the "Clone" button.
2. Click the copy button to copy the link.
3. Open the terminal/command line from VSCode (press CTRL + ~), or go to the folder in Windows Explorer and right-click, and then click "git bash here" in the menu.
4. Type ```git clone [url] <folder name>.``` (Brackets are mandatory, the other things are optional.)
5. Success! Start coding.

# To push code to GitHub.

1. Repeat step 3 above.
2. Type ```git add -A```
3. Type ```git commit -m "[message]"```
    - (Alternatively, you can use ```git commit -am "[message]"``` to combine steps 2 and 3)
4. Type ```git push origin [branch name]```
5. Success! Along the way, it's good practice to type ```git status``` just in case.