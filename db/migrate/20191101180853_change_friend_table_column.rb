class ChangeFriendTableColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :status
  end
end
