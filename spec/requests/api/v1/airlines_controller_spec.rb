require 'rails_helper'

RSpec.describe '/api/v1/airlines', type: :request do
  let(:json) { JSON.parse(response.body) }
  before(:each) do
    @airline = FactoryBot.create(:airline)
    @airline_with_reviews = FactoryBot.create(:airline, :with_reviews, name: 'Test Airline with reviews')
  end

  describe 'GET /api/v1/airlines' do
    it 'should return a successful response' do
      get '/api/v1/airlines'
      airline_with_comments = json['data'][1]

      expect(json['data'].length).to eq(2)
      expect(airline_with_comments['name']).to eq('Test Airline with reviews')
      expect(airline_with_comments['slug']).to eq('test-airline-with-reviews')
      expect(airline_with_comments['score']).to eq(2.0)
      expect(response).to have_http_status(200)
    end

    it 'should return and array of reviews if we pass the params include_reviews' do
      get '/api/v1/airlines?include_reviews=true'
      airline_with_comments = json['data'][1]

      expect(json['data'].length).to eq(2)
      expect(airline_with_comments['name']).to eq('Test Airline with reviews')
      expect(airline_with_comments['slug']).to eq('test-airline-with-reviews')
      expect(airline_with_comments['score']).to eq(2.0)
      expect(airline_with_comments['reviews'].length).to eq(3)
      expect(response).to have_http_status(200)
    end
  end
  
  describe 'SHOW /api/v1/airline/:slug' do
    it 'should return the correct airline with status code 200' do
      get "/api/v1/airlines/#{@airline.slug}"

      expect(response).to have_http_status(200)
      expect(json['data']['name']).to eq('Test Airline')
      expect(json['data']['slug']).to eq('test-airline')
      expect(json['data']['score']).to eq(0)
    end

    it 'should return the correct airline with reviews and status code 200' do
      get "/api/v1/airlines/#{@airline_with_reviews.slug}?include_reviews=true"

      expect(response).to have_http_status(200)
      expect(json['data']['name']).to eq('Test Airline with reviews')
      expect(json['data']['slug']).to eq('test-airline-with-reviews')
      expect(json['data']['score']).to eq(2.0)
      expect(json['data']['reviews'].length).to eq(3)
    end

    it 'should return 403 if the airline does not exists' do
      
    end
  end
end