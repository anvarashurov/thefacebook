class CreateFriend < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.string :friend_sender, null: false
      t.string :friend_receiver, null: false
      t.boolean :status, null: false
      t.timestamps
    end
  end
end
