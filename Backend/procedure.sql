CREATE PROCEDURE AddOrUpdateObject(
IN _PlantID INT,
IN _Name varchar(45),
IN _Value float
)
Begin
	Declare PlantId INT; Declare Status varchar(20);
		set PlantId = (select Id from Object where Id = _PlantID);
		IF PlantId != _PlantID THEN
		Insert into Object(Id,Name,Value)
		values (_PlantID,_Name,_Value);
		Set Status = "Insertion Completed";
		[ else {
		update Objects
		set
		Name = _Name,
		Value = _Value,
		set Status = "Updating Done";} ]
		END IF;
		END
