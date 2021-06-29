# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
airlines = Airline.create([
  {
    name: 'United Airlines',
    image_url: 'https://open-flights.s3.amazonaws.com/United-Airlines.png'
  },
  {
    name: 'Southwest Airlines',
    image_url: 'https://open-flights.s3.amazonaws.com/Southwest-Airlines.png'
  },
  {
    name: 'Delta Airlines',
    image_url: 'https://open-flights.s3.amazonaws.com/Delta.png'
  },
  {
    name: 'JetBlue Airlines',
    image_url: 'https://open-flights.s3.amazonaws.com/JetBlue.png'
  },
  {
    name: 'American Airlines',
    image_url: 'https://open-flights.s3.amazonaws.com/American-Airlines.png'
  }
])

Review.create([
  {
    title: 'Excelent Service',
    description: 'It was a great and lovely experience',
    score: 5,
    airline: airlines.first
  },
  {
    title: 'Bad Arline',
    description: 'Bad experience',
    score: 1,
    airline: airlines.first
  }
])
