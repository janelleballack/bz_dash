class CreateInvoiceItems < ActiveRecord::Migration[5.2]
  def change
    create_table :invoice_items do |t|
      t.string :title
      t.text :description
      t.string :hours
      t.decimal :price
      t.decimal  :amount
    end
  end
end
