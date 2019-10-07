class PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render '/api/posts'
        else
            render ['Unable to create post'], status: 401
        end
    end
    def index
        @posts = Post.all
        if @posts
            render '/api/posts'
        end
    end
    def show
        @post = Post.find(params[:id])
        if @post
            render '/api/posts/'
        else
            render ["Post does not exist"], status: 404
        end
    end
    # def update
    # end
    def destroy
        @post = Post.find(params[:id])
        if @post 
            @post.destroy
        end
    end
    # def edit
    # end
    def post_params 
        params.require(:user).permit(:content)
    end
end