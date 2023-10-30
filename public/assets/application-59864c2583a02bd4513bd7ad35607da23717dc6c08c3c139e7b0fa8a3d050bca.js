// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

import { createConsumer } from "@rails/actioncable"

export default createConsumer();
// Import all the channels to be used by Action Cable
import "channels/search_channel";
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
import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application };
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
};
// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application);
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "channels/search_channel"
import "@hotwired/turbo-rails";
