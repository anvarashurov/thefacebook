class AddColumnToFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :status, :string
  end
  # add_index :friends, [:friend_sender, :friend_receiver], unique: true
end
