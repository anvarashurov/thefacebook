class Api::LikesController < ApplicationController
    def index
        @likes =  Like.all
        render 'api/likes/index'
    end

    def create
        @like = current_user.likes.new(like_params)
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = current_user.likes.find_by(id: params[:id])
        @like.destroy
        render 'api/likes/show'
    end

    def like_params
        params.require(:like).permit(:likeable_id, :likeable_type)
    end
end