// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '../javascript/channels/search_channel.js'
import "@hotwired/turbo-rails"
require("channels")

// Then you can include your custom JavaScript files. For example:
require("./channels/search_channel.js")
;
