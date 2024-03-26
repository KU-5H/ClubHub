
# ClubHub
**ClubHub is a platform designed to streamline club and group management, making it easier to handle finances, payments, and communications. With ClubHub, you can effortlessly track finances, send reminders, manage members, and analyze profit margins for your group or club.**

## INSTALLATION
For us developers:
1. Clone the repo
2. Cd the frontend folder and ```npm install vite```
3. Cd the backend folder and ```npm install express``` and ```npm install nodemon```
4. Run the frontend with ```npm run dev``` (You have to be in the frontend folder)
5. Run the backend with ```nodemon server.js``` (You have to be in the backend folder). 
The backend will then run on ```http://localhost:3000/```, and the frontend will run on a available port

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
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

- Used to let the **```Coach```** / **```Treasurer```** / **```Member```**   access a visible and interactive website
- React and Tailwind primarily make up what the user can see on the webpage


### Backend
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozill)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

- The backend is used to make API calls and requests to the database
- The database stores users inforation, including their login infromation (encrypted), finances and their payment track record

## Installation

To run this application, you will need: 
- [![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

1. Clone the repository using
```
    git clone git@github.com:KU-5H/ClubHub.git
```

2. Install dependencies using npm.
3. Set up the necessary environment variables.
4. Run the server using Node.js.
6. Access the application through your web browser.


## Contributors
- [Kush (@KU-5H)](https://github.com/KU-5H) 
- [Brandon (@branliyan)](https://github.com/branliyan)
- [Lex (@lex-pan)](https://github.com/lex-pan)
- [Nicholas (@Nickargiriou)](https://github.com/Nickargiriou)
- [Jaysun (@JaysunS23)](https://github.com/JaysunS23)

## License
This project is licensed under the MIT License.

