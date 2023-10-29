class AddCountToSearches < ActiveRecord::Migration[7.1]
  def change
    add_column :searches, :count, :integer
  end
end
