class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :email
      t.string :company
      t.string :phone
      t.string :project_id
      t.timestamps null: false
    end
  end
end
