require 'rails_helper'

RSpec.describe Airline, type: :model do
  describe 'with attributes' do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
    it { should allow_value('https://foo.com').for(:image_url) }
  end

  describe 'with associations' do
    it { should have_many(:reviews).class_name('Review') }
  end

  describe 'with callbacks' do
    describe 'slugify' do
      it 'should set slug based on the Airline name' do
        airline = FactoryBot.build(:airline)

        expect(airline.slug).to be_nil

        airline.save

        expect(airline.name).to eq('Test Airline')
        expect(airline.slug).to eq('test-airline')
      end
    end
  end

  describe 'with instance methods' do
    describe 'avg_score' do
      context 'with no reviews' do
        it 'should return 0 as the avg score' do
          airline = FactoryBot.create(:airline)

          expect(airline.reviews).to be_empty
          expect(airline.avg_score).to eq(0.0)
        end
      end
      context 'with associated reviews' do
        it 'should return the avg score' do
          airline = FactoryBot.create(:airline, :with_reviews)
  
          expect(airline.reviews.size).to eq(3)
          expect(airline.avg_score).to eq(2.0)
        end
      end
    end
  end
end