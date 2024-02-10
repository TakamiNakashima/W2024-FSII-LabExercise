const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    suite: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^[A-Za-z\s]+$/.test(v)
            },
            message: props => `${props.value} is not a valid city name`
          }
    },
    zipcode: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^\d{5}-\d{4}$/.test(v)
            },
            message: props => `${props.value} is not a valid zip code (format: 12345-1234)`
          }
    },
    geo: {
        lat:{
            type: String,
            required: true
        },
        lng: {
            type: String,
            required: true 
        }
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
          validator: function(v){
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
          },
          message: props => `${props.value} is not a valid email address`
        }
    },
    address: AddressSchema,
    phone: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^\d-\d{3}-\d{3}-\d{4}$/.test(v) // 1-123-123-1234
          },
          message: props => `${props.value} is not a valid phone number (format: 1-123-123-1234)`
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(v)
            },
            message: props => `${props.value} is not a valid URL (format: http://example.com)`
          }
    },
    company: {
        name:{
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User