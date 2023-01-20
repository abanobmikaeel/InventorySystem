1. Create a web application that allows energy companies to manage and track their renewable energy generation assets.
2. Build a Django application that uses an ORM (e.g. Django's built-in ORM) to interact with a PostgreSQL database. The database should have tables for assets, such as solar panels and wind turbines, and for energy generation data, which should have fields such as date, energy generated, and location.
3. Create a REST API using Django Rest Framework that allows CRUD operations on the assets and energy generation data tables.
4. Use ReactJS to build a front-end for the application. The front-end should allow users to view a list of assets, add new assets, and update or delete existing assets. It should also display energy generation data in the form of charts and graphs.
5. Deploy the application on AWS using Elastic Beanstalk and RDS for the PostgreSQL database.
6. Implement a messaging service using AWS Simple Notification Service(SNS) to notify users when an asset is not performing as expected or when a threshold of energy generation is reached.
7. Use AWS SQS (Simple Queue Service) to handle and process the energy generation data asynchronously.
8. Write test cases for the Django application and the ReactJS front-end using Pytest and Jest.
9. Write documentation for the application, explaining how to set it up and use it.

## NOTES

- Django has apps and also has projects, not the same thing. projects are the overarching umbrella, apps are the subset
