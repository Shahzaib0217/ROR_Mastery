# CRUD using Scaffold

rails generate scaffold Article title:string description:text

bin/rails db:migrate

http://127.0.0.1:3000/articles

rails routes

rails routes --expanded

"""
The line `resources :articles` in the config/routes.rb file provides the following routes:

- index of articles (GET request)

- new article (GET)

- create article (POST)

- edit article (GET)

- update article (PUT and PATCH)

- show article (GET)

- delete article (DELETE)
"""

