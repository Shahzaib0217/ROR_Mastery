# Project Startup 
rails new blog
cd blog
bin/rails server

# Hello World
Just mention the controller & the function used, in config/routes.rb. Then just define the function  in the controller and render html there.

# Using pages conteroller to render views
CMD:
rails generate controller pages

Define a function in the pages controller. Then create a .erb views file with same name as of the function. 


# Tables and Migrations
To add attributes for the table in the migration file, add the following inside create_table block:
`t.string :title`

To run the migration file, run the following command from the terminal:
`rails db:migrate`

The first time you run the migration file, it will create the database, the articles table and a schema.rb file.

To rollback or undo the changes made by the last migration file that was run, you may use the following command:
`rails db:rollback`

If you have run the rollback step, then you can update the previous migration file and add the following line to add a description attribute (column) to the articles table:

t.text :description
To run the newly edited migration file again, you can run `rails db:migrate`

Note: This above line will only work if you had rolled back the prior migration.

To generate a new migration file to add or make changes to your articles table you can generate a new file:

`rails generate migration name_of_migration_file`

Then within the def change method in the migration file you can add the following lines:

add_column :articles, :created_at, :datetime
add_column :articles, :updated_at, :datetime
You can run the newly created migrations file by running `rails db:migrate` from the command line and check out the schema.rb file to check that the changes were reflected properly.

# Console
Now, provided you have the articles table already, you can use the Rails console and work with the articles table using this article.rb model file.

To start the rails console, type in `rails console`  or `rails c` from the terminal.

Once in the console, you can exit it at any time by typing in `exit` followed by enter/return.

You can test out your connection to the articles table by typing the following command from within your rails console:
`Article.all`

If you get an empty collection/array-like structure as a response, you're good to go.

To create a new article, you can use any of the following methods:

`Article.create(title: "first article", description: "Description of first article")` # make sure Article is capitalized if using this method

`article = Article.new
article.title = "second article"
article.description = "description of second article"
article.save`

`article = Article.new(title: "third article", description: "description of third article")
article.save`

To check all the articles that exist in your articles table, you can use the following command:
`Article.all`

# CRUD operations from Rails Console
To find an article by id you can use the find method like below:

`Article.find(1)` # replace 1 with id of article you want to find

You can save this to a variable and use it like below

```
article = Article.find(1)
article.title # to display (get) the title
article.description # to display (get) the description
```
You can use the methods below to view the first and last articles of the articles table:
```
Article.first # display the first article in the articles table
Article.last # display the last article in the articles table
```
You can update an article by finding it first and then using setters for the attributes that the model provides like below:
```
article = Article.find(id of article you want to edit)
article.title = "new title"
article.description = "new description"
article.save
```
You can delete an article by using the destroy method. A sample sequence could be like below:
```
article = Article.find(id of article you want to delete)
article.destroy
```

# Validations
Inside the models/article.rb, we can add validations.

# Fetching details from db and showing
Show actions are usually used to display individual items in a resource. For example:

- a specific article from an articles table

- a specific user's profile from a social media app

The steps are to -

1) Have a route for it

2) Have the corresponding controller/action that the route directs the request to

3) Have a corresponding view to display to the user who makes the request


# To pause Web Server and watch params
- ByeBug
- render plain: params[:article]

# Flash Messages
Flash and notice are same.

# Update 

The process of editing an existing article and updating the article in the articles table utilizes the edit and update actions. The standard process is as follows:

1. Expose edit and update routes.

2. Add edit and and update actions in the articles controller.

3. Create an edit template (form) in the app/views/articles folder.

4. Use the edit action to find the article to edit, display the existing article details in the edit form.

5. Use the update action to find the article in the db. Whitelist the new title and description fields and if there are no validation errors, then update the article in the articles table with the new data.
