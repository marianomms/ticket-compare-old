# frozen_string_literal: true

module Api
  module V1
    #
    # Controller for ticket word
    #
    class WordsController < ApplicationController
      include TicketCompare::TicketInformation

      def index
        render json: ticket_text.words_for(block_guid: params[:block_id])
      end

      private

      def ticket_text
        @ticket_text ||= TicketCompare::TicketText.new(json: json)
      end
    end
  end
end
