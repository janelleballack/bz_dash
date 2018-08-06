class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :client_id
      t.string :name
      t.text :description
      t.string :hours
      t.datetime :deadline
      t.datetime :completed_at
      t.timestamps
    end
  end
end
