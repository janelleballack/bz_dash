class Client < ApplicationRecord
  belongs_to :user, optional: true
  # validates :name, presence: true
  has_many :projects
  accepts_nested_attributes_for :projects, :allow_destroy => true

  
  def fullname
    "#{first_name} #{last_name}"
  end


end
