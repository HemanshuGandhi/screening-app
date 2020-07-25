# PHS App

## Quick setup
 1. Install Chocolatey
 https://chocolatey.org/install
 
 1. Install Meteor
 https://www.meteor.com/install

 1. Install node/npm

 1. Go to `i2emr` folder

 1. Run `npm install`

 1. Run the app using `meteor`

## Brief History
The app was inherited from [another screening project](https://github.com/andrelim435/i2emr). 
The previous developer was relatively new to Web Development + the development timeline for the previous project was quite tight so some implementations are not best practices.

The timeline for PHS 2019 was also quite tight so most of the efforts were spent customising forms. A few minor enhancements were made but there is still a lot of room for improvement in terms of features and structure.

## Implementation Details
[MeteorJS](https://www.meteor.com/) is used with React and MongoDB. This was inherited from the previous project. 

Python scripts are used to generate:
1. Station forms (read from excel and writes the generated "React Component" and "Schema" to a text file which is then copy pasted)
1. Post screening reports (read directly from DB and write to excel using pandas)

## Deployment Details
It is designed to be deployed locally on the intranet. This design was adopted for the following reasons:
1. Security - only the local area network needs to be secured, which is relatively easy.
2. Cost - It will cost money to host the website on the internet reliably - DNS and server charges
3. Privacy - All data is stored locally with minimal risk of any data "leaking" out
4. Reliability - If the internet connection of either the server or at the site goes down, connection to the app will be lost

Deploying it locally has the following drawbacks:
1. Manpower - personnel need to be onsite to deploy app and be on standby during screening
2. Tighter timeline for setup - The app needs to be set up onsite after the WiFi system has been set up.

Follow these instructions:
1. https://guide.meteor.com/deployment.html#custom-deployment
2. Find out the version of Node Meteor is using, then install it using [NVM](https://github.com/coreybutler/nvm-windows)
3. Deploy using [PM2](https://github.com/Unitech/pm2) for multithreading and load balancing.