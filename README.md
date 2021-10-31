# roomate.io

roomate.io is a web app designed for people who have roomates and want a clean, organized, and modern way to keep track of any roomate endevors.

## To run locally

1. Clone the repo
2. `cd` into the directory and run `npm install`
   - This will install all the dependencies needed to run roomate.io
3. The uses Mongoose to interact with the mongoDB database so you'll need to create a .env file in the root directory with a variable called `MONGO_URI` defined that connects to the cloud (or local) mongoDB instance you want to use... you don't get to use mine lol ;)
4. Once the dependencies have finished installing and you've created a .env file with the connection instructions for mongoDB, run `npm run dev` to run both the client react app as well as the backend Express server
