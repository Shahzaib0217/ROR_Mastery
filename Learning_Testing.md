# factory_bot_rails gem
- During testing, there's often a need **to produce specific sets of data** or objects during the test run. This is where factories come into play.
- You would put factory files in a `factories directory` under your `spec directory`, and give it the same name as the model. In this case, the file path would be `./spec/factories/course.rb`.

## Using factory_bot_rails gem
* **Defining Objects:**
    ```
    FactoryBot.define do
    factory :course do
        title "Testing with Rails 101"
        description "An introductory course to testing in Ruby on Rails."
        duration 40
    end
    end
    ```
* **build vs create:**
    ```
    unsaved_user = build(:user)
    saved_user = create(:user)
    ```


## What is the difference between the factory_bot and the factory_bot_rails gems?
- factory_bot_rails just provides your app with Rails-specific factory_bot integrations.
- factory_bot_rails automatically includes factory_bot.

#### Resources
- https://www.honeybadger.io/blog/factorybot-for-rails-testing-md/
- https://stackoverflow.com/questions/57812057/what-is-the-difference-between-the-factory-bot-and-the-factory-bot-rails-gems
- https://medium.com/@charliekroon/how-to-test-with-rspec-an-extensive-beginners-guide-886086168d2d