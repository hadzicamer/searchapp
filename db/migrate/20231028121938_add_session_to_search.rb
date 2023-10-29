class AddSessionToSearch < ActiveRecord::Migration[7.1]
  def change
    add_column :searches, :session_id, :string
    add_index :searches, :session_id
  end
end
