# require "rails_helper"

# RSpec.describe RecordSearchJob, type: :job do
#   include ActiveJob::TestHelper

#   let(:query) { "test_query" }
#   let(:session_id) { "test_session_id" }

#   subject(:job) { described_class.perform_later(query, session_id) }

#   it "queues the job" do
#     expect { job }.to have_enqueued_job(described_class)
#                         .with(query, session_id)
#                         .on_queue("default")
#   end

#   it "executes perform" do
#     expect(Search).to receive(:find_or_create_by).with(query: query, session_id: session_id).and_call_original
#     perform_enqueued_jobs { job }
#   end

#   it "increments the count of search" do
#     user = User.create!(first_name: "Test", last_name: "User", email: "testuser@example.com")
#     search = Search.create!(query: query, session_id: session_id, count: 0, user: user)
#     perform_enqueued_jobs { job }
#     expect(search.reload.count).to eq(1)
#   end

#   it "broadcasts to search_channel" do
#     expect {
#       perform_enqueued_jobs { job }
#     }.to have_broadcasted_to("search_channel").with(hash_including(query: query, session_id: session_id))
#   end

#   after do
#     clear_enqueued_jobs
#     clear_performed_jobs
#   end
# end
