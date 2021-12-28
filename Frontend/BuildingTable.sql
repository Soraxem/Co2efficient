CREATE TABLE IF NOT EXISTS Building1 ('RemoteID' INTEGER NOT NULL, 'Name' TEXT NOT NULL, 'CustomName' TEXT NOT NULL, 'Value' FLOAT NOT NULL, 'Room' TEXT NOT NULL);

INSERT INTO Building1 ('RemoteID', 'Name', 'CustomName', 'Value', 'Room') VALUES (1, 'nei', 'ddddd', 5, NULL);
INSERT INTO Building1 ('RemoteID', 'Name', 'CustomName', 'Value', 'Room') VALUES (3, 'Baum', 'hhe', 4, 'DeezeNuts');
INSERT INTO Building1 ('RemoteID', 'Name', 'CustomName', 'Value', 'Room') VALUES (2, 'Blume', 'jklhsadkjl', 2, 'IchRaum');
INSERT INTO Building1 ('RemoteID', 'Name', 'CustomName', 'Value', 'Room') VALUES (2, 'Blume', 'cvgsdfg', 2, 'IchRaum');


INSERT INTO Building1 VALUES (1, 'nei', 'ddddd', 5, NULL);
INSERT INTO Building1 VALUES (3, 'Baum', 'hhe', 4, 'DeezeNuts');

SELECT DISTINCT Room FROM Building1;
SELECT Name, CustomName FROM Building1 WHERE Room IS NULL;