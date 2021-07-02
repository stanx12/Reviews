require 'rails_helper'

RSpec.describe '/api/v1/reviews', type: :request do
  let(:json) { JSON.parse(response.body) }
  before(:each) do
    @airline = FactoryBot.create(:airline)
  end

  describe 'POST /api/v1/review' do
    it 'should return the recently created review' do
      params = {
        data: {
          title: 'Not great experience',
          description: "It wasn't the best experience",
          score: 2,
          airline_id: @airline.id
        }
      }

      post '/api/v1/reviews', params: params

      expect(response).to have_http_status(200)
      expect(json['data']['title']).to eq('Not great experience')
      expect(json['data']['description']).to eq("It wasn't the best experience")
      expect(json['data']['score']).to eq(2)
    end

    it 'should return 422 status code error, if not valid params are passed in' do
      params = {
        data: {
          title: 'Not great experience',
          description: "It wasn't the best experience",
          score: 15
        }
      }

      post '/api/v1/reviews', params: params
      expect(response).to have_http_status(422)
      expect(json['errors'].size).to eq(2)
      expect(json['errors'][0]['detail']).to eq('score')
      expect(json['errors'][0]['message']).to eq(['is not included in the list'])
      expect(json['errors'][1]['detail']).to eq('airline')
      expect(json['errors'][1]['message']).to eq(['must exist'])
    end

    it 'should return 500 error if we do not pass valid params' do
      params = {
        data: {}
      }

      post '/api/v1/reviews', params: params

      expect(response).to have_http_status(500)
      expect(json['errors'].size).to eq(1)
      expect(json['errors'][0]['code']).to eq(500)
      expect(json['errors'][0]['resource']).to eq('/api/v1/reviews')
      expect(json['errors'][0]['message']).to_not be_empty
    end
  end

  describe 'DELETE /api/v1/review/:id' do
    it 'should return 204 status code if we successfully delete the record' do
      @review = FactoryBot.create(:review, :with_score_3, airline_id: @airline.id)

      delete "/api/v1/reviews/#{@review.id}"

      expect(response).to have_http_status(204)
    end

    it 'should return 404 status code error if we try to delete an unexisting review' do
      delete '/api/v1/reviews/123456789'

      expect(response).to have_http_status(404)
      expect(json['errors'].size).to eq(1)
      expect(json['errors'][0]['message']).to eq('Not Found')
      expect(json['errors'][0]['resource']).to eq('/api/v1/reviews/123456789')
    end
  end
end