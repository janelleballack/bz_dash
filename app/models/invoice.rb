class Invoice < ApplicationRecord
  has_many :clients
  has_many :projects
  belongs_to :user
end
