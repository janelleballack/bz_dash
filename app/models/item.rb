class Item < ApplicationRecord
  belongs_to :user
  has_many :list_items
  has_many :lists, through: :list_items
  
  def completed?
    !completed_at.blank?
	end
end
