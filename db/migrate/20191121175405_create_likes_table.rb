class CreateLikesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :likes_tables do |t|
      t.integer :liker_id, null: false
      t.references :likeable, polymorphic: true
    end
  end
end
