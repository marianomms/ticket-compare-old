# frozen_string_literal: true

#
# Adds the `Markets` table
#
class AddMarketsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :markets do |t|
      t.string :name
      t.timestamps
      add_reference :tickets, :market, null: false # rubocop:disable Rails/NotNullColumn
    end
  end
end
