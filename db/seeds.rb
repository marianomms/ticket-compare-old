# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Market.create(name: 'Ahorra Más')
Market.create(name: 'Aldi')
Market.create(name: 'Mercadona')
Market.create(name: '+Hogar')

# Demo seed
Business.create(name: 'Demo Business 1')
