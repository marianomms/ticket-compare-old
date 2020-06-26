# frozen_string_literal: true

module TicketCompare
  #
  # Parse Google Vision OCR json to an object
  #
  class JsonParser
    class << self
      FULL_TEXT_ANNOTATION = 'fullTextAnnotation'
      private_constant :FULL_TEXT_ANNOTATION
      #
      # Reads the file in `json_path` and returns a `OpenStruct` object
      #
      # @param [String] json_path File path to read the json
      #
      # @return [OpenStruct]
      #
      def parse(json_path:)
        json = File.read(json_path)
        JSON.parse(json, object_class: OpenStruct)[FULL_TEXT_ANNOTATION]
      end
    end
  end
end
