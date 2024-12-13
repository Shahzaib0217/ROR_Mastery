class ArticlesController < ApplicationController
    def show 
        @article = Article.find(params[:id])
    end

    def index
        @articles = Article.all
    end

    # To make the code work for the first time when the new form is displayed,
    #  we have to initiate an @article instance variable in the new action of the
    #  articles controller. Otherwise, the code @article.errors.any? will fail
    #  (as there is no @article instance variable available at the time).
    def new
        @article = Article.new
    end

    def edit
        @article = Article.find(params[:id])
    end

    def create
        # Whitlisting
        @article = Article.new(params.require(:article).permit(:title, :description))
        if @article.save
            flash[:notice] = "Article was created successfully."
            # This will get the id for theh newly created article
            redirect_to @article 
        else
            render 'new'
        end
    end

    def update
        @article = Article.find(params[:id])
        if @article.update(params.require(:article).permit(:title, :description))
            flash[:notice] = "Article was updated successfully."
            redirect_to @article
        else
            render 'edit'
        end
    end
end