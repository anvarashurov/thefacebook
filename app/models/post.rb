class Post < ApplicationRecord
    validates :content, presence: true

    belongs_to :author,
        class_name: "User",
        foreign_key: :author_id,
        primary_key: :id

    has_many :comments,
        class_name: "Comment",
        foreign_key: :post_id,
        primary_key: :id

    # has one or has many assoc
    has_one_attached :photo
end