<br />
<div align="center">
  <img src="https://github.com/KU-5H/ClubHub/blob/main/frontend/src/assets/SmallLogo.png?raw=true" alt="drawing" width="100"/>
  <h3>ClubHub</h3>
  <p align="center">
    The one and only club managment site you will ever need
    <br />
    <a href="https://github.com/KU-5H/ClubHub/blob/main/README.md#demo-video-">View Demo</a>
    ·
    <a href="https://github.com/KU-5H/ClubHub/blob/main/README.md#features-">Features</a>
    ·
    <a href="https://github.com/KU-5H/ClubHub/blob/main/README.md#installation-">Installation</a>
    ·
    <a href="https://github.com/KU-5H/ClubHub/blob/main/README.md#technologies-used-">Tech Stack</a>
    ·
    <a href="https://github.com/KU-5H/ClubHub/blob/main/README.md#contributors">Contributers</a>
  </p>
</div>

## What is ClubHub? [![About](https://img.shields.io/badge/About-magenta)](https://github.com/KU-5H/ClubHub/blob/main/README.md#what-is-clubhub-)

<img src="https://github.com/KU-5H/ClubHub/blob/main/frontend/src/assets/Intro%20Image.png?raw=true" alt="drawing" width="1200"/>
<br/>
<h4>ClubHub is a platform designed to streamline club and group management, making it easier to handle finances, payments, and communications. With ClubHub, you can effortlessly track finances, send reminders, and create announcements for users.</h4>

Typically, clubs or groups are required to mix and match services to help manage a club, so we designed an all in one service that eliminates the need for other club management services. 

Clubhub also boasts some unique benefits over mix and matching services, including: 
- An entire role based system, which changes the website based on the role of the user. Role include the: **```Coach```**/**```Treasurer```**/**```Member```**
- The ability to pay on the site itself, with the **```Treasurer```** being able to view all revenue/profit that the club generates
- A full calender system so the **```Coach```** can make events or meetups for the clubs, which every member can see
- Full fledged Register/Login system for users
- A communication system where users can talk to one another
- And More! Discussed in the [![Features](https://img.shields.io/badge/Features/Roadmap-green)](https://github.com/KU-5H/ClubHub/blob/main/README.md#features-) section.

It's important to note Clubhub is still in development, thus the site and all it's features are not yet fully implemented. You can view the progress made so far in the [![Features](https://img.shields.io/badge/Features/Roadmap-green)](https://github.com/KU-5H/ClubHub/blob/main/README.md#features-) section. 

Additionally, you can view out demo video for the site here: [![Demo](https://img.shields.io/badge/Demo-cyan)](https://github.com/KU-5H/ClubHub/blob/main/README.md#demo-video-)



## Contributors [![Contributors](https://img.shields.io/badge/Contributors-brown)](https://github.com/KU-5H/ClubHub/blob/main/README.md#what-is-clubhub-)
- [Kush (@KU-5H)](https://github.com/KU-5H)
- [Brandon (@branliyan)](https://github.com/branliyan) 
- [Lex (@lex-pan)](https://github.com/lex-pan)
- [Nicholas (@Nickargiriou)](https://github.com/Nickargiriou)
- [Jaysun (@JaysunS23)](https://github.com/JaysunS23)

## Demo Video [![Demo](https://img.shields.io/badge/Demo-cyan)](https://github.com/KU-5H/ClubHub/blob/main/README.md#demo-video-)
Here is a video of our project:

https://github.com/KU-5H/ClubHub/assets/95190952/eea6217d-afa2-4c99-8823-b5e436aac0d2

Special thanks to [Nicholas (@Nickargiriou)](https://github.com/Nickargiriou) for recording!

## Features/Roadmap [![Features](https://img.shields.io/badge/Features/Roadmap-green)](https://github.com/KU-5H/ClubHub/blob/main/README.md#features-)
#### This section highlights features that are meant to implemented for Clubhub Some features have not yet been implemented, hence they are not checked yet.

### 1. ```Custom Roles```
- [x] Create three roles: **```Coach```**/**```Treasurer```**/**```Member```** that have differnet types of access and have certain features locked behind the role (A more in-depth breakdown of Role properties is given in the [![Roles](https://img.shields.io/badge/Roles-red)](https://github.com/KU-5H/ClubHub/blob/main/README.md#roles-) section)
- [ ] A **```Member```** role is automatically selected at the Register page, while the **```Coach```** can change the user's roles if they wish to

### 2. ```Register/Login```
- [x] A Sign-up page where users can sign-up for the website. They can also login once their information is updated to the database
- [x] The website changes based on whether or not the user is logged in or not
- [x] A user can't access certain web pages if they aren't logged in
- [x] Passwords are encrypted on register and stored onto a Club database

### 3. ```Announcement Hub for Meetings```
- [x] The  **```Coach```** will be able to send announcements to all members of the site, informing them about meetings, cancellations or practices.
- [ ] The **```Coach```** can modify or delete announcements if they need to
- [x] **```Members```** can view the announcements from their end, but cannot make or modify announcements

### 4. ```Finances```
- [x] **```Members```** can view or pay for any payments they have due from practices/meetings
- [x] The **```Treasurer```** can set payments for users individually or multiple at a time
- [ ] Notifications can be sent to **```Members```** by the **```Treasurer```** about upcoming or overdue payments
- [ ] The  **```Treasurer```** can view club finances: the revenue or costs that the club incurred from their meetings (More details in the [![Treasurer](https://img.shields.io/badge/Treasurer-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#treasurer-role) section)
- [ ] Discounts are given to **```Members```** based on their payment track recrod (More details in the [![Member](https://img.shields.io/badge/Member-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#members) section)

### 5. ```Calender```
- [x] A visual calender where the  **```Coach```** can create events or meetups for **```Members```** 
- [ ] The calender displays the date and location of the meetup/event, with an option for **```Members```** to opt-in for the meeting/event
- [ ] A price associated for each event, either set by the **```Coach```** or  **```Treasurer```**. When **```Members```** opt-in, the cost of the meeting/event is automatically billed for that **```Member```**
- [ ] The  **```Coach```** can update or delete events

### 6. ```Communication```
- [ ] A chat in which the **```Coach```**/**```Treasurer```**/**```Member```** can interact and talk to one another
- [ ] A private chat option where the **```Coach```**/**```Treasurer```**/**```Member```** can have one-on-one conversations with other 


## Roles [![Roles](https://img.shields.io/badge/Roles-red)](https://github.com/KU-5H/ClubHub/blob/main/README.md#roles-)

### ```Coach/Admin``` [![Coach](https://img.shields.io/badge/Coach-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#coachadmin)
- Send notifications to users

### ```Treasurer``` [![Treasurer](https://img.shields.io/badge/Treasurer-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#treasurer) 
- View finances: current revenues, expenses, and debts
- Send notifications to users about payment deadlines
- Display user information
- Track profit margins for the group
- Monitor payment status for activities
- Add and remove members from the list

### ```Member``` [![Member](https://img.shields.io/badge/Member-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#members)
- Access club date information through the notification board
- Make payments to the club
- Receive a 10% discount after 3 months of on-time payments


## Technologies Used [![Technologies](https://img.shields.io/badge/Technologies-blue)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#technologies-used-)
### Frontend
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

- Used to create custom roles (**```Coach```** / **```Treasurer```** / **```Member```**), assign different web pages based on the role of the user, and provide visuals that the viewer can see
- React and Tailwind primarily make up what the user can see on the webpage


### Backend
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozill)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

- The backend is used to make API calls and requests to the database
- The database stores users inforation, including their login infromation (encrypted), finances and their payment track record

## Installation [![Installation](https://img.shields.io/badge/Installation-purple)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#Installation)

### Basic Essentials
[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

### Starting Installation / Frontend Setup:
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
1. Clone the repo with ```git clone```:

   ```sh
   git clone https://github.com/KU-5H/ClubHub.git
   ``` 
2. Install NPM packages on both the frontend and backend folder:

   ```sh
   npm install
   ```
   
3. Run the frontend with ```npm run dev``` (You have to be in the frontend folder), which will run on ```http://localhost:5173/```, though it won't work without the backend set up.

### For the backend:
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
1. Make a ```.env``` file in your backend. In here you will store ```PORT=5000```, your ```MONGOURL``` (more details in database setup) and ```JWT_SECRET``` which can just be a random set of characters/numbers.
2. Run the backend with ```npm start``` (You have to be in the backend folder). 
The backend will then run on ```http://localhost:5000/```t though you will need a database for this to work.

### Database Setup:
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- Since MongoDB Atlas requires permission to access the database, you won't be able to run this branch without being a member of the database. So first get permission to join the database or use your own to host. This installation assumes you either are a member of the database or will be using your own database.
- Connect to the Database using the link provided and set it to ```MONGOURL```. Make sure you add yourself in database access in the MongoDB site

#### At this point the application will run on your local system

## Acknowledgments [![Acknowledgments](https://img.shields.io/badge/Acknowledgments-default)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#acknowledgments-)
#### Special thanks to these plugins and sites which helped with the creaataion of this service:
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Big-Calender](https://github.com/jquense/react-big-calendar)
- [React-Hot-Toast](https://react-hot-toast.com/)
- [MUI Date and Time Picker](https://mui.com/x/react-date-pickers/date-picker/)
- [Brett Westwood's MERN User Authentication Video](https://www.youtube.com/watch?v=XPC81RWOItI&list=WL&index=1&t=4911s)

## License [![License](https://img.shields.io/badge/License-teal)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#license)
This project is licensed under the [MIT License](https://opensource.org/license/mit).

