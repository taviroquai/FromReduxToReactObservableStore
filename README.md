# From Redux to Observable Store (Counter Example)

This repo demonstrates the changes required from using Redux to [React Observable Store](https://github.com/taviroquai/ReactObservableStore).

## Changes Highlights
1. The Store is also created in index.js
2. The call to store updates were moved from index.js to the container "Counter"
3. The container Counter is exported "withStore" to automaticaly apply changes from Store
4. The reducers folder is not necessary anymore

## Redux Inspiration
Redux inspired a lot of other software and also the React Observable Store. React Observable Store only uses the key feature of Redux: the Observer pattern, which radicaly simplifies the data flow (no need for reducers), yet tries to achieve the same funcionality.

## Available Scripts (this section is from from redux repo)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
