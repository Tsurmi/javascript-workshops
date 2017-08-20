# Javascript Workshops #

This repo contains a collection of simple javascript exercises.

## Installation ##

1. Fork this repo into your account.
1. Clone your fork to your local machine
1. `cd javascript-workshops`
1. `npm install`

## Working on a specific workshop ##

Assume `data-and-functions-1` is the current workshop.

1. Open two terminals
1. In the first terminal: 
    1. `cd data-and-functions-1`
    1. `git checkout -b data-and-functions-1` to create a new branch for your work
    1. `npm test` to start the test runner
1. Work on getting the functions to pass
1. In the second terminal:
    1. `git add` and `git commit` as needed
    1. `git push origin data-and-functions-1` when you want to save to the cloud


## Submitting your work via a pull request ##

At any point, you can create a pull request to discuss or submit your work. 
We are going to use the pull request functionality of GitHub for this purpose.

1. Make sure you've pushed your latest changes
1. Go to your forked repo on GitHub
1. Click the "Pull Requests" tab
1. Open a new pull request
1. Verify the dropdowns are correctly set:
    1. **`base fork`** is set to `America Campaign/javascript-workshops`
    1. **`base`** is set to `master`
    1. **`head fork`** is set to your forked repo
    1. **`compare`** is set to your branch name (e.g. `data-and-functions-1`)
1. Click the `Create Pull Request` button

Your work will now be available for code review via the pull request interface.