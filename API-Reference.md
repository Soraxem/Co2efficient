# PlantAPI
A simple API made with Nodejs, express and mysql

## Abilities
GET :3000/objects -> Returns all entries as JSON</br>
GET :3000/objects/id -> Returns entry with the ID</br>
POST :3000/objects -> Create new entry, requires JSON with name and value. example:</br>

```javascript
{
  "Name":"plant";
  "Value":"11";
}
```
