class CreatePost < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.string :content, null: false
      # Add images, etc later
      t.timestamps
    end
  end
end