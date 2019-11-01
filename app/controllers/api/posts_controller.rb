class Api::PostsController < ApplicationController
    def create
        debugger
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render '/api/posts/show'
        else
            render @post.errors.full_messages, status: 442
        end
    end
    def index
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
    # def update
    # end
    def destroy
        @post = Post.find(params[:id])
        if @post 
            @post.destroy
            # @posts = Post.all
            render '/api/posts/show'
        else
            render json ['Post does not exist.']
        end
    end
    # def edit
    # end
    def post_params 
        debugger
        params.require(:post).permit(:content, :photo)
    end
end