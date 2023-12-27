# APIRest using NodeJS to manage the States, districts, neighborhoods and postal codes in Mexico. 
Uses the file provided by Mexican Post Office (Sepomex) https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx.
Contains a method to filter the XML file to just get the attributes:
* Postal code
* Neighborhood
* District
* State

The file can be udpdated in the "Utils" folder, keeping the name "direcciones.xml"
1. Replace the file "direcciones.xml" with the new file in the folder "Utils"
2. Delete the "direccionesMin.xml" file in the folder "Utils"
3. Run the "Utils/filtro.js" file (if you are using node, just run the command "node filter.js")
4. You will get now a new file "direccionesMin.xml" in the folder Utils
5. Run the API
6. Done :)

