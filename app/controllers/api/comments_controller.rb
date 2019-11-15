class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render 'api/comments/show'
        else
            render @comment.errors.full_messages, status: 442
        end
    end
    
    def index
        @comments = Comment.all
        if @comments
            render 'api/comments/index'
        end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render 'api/comments/show'
        end
    end

    # def update
    # end

    # def destroy
    # end

    def comment_params
        params.require(:comment).permit( :content, :post_id)
    end

end

    