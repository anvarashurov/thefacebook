class Create < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :authored_posts
  end
end
