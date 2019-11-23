class Api::LikesController < ApplicationController
    def index
        @likes =  Like.all
        render 'api/likes/index'
    end

    def create
        # @like = current_user.likes.new(like_params)
        @like = Like.new(like_params)
        @like.liker_id = current_user.id
        
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # @like = current_user.likes.find_by(id: params[:id])
        @like = Like.find_by(id: params[:id])
        
        if @like 
            @like.destroy
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def like_params
        params.require(:like).permit(:likeable_id, :likeable_type)
    end
end