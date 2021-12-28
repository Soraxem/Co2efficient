# PlantAPI
A simple API made with Nodejs, express and mysql

## Apilities
1. Comparisons
    * All the comparisons have a mean value for the CO2 per kilogram per hour

## CRUD
- GET :3000/objects -> Returns all entries as JSON</br>
- GET :3000/objects/id -> Returns entry with the ID</br>
- GET :3000/values/c -> Returns funny comparisons based on the given value
- POST :3000/objects -> Create new entry, requires JSON with name and value. example:</br>

```javascript
{
  "Name": "plant",
  "Value": 11
}
```

