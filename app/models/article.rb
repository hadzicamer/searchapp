class Article < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5 }
  validates :written_by, presence: true
end
