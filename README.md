# TruckTrack

## Table of Contents
---

* [Project description](#desc)
* [How to use](#how)
* [What we used](#tech)
* [Team members](#team-members)
* [Demo](#demo)

## <a name="dec"></a>Project description
---

>_TruckTrack is a fully responsive, MySQL/Sequelize/Node.js/Express/Passport MVC web app that was built in a few days as a full-stack coding project._

**TruckTrack helps connect food truck owners with their customers.**

TruckTrack is a free app created for food truck lovers and for food truck business owners. This free app lets customers track the food trucks they love around the DC Metro Area.

Based on their current location customers can browse the food trucks around them. Food-truck owners can share their current location with their customers and potential customers while having a detailed business profile page to showcase their food-truck.

 > _Check out the repo  **Wiki** section for detailed user-stories, database diagrams & file structure._

## <a name="how"></a>How to use
---

_You can use this web app AS-IS by running it from the following link: https://secure-hollows-74922.herokuapp.com/_

First, clone this repo by running the command:
`git clone https://github.com/sam-pop/TruckTrack.git`.

You will also have to set-up a local instance of mySQL server, look at `config/config.json` for the development settings.

From the command line run `npm install` to install all required dependencies from the `package.json` file.

Make sure you are connected to your local mySQL server and from the command line run `node server.js` to start the server at `localhost:8080` (you can change the port in the `server.js` file that's located in the root directory).

## <a name="tech"></a>What we used

**Back-end:**

* [Node.JS](https://www.npmjs.com/)
* [Body-parser (body parsing middleware)](https://www.npmjs.com/package/express-handlebars)
* [Express](https://www.npmjs.com/package/express)
* [Express-session  (session middleware)](https://www.npmjs.com/package/express-session)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](http://docs.sequelizejs.com/)
* [Sequelize-fixtures](https://www.npmjs.com/package/sequelize-fixtures)
* [Passport](https://www.npmjs.com/package/passport)
* [Passport-local (authentication strategy)](https://www.npmjs.com/package/passport-local)
* [bcrypt-nodejs (password hashing)](https://www.npmjs.com/package/bcrypt-nodejs)
* [Validator (string validation)](https://www.npmjs.com/package/validator)
* [Handlebars](https://www.npmjs.com/package/express-handlebars)

**Font-end:**

* HTML5
* CSS
* [Bootstrap (v4.1)](https://getbootstrap.com/)
* Javascript
* jQuery
* [Leaflet (JS interactive mapping library)](https://leafletjs.com/)
* [Animate.css (animations)](https://github.com/daneden/animate.css)
* [Material-Design Icons](https://material.io/)

## <a name="team-members"></a>Team members
---

* [Katherine Stout](https://github.com/katherinestout)
* [Samuel Poplovitch](https://github.com/sam-pop/)
* [Stanley Louis](https://github.com/stanlouis)

## <a name="demo"></a> Demo
---

https://secure-hollows-74922.herokuapp.com/

[![Screenshot](https://s22.postimg.cc/sxohlznep/Screenshot_2018-07-12-_Truck_Track.jpg)](https://secure-hollows-74922.herokuapp.com/)

---

#### Mobile:
[![Mobile Screenshot](https://s22.postimg.cc/6i1gqdikh/Screenshot_2018-07-12-_Truck_Track_3.jpg)](https://secure-hollows-74922.herokuapp.com/)

---

#### Truck owner profile page:

[![Truck owner profile page](https://s22.postimg.cc/932fzx5n5/Screenshot_2018-07-12-_Truck_Track_1.jpg)](https://secure-hollows-74922.herokuapp.com/)