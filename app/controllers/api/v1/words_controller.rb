# frozen_string_literal: true

module Api
  module V1
    #
    # Controller for ticket word
    #
    class WordsController < ApplicationController
      include TicketCompare::TicketInformation

      def index
        result = {
          market: market,
          lines: lines
        }
        render json: result
      end

      private

      def market
        text = ticket_text.words_for(block_guid: market_block_id)
        TicketCompare::Utils::Sanitize.remove_all_spaces(text.join(' '))
      end

      def lines
        products = ticket_text.words_for(block_guid: products_block_id)
        prices = ticket_text.words_for(block_guid: prices_block_id)

        products.map.with_index do |value, index|
          {
            family: '',
            product: TicketCompare::Utils::Sanitize.sanitize(value),
            price: TicketCompare::Utils::Sanitize.to_big_decimal(prices[index])
          }
        end
      end

      def ticket_text
        @ticket_text ||= TicketCompare::TicketText.new(json: json)
      end

      def market_block_id
        params[:market]
      end

      def products_block_id
        params[:products]
      end

      def prices_block_id
        params[:prices]
      end
    end
  end
end
