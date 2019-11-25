class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render '/api/posts/show'
        else
            render @post.errors.full_messages, status: 442
        end
    end
    def index
        # TODO: Figure out the usage of "includes"
        @posts = Post.all
        if @posts
            render '/api/posts/index'
        end
    end
   
    def show
        @post = Post.find(params[:id])
        if @post
            render '/api/posts/show'
        else
            render ['Post does not exist'], status: 404
        end
    end
    
    def update
        @post = Post.find(params[:id])
        if @post.update_attributes(post_params)
            render '/api/posts/show'
        else 
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post 
            @post.destroy
            render '/api/posts/show'
        else
            render json ['Post does not exist.']
        end
    end

    def post_params 
        params.require(:post).permit(:content, :receiver_id, :photo)
    end
end