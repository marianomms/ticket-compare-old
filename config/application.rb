require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TicketCompare
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Rails Override pattern using zeitwerk
    # https://edgeguides.rubyonrails.org/engines.html#overriding-models-and-controllers
    overrides = [
      Rails.root.join('app/lib/overrides').to_s
    ]
    overrides.each do |folder|
      Rails.autoloaders.main.ignore(folder)
      config.to_prepare do
        Dir.glob("#{folder}/**/*.rb").each do |override|
          load override
        end
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
