# Do we retrieve friend requests sent via assoc?

class Api::FriendsController < ApplicationController
    def create
        debugger
        # friend_sender = current_user.id
        @friend = Friend.new(friend_params)
        # @friend.friend_sender = friend_sender 
        if @friend.save 
            # all good
            render "api/users/show"
        else
            render json: @friend.errors.full_messages, status: 401
        end
    end

    def destroy
        @friend = current_user.friend_requests_sent.find_by(friend_sender: params[:id]) ||
                  current_user.friend_requests_received.find_by(friend_receiver: params[:id])
        @friend.destroy
        @user = current_user
        render 'api/users/show'
    end

    def friend_params
        debugger
        params.require(:friend).permit(:senderId, :receiverId, :status)
    end
end