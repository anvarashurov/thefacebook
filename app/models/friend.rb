class Friend < ApplicationRecord 
    validates :friend_sender, :friend_receiver, :status, presence: true

    belongs_to :friend_requests_sent,
        class_name: User,
        foreign_key: :friend_sender,
        primary_key: :id,
    
    belongs_to :friend_requests_received,
        class_name: User,
        foreign_key: :friend_received,
        primary_key: :id,

    # def find_by_ids(userId1, userId2)

    # end
end