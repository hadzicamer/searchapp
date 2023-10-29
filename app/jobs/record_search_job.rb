class RecordSearchJob < ApplicationJob
  queue_as :default

  def perform(query, session_id)
    search = Search.find_or_create_by(query: query, session_id: session_id)

    search.count ||= 0
    search.count += 1
    search.save

    ActionCable.server.broadcast "search_channel", { query: query, count: search.count, session_id: session_id }
  end
end
