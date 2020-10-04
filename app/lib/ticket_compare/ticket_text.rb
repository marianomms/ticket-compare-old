# frozen_string_literal: true

module TicketCompare
  #
  # Class to obtain text
  #
  class TicketText < TicketBase
    SPACE = 'SPACE'
    LINE_BREAK = 'LINE_BREAK'
    EOL_SURE_SPACE = 'EOL_SURE_SPACE'
    private_constant :SPACE, :LINE_BREAK, :EOL_SURE_SPACE

    #
    # Returns an array with the words for the given block id
    #
    # @param [string] block_guid
    #
    # @return [Array]
    #
    def words_for(block_guid:)
      block = block_for(block_guid: block_guid)

      words = ''
      block.paragraphs.each do |paragraph|
        paragraph.words.each do |word|
          word.symbols.each do |symbol|
            words += symbol_text(symbol)
          end
        end
      end
      words.split("\n")
    end

    private

    def symbol_text(symbol)
      word = symbol.text
      case symbol&.property&.detectedBreak&.type
      when SPACE, LINE_BREAK
        word += ' '
      when EOL_SURE_SPACE
        word += "\n"
      end
      word
    end
  end
end
