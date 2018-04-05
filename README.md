# StudentScoreMate
A web app for managing student scores


Upload
======
Initially the app loads with an empty table. The table can be populated manually using the 'Add User' button next to the search
box or by uploading a csv file containing the student names and scores through the upload button.

Score Entry
===========
This app has a simple interface - It displays the student name and their scores for each homework in a table. The scores
are updatable from the UI. Once the user changes a score or inserts a new score, the changes get persisted to an SQLite
database when he clicks away from the updated cell.

Search
======
This is the coolest feature of the app. The user can search for student names by typing their names in the search box and
only those names which match the query text will be filtered and shown in the table.

New User Addition
=================
A new user can be added to the database using the 'Add User' button next to the search box. Once the user information is
entered, the user can save it using the 'Save' button or cancel the addition of the user by clicking 'Cancel'

Export
======
The current data in the table can be exported to a csv file by clicking the 'Export' button. When the user clicks on the 
'Export' button, a download will start and the user can choose where to save the file.
