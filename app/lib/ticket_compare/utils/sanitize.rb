# frozen_string_literal: true

module TicketCompare
  module Utils
    #
    # Module with method for sanitize strings
    #
    module Sanitize
      class << self
        #
        # Remove all spaces, included spaces between words, in the given text
        #
        # @param [string] text to sanitize
        #
        # @return [string] result sanitized
        #
        def remove_all_spaces(text)
          text.remove(' ')
        end

        #
        # Converts from string to BigDecimal
        #
        # @param [string] text to be converted
        #
        # @return [BigDecimal] value converted
        #
        def to_big_decimal(text)
          value = text.tr(',', '.')
          BigDecimal(value)
        end

        def sanitize(text)
          text.strip
        end
      end
    end
  end
end
