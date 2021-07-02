require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'with attributes' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:score) }
    it { should validate_inclusion_of(:score).in_array([1, 2, 3, 4, 5]) }
  end

  describe 'with associations' do
    it { should belong_to(:airline).class_name('Airline') }
  end
end