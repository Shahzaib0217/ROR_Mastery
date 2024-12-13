class ArticlesController < ApplicationController
    def show 
        @article = Article.find(params[:id])
    end

    def index
        @articles = Article.all
    end

    def new 
    
    end

    def create 
        # Whitlisting
        @article = Article.new(params.require(:article).permit(:title, :description, :author))
        # Saving
        @article.save
        # This will get the id for theh newly created article
        redirect_to @article
    end
end