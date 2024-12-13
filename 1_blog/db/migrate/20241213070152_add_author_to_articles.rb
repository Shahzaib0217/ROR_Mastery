class AddAuthorToArticles < ActiveRecord::Migration[7.1]
  def change
    # Adding new col to articles table
    add_column :articles, :author, :string 
  end
end
