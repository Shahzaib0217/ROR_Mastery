# Setting up the project

Command to create project,
`rails new backend --api -T -d=postgresqlils new backend --api -T -d=postgres`

Creating models
`rails g model challenge title:string description:text start_date:date end_date:date`

# JWT Auth 
Resources:
```
1) https://github.com/heartcombo/devise?tab=readme-ov-file#getting-started

2) https://dakotaleemartinez.com/tutorials/devise-jwt-api-only-mode-for-authentication/
```
After installing devise gem also update the developmenmt and production environment files.


Create a devise model to represent a user.

`rails generate devise User`





