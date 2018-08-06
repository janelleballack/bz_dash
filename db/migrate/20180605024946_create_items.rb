class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.string :title
      t.text :description
      t.datetime :completed_at
      t.timestamps
    end
  end
end
