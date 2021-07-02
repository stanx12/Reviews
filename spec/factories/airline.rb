FactoryBot.define do
  factory :airline do
    name { 'Test Airline' }
    image_url { 'http://test.com/image_test' }

    trait :with_reviews do
      after(:build) do |airline|
        airline.reviews = FactoryBot.build_list(:review, 3, :with_score_2)
      end
    end
  end
end