class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        # debugger
        @post.author_id = current_user.id
        #debugger
        if @post.save
            #debugger
            #user = User.find(current_user.id)
            #user.authored_posts << @post.id
            # debugger
            #user.save
            render '/api/posts/show'
        else
            render ['Unable to create post'], status: 401
        end
    end
    def index
        # debugger
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
            render ["Post does not exist"], status: 404
        end
    end
    # def update
    # end
    def destroy
        # debugger
        @post = Post.find(params[:id])
        if @post 
            @post.destroy
            # @posts = Post.all
            render '/api/posts/show'
        else
            render json ["Post does not exist."]
        end
    end
    # def edit
    # end
    def post_params 
        params.require(:post).permit(:content)
    end
end