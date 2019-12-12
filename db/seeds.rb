100.times do
  item = Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department
  )

  # 10.times  do
  #  merch = item.department.create(
  #   Title: Faker::Company.nam,
  #   body: Faker::Movies::BackToTheFuture.quote
  # )
  # end
end

puts "100 Products Seeded"