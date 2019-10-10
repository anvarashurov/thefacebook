class AddAuthoredPostsArrayToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :authored_posts, :integer, array: true, default: []
  end
end
