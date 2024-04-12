
# ClubHub
**ClubHub is a platform designed to streamline club and group management, making it easier to handle finances, payments, and communications. With ClubHub, you can effortlessly track finances, send reminders, and create announcements for users.**

## Contributors
- [Kush (@KU-5H)](https://github.com/KU-5H) 
- [Brandon (@branliyan)](https://github.com/branliyan)
- [Lex (@lex-pan)](https://github.com/lex-pan)
- [Nicholas (@Nickargiriou)](https://github.com/Nickargiriou)
- [Jaysun (@JaysunS23)](https://github.com/JaysunS23)


## Features [![Features](https://img.shields.io/badge/Features-green)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#Features)
### 1. Custom Roles:
- Different roles in ClubHub give different access to members
- More Details in the [![Roles](https://img.shields.io/badge/Roles-red)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#roles) section
### 2. Easy Member Sign-up/Login:
- Member's can login using an email and password to the group chat
- Passwords are encrypted and stored onto a club database (more infromation on databse in [![Technologies](https://img.shields.io/badge/Technologies-blue)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#technologies-used) section)
### 3. Notification Hub for Meetings
- The  **```Coach```** will be able to send notifications to all members of the site, informing them about meetings, cancellations or practices.
### 4. Finances
- Members can view any payments they have due from practices/meetings
- The **```Treasurer```** gets a more in depth breakdown of the clubs finances (More details in the [![Treasurer](https://img.shields.io/badge/Treasurer-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#treasurer-role) section)
- Discounts are given to students based on their payment track recrod (More details in the [![Member](https://img.shields.io/badge/Member-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#members) section)


## Roles [![Roles](https://img.shields.io/badge/Roles-red)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#roles)

### ```Coach/Admin``` [![Coach](https://img.shields.io/badge/Coach-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#coachadmin)
- Send notifications to users

### ```Treasurer``` [![Treasurer](https://img.shields.io/badge/Treasurer-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#treasurer) 
- View finances: current revenues, expenses, and debts
- Access a log of previous financial information
- Automate payments to coaches
- Send notifications to users about payment deadlines
- Display user information
- Track profit margins for the group
- Monitor payment status for activities
- Add and remove members from the list

### ```Member``` [![Member](https://img.shields.io/badge/Member-black)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#members)
- Access club date information through the notification board
- Make payments to the club
- Receive a 10% discount after 3 months of on-time payments


## Technologies Used [![Technologies](https://img.shields.io/badge/Technologies-blue)](https://github.com/KU-5H/ClubHub?tab=readme-ov-file#technologies-used)
### Frontend
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

- Used to let the **```Coach```** / **```Treasurer```** / **```Member```**   access a visible and interactive website
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

### Starting Installation:
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
1. Clone the repo with ```git clone```
2.  ```npm install``` both the frontend and backend folders.
3. Run the frontend with ```npm run dev``` (You have to be in the frontend folder), which will run on ```http://localhost:5173/```, though it won't work without the backend set up.

### For the backend:
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
1. Make a ```.env``` file in your backend. In here you will store ```PORT=5000```, your ```MONGOURL``` (more details in database setup) and ```JWT_SECRET``` which can just be a random set of characters/numbers.
2. Run the backend with ```npm start``` (You have to be in the backend folder). 
The backend will then run on ```http://localhost:5000/``` though you will need a database for this to work.

### Database Setup:
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- Since MongoDB Atlas requires permission to access the database, you won't be able to run this branch without being a member of the database. So first get permission to join the database or use your own to host. This installation assumes you either are a member of the database or will be using your own database.
- Connect to the Database using the link provided and set it to ```MONGOURL```. Make sure you add yourself in database access in the MongoDB site

#### At this point the application will run on your local system

## License
This project is licensed under the MIT License.

