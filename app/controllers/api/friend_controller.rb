# Do we retrieve friend requests sent via assoc?
class Api::FriendController < ApplicationController
    def create
        # friend_sender = current_user.id
        @friend = Friend.new(friend_params)
        # @friend.friend_sender = friend_sender 
        if @friend.save 
            # all good
            @user = current_user
            render "api/users/show"
        else
            render json: @friend.errors.full_messages, status: 401
        end
    end

    def destroy
        # @friend = current_user.friend_requests_sent.find_by(friend_sender: params[:id]) ||
        #           current_user.friend_requests_received.find_by(friend_receiver: params[:id])
        # @friend.destroy
        # @user = current_user
        # render 'api/users/show'
    end

    def friend_params
        params.require(:friend).permit(:friend_sender, :friend_receiver, :status)
    end
end