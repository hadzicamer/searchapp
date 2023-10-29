import consumer from "channels/consumer"

export const subscription = consumer.subscriptions.create("SearchChannel", {
  connected() {
    console.log("Connected to search channel")
  },

  disconnected() {
    console.log("Disconnected to search channel")
  },

  received(data) {
    const { query, count } = data;
    
    // Update your UI here based on the received query and count
  }
  
});
