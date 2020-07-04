# frozen_string_literal: true

require 'mini_magick'

module Api
  module V1
    #
    # Controller for tickets
    #
    class TicketsController < ApplicationController
      TICKET_NAME = 'ticket_partial_vertical'
      # TICKET_NAME = 'ticket_partial_vertical.jpg'
      TICKET_IMAGE_PATH = "app/assets/images/tickets/#{TICKET_NAME}.jpg"
      TICKET_JSON_PATH = "app/assets/json/tickets/#{TICKET_NAME}.json"

      MAX_HEIGHT = nil
      MAX_WIDTH = 800

      def show
        render json: {
          ticket: {
            bounds: ticket_blocks,
            height: prepared_ticket_image.height,
            url: image_api_v1_ticket_path,
            width: prepared_ticket_image.width
          }
        }
      end

      def image
        send_data(prepare_ticket.read,
                  type: 'image/jpg',
                  disposition: 'inline')
      end

      private

      def ticket_blocks
        info = TicketCompare::TicketInformation.new(json_path: TICKET_JSON_PATH, reduction_factor: reduction_factor)
        info.obtain_blocks
      end

      #
      # Return reduction factor applied in the image from the original size
      #
      def reduction_factor
        ticket_image.width.fdiv(prepared_ticket_image.width)
      end

      def ticket_image
        @ticket_image ||= MiniMagick::Image.new(TICKET_IMAGE_PATH)
      end

      def prepared_ticket_image
        @prepared_ticket_image ||= MiniMagick::Image.new(prepare_ticket.path)
      end

      def prepare_ticket
        ImageProcessing::MiniMagick
          .source(ticket_image)
          .quality(100)
          .resize_to_limit(MAX_WIDTH, MAX_HEIGHT)
          .call
      end
    end
  end
end
