class ChangeColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :friends, :status, :string, :default=>'PENDING'
  end
end
