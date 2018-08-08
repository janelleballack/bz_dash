class Project < ApplicationRecord
  validates :name, presence: true
  belongs_to :client
  has_many :time_trackers
  accepts_nested_attributes_for :client, allow_destroy: true

  def completed?
    !completed_at.blank?
	end
end
