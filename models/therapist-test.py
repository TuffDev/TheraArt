import therapist
adam = therapist.add_therapist("Adam", 27.2046, 77.4977, "test 1213", "Pretty decent therapist", "https://noimage.com", 4.5)

print(therapist.get_therapist(adam))

print(therapist.get_in_range(27, 77, 2))