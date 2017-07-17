[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

//since this is just a to-do list it needs to keep track of data, and record when soemthing is finished. The main level is Project, which is populated with Tasks.

Project
  - name
  - description
  - Set of tasks

Tasks
  - name
  - short description
  - start time
  - complete time


//
  ```javascript
  var task {
    name: 'finish homework',
    description: 'ch 50-55 in science textbook'
    dateStarted: '07/05/2017',
    dateCompleted: 'unfinished'
  };

  var project = {
    name: 'choose your own adventure game',
    description: 'build game to study js',
    setOfTasks: ['create HTML page', 'create CSS page', 'create JS page', 'link the three pages together', 'create basic boilerplate', 'start creating game functionality', 'create win scenarios', 'create clickable start button', 'create clickable reset button', 'create winner screen']
  };
  ```

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

//in the application you are presented with album covers. clicking/touching the albums will open them to display photos, which
//contain detailed descriptions and sharing options at the album and individual level
user
 - about section
 - albumsCreated
 - photosUploaded

albums
  - title
  - short description
  - photos
  - share button

photos
  - title
  - detailed description
  - url where image is hosted
  - share button

  '''javascript
  var user = {
    username: 'kissfan89'
    about: 'a blank section that can be customized to include personal information'
    albumsCreated: ['Psycho Circus Merch Collection', 'Atlanta 2007 Concert', 'Chicago 2014 Concert']
    photosUploaded: ['images/photos1.jpg', 'images/photos2.jpg', 'images/photos3.jpg']
  }
  var albums = {
    title: 'Psycho Circus Merch Collect'
    description: 'Favorite items from the comic and album'
    photoset: ['images/photos1.jpg', 'images/photos2.jpg']
  }
  var photos = {
    title: 'Action figures'
    description: 'Gene and Ace with their comic book weapons'
    url: 'images/photos1.jpg'
  }
javascript '''

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

//No information needs to be stored long term. The temperature is stored as a function of the house because most houses only have one thermostat. Lights are named and grouped by rooms for usability.

''JavaScript
Light {
  lightLevel: medium';
  Room: 'study';
  fixture: 'desk lamp';
}

Home {
  temperature: '75 degrees'
  setOfLights: ['kitchen', 'living room', 'study', 'bedroom', 'bedroom2', 'bathroom', 'bathroom2']
}
javascript'''

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

//customers need to be able to see a list of products, an order-in-progress (cart), and a list of what they currently have in their order. Information should be presented in a straight forward way without excessive data, with prices and totals clearly marked.

Cart:
  - total
  - list of items
  - order status
  - date shipped

Order Item:
  - name
  - quantity

Sneakers:
  - brand
  - size
  - color
  - price

'''''javascript

Cart {
  listOfItems: ["addidas", "nikes", "soap shoes"];
  total: "$200.00";
  orderStatus: 'Shipped';
  dateCompleted: '07/05/2017';
}

orderItem {
  name: 'soap shoes';
  quantity: 1;
}

sneakers {
  brand: 'soap';
  size: 10;
  color: 'red, white stripe';
  price: '$50.00';
}

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

The advantage of presenting data this way is that stations can be referenced by name rather than by their index in an array. It is convenient to retrieve information. The clearest disadvantage is that no information is being stored. An extra object would need to be added to tell travelers their current location. That could also be used as a reference point for the app to calculate the distance to their desired stop.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

Example one has the advantage of storing data in reference to the doctor. This makes it very easy to find appointments for staff, but less easy for patients (people with chronic illnesses, for example, might see multiple doctors every week and have trouble keeping names straight when they have other higher priority information to remember). The appointment field in example one does not name a doctor, which would make it almost impossible to retrieve that information even when the patient is on time.

Example two is more patient focused. It would only require that a person know when their appointment was to retrieve data about their doctor. This could also work well for office staff, who could work backwards with the data a patient remembers to find their doctor. This approach makes it harder for staff to retrieve their own appointments, which could result in doctors who are late (more late than usual) to appointments. Method two would be easiest for a patient portal, and method one would work well for in-house scheduling.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

    Player:
    - username
    - avatar

   Game:
   - an X player
   - an O player
   - set of moves that have been made

   Move:
   - position on board
   - player token

b.  How might those entities be represented in JavaScript code?
  var xPlayer = {
    username: 'tic_tac_bro';
    avatarURL: 'images/photo1.jpg'
  }
  var moves = {
    playerToken: 'X';
    position: 4;
  }
     var exampleGame = {
       xPlayer: {
         username: 'tic_tac_bro';
         avatarURL: 'images/photo1.jpg'
       },
       oPlayer: {
         username: 'burned_toast';
         avatarURL: 'images/catPhoto2.jpg';
       }
       moves: [
         {
           playerToken: 'O';
           position: 3
         },
         {
           playerToken: 'X';
           position: 4
         },
         {
           playerToken: 'O';
           position: 5
         }
       ]
   }

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

<<<<<<< HEAD
  There needs to be some representation of the game, the easiest way to do this being a 'board' with pieces, each possible position assigned a numeric value. It would need to store the history of moves, or else it would fall to players to remember that (which would be the opposite of fun). Storing it this way also makes it easier to calculate win conditions. Three in a row can be checked by an easy function, so
=======
  There needs to be some representation of the game, the easiest way to do this being a 'board' with pieces, each possible position assigned a numeric value. It would need to store the history of moves, or else it would fall to players to remember that (which would be the opposite of fun). Storing it this way also makes it easier to calculate win conditions. Three in a row can be checked by an easy function, so
>>>>>>> 729edcc7bdde6abf30acc8628331f3c74a57fb2d
