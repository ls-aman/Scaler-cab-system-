# Scaler-cab-system-
Project given by a scaler company for an placement round<br>
## **1. Description:**<br>
Create a web application for a cab system where users can enter the source and destination and they will be provided with the shortest time and estimated cost.<br>

## **2. Requirements:**<br>
●	The system should be able to manage cab booking<br>
●	The below provided is the time taken between different destinations. For e.g. from A to B the time taken is 5 min, similarly from D to F the time taken is 20 min.<br> 
![Graph diagram provided by them to initialize ka algorithm](https://user-images.githubusercontent.com/70821575/229360940-e0b12ac8-f445-4529-8f53-10d9112bdc59.png)

● The user should be able to book a cab by providing the user's email, source, and destination<br>
●	The system should be able to calculate the shortest possible time from source to destination. E.g. There are multiple ways from A to D, but the shortest route will be via C.<br>
●	There are a total of 5 cabs with different pricing. (Price/minute)<br>
○	No cab should have an overlapping start and end time<br>
●	The system should provide the estimated cost depending on the cab chosen and the time taken to reach the destination.<br>
●	The system should be able to track the cab booking<br>
●	Users should be able to view and edit the cabs and their pricing.<br>

## **3. Note:**<br>
●	No need to develop login/signup pages, just make an assumption that only admins will be accessing it and just try to cover the basic requirements part with this assumption.<br>
●	Create your app’s frontend as a SPA.<br>
●	Create a proper ReadME file describing the functioning of your project<br>

## **4. Working:** <br>
- So in this i used html, js, css, bootstrap or the UI part of this project.<br>
- I used Node.js, body-parser, ejs for the backend part.<br>

## **5.Functionality:**<br>
- First it will ask for your Email, Source location, Destination Location.<br>
- when user enter the correct information it will calculat the shortest distance according to the provided information, to calculate the shortest distance i used Dijkstra algorithm which is basically used for the same.<br>
- So after receiving the correct information the algorithm works and find the shortest path with the total time taken.<br>
- I initialize some list for the pricing, availability, name, arrival time, etc which will gives the information of car.<br>
- i used body-parser to retrieve the information that user entered after that I used .render() method to post it on the web page.<br>
- So if the car is available then we can book the cab otherwise it will show the alert.

Command to start this project(on Gitbash)
```
npm init
npm i express.js ejs nodemon body-parser
```
```
nodemon app.js
```
## **Snapshots of project:**
<br>

![image](https://user-images.githubusercontent.com/70821575/229498479-3115a169-924e-4b48-86e0-df7118471b63.png)<br>
### **Fill the form:**<br>
![image](https://user-images.githubusercontent.com/70821575/229498591-8db7fe29-5c62-4d12-978f-0457d0b40d97.png)<br>
### **After Click Book Now button:**<br>
![image](https://user-images.githubusercontent.com/70821575/229498638-0360adc1-f0e9-4a1d-8ca1-d2f501ae5f9d.png)<br>
### **After clicking Book button on the cabs section:**<br>
![image](https://user-images.githubusercontent.com/70821575/229498680-1559c703-483b-44eb-b6c0-a7ca762acce1.png)


