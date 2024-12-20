# Rspec

## Context vs Describe
- The purpose of “describe” is to wrap a set of tests against one functionality while “context” is to wrap a set of tests against one functionality under the same state.
- There is not much difference between describe and context. The difference lies in readability. I tend to use context when I want to separate specs based on conditions. I use describe to separate methods being tested or behavior being tested.
- One main thing that changed in the latest RSpec is that "context" can no longer be used as a top-level method.

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
- https://gist.github.com/kyuden/8889700
- https://stackoverflow.com/questions/26477464/describe-vs-context-in-rspec-differences