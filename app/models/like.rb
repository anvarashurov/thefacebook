class Like < ApplicationRecord
    validates :liker_id, :likeable_id, :likeable_type, presence: true

    belongs_to :likeable, polymorphic: true
    # liker
    belongs_to :user,
        class_name: 'User',
        foreign_key: :liker_id,
        primary_key: :id
end