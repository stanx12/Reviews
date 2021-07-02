class Review < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :score, presence: true,
                    inclusion: { in: 1..5 }

  belongs_to :airline
end
