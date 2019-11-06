class AddMoreColumnsToUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :string, :default=>''
    add_column :users, :current_city, :string, :default=>''
    add_column :users, :workplace, :string, :default=>''
    add_column :users, :school, :string, :default=>''
    add_column :users, :hometown, :string, :default=>''
    add_column :users, :rel_status, :string, :default=>''
  end
end
