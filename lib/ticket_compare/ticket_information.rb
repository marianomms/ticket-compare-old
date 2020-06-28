# frozen_string_literal: true

module TicketCompare
  #
  # Class to obtain the information about a ticket
  #
  class TicketInformation
    attr_reader :json_path, :reduction_factor

    def initialize(json_path:, reduction_factor:)
      @json_path = json_path
      @reduction_factor = reduction_factor
    end

    def obtain
      json = JsonParser.parse(json_path: json_path)
      ticket_bounds.get(response: json)
    end

    private

    def ticket_bounds
      @ticket_bounds ||= TicketBounds.new(reduction_factor: reduction_factor)
    end
  end
end
