class Bookmark < ApplicationRecord
  belongs_to :list
  belongs_to :movie
  validates :comment, length: { minimum: 6 }
  validates :movie_id, presence: true, uniqueness: {scope: :list_id, message: "is already in the list"}
end
