# frozen_string_literal: true

require 'mini_magick'

module Api
  module V1
    #
    # Controller for tickets
    #
    class TicketsController < ApplicationController
      TICKET_NAME = 'aldi_ticket_vertical_1.jpg'
      # TICKET_NAME = 'ticket_partial_vertical.jpg'
      TICKET_IMAGE_PATH = "app/assets/images/tickets/#{TICKET_NAME}"
      TICKET_JSON_PATH = "app/assets/json/tickets/#{TICKET_NAME}"

      MAX_HEIGHT = nil
      MAX_WIDTH = 800

      def show
        render json: {
          width: ticket_image.dimensions[0],
          height: ticket_image.dimensions[1],
          url: image_api_v1_ticket_path
        }
      end

      def image
        send_data(prepare_and_read_ticket,
                  type: 'image/jpg',
                  disposition: 'inline')
      end

      private

      def ticket_image
        @ticket_image ||= MiniMagick::Image.new(TICKET_IMAGE_PATH)
      end

      def prepare_and_read_ticket
        ImageProcessing::MiniMagick
          .source(ticket_image)
          .quality(100)
          .resize_to_limit(MAX_WIDTH, MAX_HEIGHT)
          .call
          .read
      end
    end
  end
end
