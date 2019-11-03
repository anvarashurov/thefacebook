class ChangeFriendColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :friend_sender
    add_column :friends, :friend_sender, :integer, null: false
    remove_column :friends, :friend_receiver
    add_column :friends, :friend_receiver, :integer, null: false
    # change_column :friends, :friend_receiver, "numeric USING_CAST(friend_receiver as numeric"), null: false
  end
end
