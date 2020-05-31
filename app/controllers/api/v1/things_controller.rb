# frozen_string_literal: true

module Api
  module V1
    #
    # ThingsController for testing purpose
    #
    class ThingsController < ApplicationController
      def index
        render json: {
          things: [
            { name: 'row 1', guid: Time.zone.now.to_i },
            { name: 'row 2', guid: Time.zone.now.to_i + 1 }
          ]
        }
      end
    end
  end
end
