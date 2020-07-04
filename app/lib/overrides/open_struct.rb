# frozen_string_literal: true

require 'ostruct'

#
# OpenStruct serialization/deserialization
#
class OpenStruct
  def as_json(options = nil)
    @table.as_json(options)
  end
end
