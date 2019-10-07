class Post < ApplicationRecord
    validates :content, presence: true

    # associations
end