class Client < ApplicationRecord
  has_many :projects
  belongs_to :user, optional: true

  
  def fullname
    "#{first_name} #{last_name}"
  end


end
