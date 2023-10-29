require "rails_helper"

RSpec.describe ArticlesController, type: :controller do
  let!(:articles) { create_list(:article, 5) } # Create 5 articles

  describe "GET #index" do
    context "when no query is present" do
      it "responds successfully" do
        get :index
        expect(response).to be_successful
      end

      it "returns all articles" do
        get :index, format: :json
        expect(JSON.parse(response.body).size).to eq(5)
      end

      it "does not create a new RecordSearchJob" do
        expect {
          get :index
        }.not_to have_enqueued_job(RecordSearchJob)
      end
    end

    context "when a query is present" do
      let(:query) { articles.first.title.split.first }

      it "responds successfully" do
        get :index, params: { query: query }
        expect(response).to be_successful
      end

      it "returns articles that match the query" do
        get :index, params: { query: query }, format: :json
        expect(JSON.parse(response.body)).to all(include("title" => a_string_including(query)))
      end

      it "creates a new RecordSearchJob" do
        expect {
          get :index, params: { query: query }
        }.to have_enqueued_job(RecordSearchJob).with(query, session.id.to_s)
      end
    end
  end
end
