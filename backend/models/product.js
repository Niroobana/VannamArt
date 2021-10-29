const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Pencil sketch',
                'Oil painting',
                'Water colour painting',
                'Mandela Art',
                'Modern Art',
                "Copper Art",
                'Acrylic',
                'Abstract'
            ],
            message: 'Please select correct category for product'
        }
    },

    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [10, 'Product price cannot exceed 10 characters'],
        default: 0.0

    },
    ratings: {
        type: Number,
        default: 0
    },
    artist: {
        type: String,
        required: [true, 'Please select artist for this product'],
        enum: {
            values: [
                'Inosha',
      'Kishon',
      'Ratheena',
      'Vithun',
      'Kabilan',
      'Thuvaraka',
      "Afrose",
      'Sharmila',
      'Sarvesh',
      
      'Karuna'
            ],
            message: 'Please select correct artist for product'
        }
    },

    description: {
        type: String,
        required: [true, 'Please enter product description'],
        
    },
    images:[ {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }  
})

module.exports = mongoose.model('Product', productSchema);