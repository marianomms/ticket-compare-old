# frozen_string_literal: true

#
# Adds the `Tickets` table
#
class AddTicketsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.binary :image, null: false
      t.timestamps
    end
  end
end
