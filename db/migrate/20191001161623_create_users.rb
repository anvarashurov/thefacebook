class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string first_name, null: false
      t.string last_name, null: false
      t.string phone_number, null: false, array:true, default: []
      t.string email_address, null: false
      t.string password_digest, null: false
      t.string session_token, null: false 
      t.date birth_date, null: false
      t.string gender, null: false
      t.boolean confirmed, null: false
     
      # t.string life_events, array: true, default: []
      # t.string about_you
      # t.string name_pronunciation
      # t.string other_names, array: true, default: []
      # t.string favorite_quotes
      # # t.string blood_donations

      # t.string relationship_status, default: {}
      # t.string family_members, array: true, default: []

      # t.string address, array: true, default: []
      
      # t.string current_city
      # t.string hometown
      # t.string other_places_lived, array: true, default: []
      # t.string workplace, array: true, default: []
      # t.string professional_skills, array: true, default: []
      # t.string college, array: true, default: []
      # t.string high_school, array: true, default: []
      
      # FRIENDS
      # t.integer friends, array: true, default: []
      # t.integer photos, array: true, default: []
      # MORE
      
      t.timestamps
    end
    add_index(:users, :email_address)
    add_index(:users, :phone_number)
  end
end
