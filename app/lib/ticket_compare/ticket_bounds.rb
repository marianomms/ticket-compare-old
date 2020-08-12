# frozen_string_literal: true

module TicketCompare
  #
  # Class to obtain bounds
  #
  class TicketBounds < TicketBase
    KEYS = %i[blocks paragraphs words symbols].freeze
    private_constant :KEYS

    attr_reader :reduction_factor

    def initialize(json:, reduction_factor:)
      @reduction_factor = reduction_factor
      super(json: json)
    end

    #
    # Returns a hast with the blocks information
    #
    # @param [OpenStruct] json Contains the json from the OCR
    #
    # @return [Hash]
    #
    def blocks
      @blocks ||= begin
        first_page_for.blocks.map do |block|
          box = bounding_box(block.boundingBox)
          box.guid = block.guid
          box
        end
      end
    end

    #
    # Returns a hash with the `blocks` `paragraphs` `words` `symbols`
    #
    # @param [OpenStruct] json Contains the json from the OCR
    #
    # @return [Hash]
    #
    def all
      @all ||= begin
        hash = get_elements(element: json, child: :pages, keys: KEYS)
        hash.delete(:pages)
        hash
      end
    end

    private

    def get_elements(element:, child:, keys:)
      return {} if child.nil?

      hash = init_hash(child)
      my_keys, next_key = init_keys(keys)

      element.send(child).each do |item|
        hash[child].append(bounding_box(item.boundingBox))
        deep_merge!(hash, get_elements(element: item, child: next_key, keys: my_keys))
      end

      hash
    end

    def deep_merge!(hash1, hash2)
      hash1.deep_merge!(hash2) { |_key, this_val, other_val| this_val + other_val }
    end

    def bounding_box(bounding_box)
      return if bounding_box.blank?

      bounding_box.vertices.each do |vert|
        vert.x /= reduction_factor
        vert.y /= reduction_factor
      end
      bounding_box
    end

    def init_hash(child)
      hash = {}
      hash[child] = []
      hash
    end

    def init_keys(keys)
      my_keys = keys.dup
      [my_keys, my_keys.slice!(0)]
    end
  end
end
