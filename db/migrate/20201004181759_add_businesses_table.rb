# frozen_string_literal: true

#
# Adds the `Businesses` table
#
class AddBusinessesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.timestamps
      add_reference :tickets, :business, null: false # rubocop:disable Rails/NotNullColumn
    end
  end
end
