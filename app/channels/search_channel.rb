class SearchChannel < ApplicationCable::Channel
  def subscribed
    stream_from "search_channel"
  end

  def unsubscribed
  end

  def receive(data)
    query = data["query"]
    if query.present?
      RecordSearchJob.perform_later(query)
    end
  end
end
