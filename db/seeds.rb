# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'John',
            last_name: 'Locke',
            email_address: 'john@gmail.com',
            password: '000000',
            gender: 'Male',
            birthday: '10/14/2019',
            bio: 'Hi there!',
            current_city: 'NY',
            workplace: 'Unemployed',
            school: 'NYU',
            hometown: 'NYC',
            rel_status: 'Single')

User.create(first_name: 'Erlich',
            last_name: 'Bachman',
            email_address: 'erl@gmail.com',
            password: '000000',
            gender: 'Male',
            birthday: '10/14/2019',
            bio: 'Hi there!',
            current_city: 'NY',
            workplace: 'Unemployed',
            school: 'NYU',
            hometown: 'NYC',
            rel_status: 'Single')