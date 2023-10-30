class ArticlesController < ApplicationController
  MIN_QUERY_LEN = 3

  def index
    @articles = Article.all
    query = params[:query]
    if query.present? && query.length >= MIN_QUERY_LEN
      @results = @articles.where("title LIKE ?", "%#{query}%")

      # RecordSearchJob.perform_later(query, session.id.to_s)

      render json: @results and return
    end

    respond_to do |format|
      format.html
      format.json { render json: @articles }
    end
  end
end
