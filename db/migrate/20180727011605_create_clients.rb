class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :email
      t.string :company
      t.string :phone
      t.integer :project_id
      
      t.timestamps 
    end
  end
end
