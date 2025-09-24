# 🐇 UVbunny

UVbunny is a playful Angular + Firebase web app that helps you monitor the wellbeing of your bunnies 🐰.  
Track happiness through events like **eating** 🥬🥕 and **playing**, and configure how many points each activity is worth.  
All data is stored in **Firestore**, and happiness is calculated dynamically in the client — so it works fully on the **Firebase Spark (free) plan**.

---

## Hosting  link

https://uvbunny-97b73.web.app/main


## Firebase  link

https://console.firebase.google.com/u/0/project/uvbunny-97b73/overview

## 🚀 Features

##  Tabs Implementation

 - To shift between Main and Config page.

- **Main Page**
  - View all your bunnies
  - See each bunny’s happiness
  - Add new bunnies
  - Overall average happiness

- **Bunny Details Page**
  - View all events for a bunny
  - Add new events:
    - Eating (🥬 lettuce = 1 pt, 🥕 carrot = 3 pts by default)
    - Playing (2 pts, doubled if they’ve played with the same bunny before)
  - Upload an avatar for your bunny (I was running into  CORS error due to spark plan,  I'm   unable to create bucket because of plan limitation to store images)

- **Config Page**
  - Adjust how many points each activity is worth
  - Config changes apply retroactively because happiness is computed from events + config

---

## 🛠️ Tech Stack

- **Frontend:** Angular, AngularFire, Angular Material
- **Backend:** Firebase (Firestore + Storage)
- **Hosting:** Firebase Hosting
- **Plan:** 100% Spark-plan compatible (no Cloud Functions required)
