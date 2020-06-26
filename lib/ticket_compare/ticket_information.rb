# frozen_string_literal: true

module TicketCompare
  #
  # Class to obtain the information about a ticket
  #
  class TicketInformation
    attr_reader :json_path

    def initialize(json_path:)
      @json_path = json_path
    end

    def obtain
      json = JsonParser.parse(json_path: json_path)
      ticket_bounds.get(response: json)
    end

    private

    def ticket_bounds
      @ticket_bounds ||= TicketBounds.new
    end
  end
end
