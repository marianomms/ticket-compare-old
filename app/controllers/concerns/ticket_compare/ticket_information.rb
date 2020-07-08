# frozen_string_literal: true

module TicketCompare
  #
  # Controller concern to add common method to obtain ticket information
  #
  module TicketInformation
    extend ActiveSupport::Concern

    TICKET_NAME = 'ticket_partial_vertical'
    # TICKET_NAME = 'ticket_partial_vertical.jpg'
    TICKET_IMAGE_PATH = "app/assets/images/tickets/#{TICKET_NAME}.jpg"
    TICKET_JSON_PATH = "app/assets/json/tickets/#{TICKET_NAME}.json"

    private

    def json
      @json ||= JsonParser.parse(json_path: TICKET_JSON_PATH)
    end
  end
end
