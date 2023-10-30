<p align="center">
  <h1 align="center"> SearchApp
 </h1>

 <hr>

Realtime search and analytics

 ## Example:
 User searches:
 - How 
 - How fast is
 - How fast is new Rimac Nevera?

 Search will only record:  - How fast is new Rimac Nevera?
 <hr>

## Documentation

### Installation guideance

- With command git clone https://github.com/hadzicamer/searchapp.git you can have source code locally or with option download as ZIP.
- Navigate to downloaded/cloned project (with command cd) and run `bundle install` to install all required gems. 
- Current version of Ruby is 3.1.3 and Rails 7.1.1 so there might be need for adjustments in Gemfile or creation of .tool-versions file for your version
- Run `rails db:create` followed by `rails db:migrate` and `rails db:seed` to set up the database
- Run `redis-server` in separate terminal and left it as it is - it's necessary for all asynchronus processes.
- Run `bundle exec rails s` to start the server.
- Run `bundle exec rspec` to run tests (before that `redis-server` must be executed or up already)
<hr>
