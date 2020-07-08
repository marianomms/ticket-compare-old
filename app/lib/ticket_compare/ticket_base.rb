# frozen_string_literal: true

module TicketCompare
  #
  # Base Class to obtain ticket info
  #
  class TicketBase
    attr_reader :json

    def initialize(json:)
      @json = json
    end

    private

    def first_page_for
      json.pages.first
    end

    def block_for(block_guid:)
      first_page_for.blocks.find { |b| b.guid == block_guid }
    end
  end
end
