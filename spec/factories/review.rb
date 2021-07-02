FactoryBot.define do
  factory :review do
    title { 'Title test' }
    description { 'Some review desription test' }

    trait :with_score_1 do
      score { 1 }
    end

    trait :with_score_2 do
      score { 2 }
    end

    trait :with_score_3 do
      score { 3 }
    end

    trait :with_score_4 do
      score { 4 }
    end

    trait :with_score_5 do
      score { 5 }
    end
  end
end