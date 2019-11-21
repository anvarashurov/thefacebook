class DropLikesTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :likes_tables
  end
end
