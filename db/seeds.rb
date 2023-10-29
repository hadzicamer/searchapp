# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Article.create(
  title: "What are the best practices in Rails 7",
  written_by: "Amer Hadzic",
)

Article.create(
  title: "How fast is new Rimac Nevera?",
  written_by: "Test test",
)

Article.create(
  title: "Which sport requires best preparation?",
  written_by: "Some journalist",
)

Article.create(
  title: "Best locations to travel through USA",
  written_by: "Travel writer",
)

User.create(
  first_name: "Test",
  last_name: "TestTest",
  email: "test@mail.com",
)

User.create(
  first_name: "Userrr",
  last_name: "UserrUser",
  email: "user@mail.com",
)
