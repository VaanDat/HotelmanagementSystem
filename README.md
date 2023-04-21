# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Push code from fork


### 1. Clone the repository

In your forked repository, clone the repository to your local machine using the `git clone https://github.com/your-username/hotelmanagementweb.git` command. 

### 2. Add the original repository as a remote repository.

In your local machine using the `git remote add upstream https://github.com/TuanMiles/hotelmanagementweb` command. This allows you to keep your fork up-to-date with any changes made to the original repository.

### 3. Fetch the changes from the original repository

In your local machine using the `git fetch upstream` command. This will bring in all the changes made to the original repository since you forked it.

### 4. Switch to the local master branch

In your local machine using the `git checkout master` command.

### 5. Merge the changes from the original repository into your local master branch.

In your local machine using the `git merge upstream/master` command.

### 6. Resolve any merge conflicts

### 7. Push the changes to your forked repository

In your local machine, using the `git push origin master` command.

### 8. Create pull request

Finally, create a pull request from your forked repository to the original repository. This allows the changes you made in your fork to be reviewed and merged into the original repository.