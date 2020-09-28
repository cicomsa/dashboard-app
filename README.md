# Dasboard App

## Steps to run the application:

1. Install dependencies by running ```yarn``` in your terminal. After that, either run ``` yarn start``` and visit ```http://localhost:3000/``` (development mode), either run ```yarn build && npx serve -p 3001 build``` and visit ```http://localhost:5000/```(production mode).
2. To run the tests, in your terminal run ```yarn test```.

## To test the application

1. The page should have the required data visible: the 3 main KPIs on the top (active source, weekly active and NPS).
2. When users change the filters or the sort by selector value, in the developer tools' console, the new state which is used for the payload data should be visible. 
Keep in mind that the data will be rendered twice in the development mode, due to the ```React.StrictMode``` wrapper that comes automatically with the ```npx create-react-app``` code structure. This issue is however not an issue on the production mode.

## Side notes: 

* The page is not a 100% replica of the given design
* The ```filter by``` and ```sort by``` now use `select`, however, a dropdown could have also been used instead to preserve better the design requirements
* In this particular scenario, the payload sends ```0``` if the ```filter_by``` value is related to previous periods. In order for the ```time_unit_count``` to have a value above ```1``` (as I think it was actually intended), I believe the dashboard should have a way included for the user to mention what that value would be.
* The project uses a function that mimics the API call behaviour
* The project includes a bug which I didn't have time to fix:
  * When the page rerenders, the API mock function is called twice, both on page load, and also once again when users change the ```sort by``` value
