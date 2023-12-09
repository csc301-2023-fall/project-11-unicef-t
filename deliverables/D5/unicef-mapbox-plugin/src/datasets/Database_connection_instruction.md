This is the instruction for connection Apache Superset to external database.


1. Visit the Aiven cloud website at https://aiven.io/. (Or any database service, we will use Aiven cloud as an example)

2. If you don't have an account, create one.

3. Log in to your account.

4. On the left side, click on "Services."

5. Choose "Create Service."

6. Select the type of database you want to create; for this demo, choose "PostgreSQL."

7. This takes you to the database setup page.

8. Choose the "Free plan."

9. In "1. Select service region," go to North America and choose a server location.

10. In "2. Select service plan," pick "free-1-5-gb."

11. In "3. Name and tag this service," create a name for your database.

12. After completing the previous steps, select "Create Free Service."

13. Once the database is created, click on it to view details.

14. In the overview section, find the service URL and copy it; you'll use this for connecting to the database.

15. Now, go to Apache Superset, click on "Settings" in the top-right corner.

16. Click "Database Connection."

17. Click the "+ Database" button.

18. Choose the database type; for demo purposes, select "PostgreSQL."

19. Scroll to the bottom of the page and click on the blue line that says "Connect this database with an SQLAlchemy URL string instead."

20. In the display name section, fill in the name for this database.

21. In the SQLAlchemy URL section, paste the URL copied from the Aiven cloud platform.

22. Change "postgres" to "postgresql" in the URL.

23. Click "Test Connection"; it should show a "Connection looks good!" prompt in the bottom right corner.

24. Click "Connect."

Congratulations! You have successfully connected to the online database. You can now upload and extract data as needed in the future.

