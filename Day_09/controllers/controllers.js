const data=[
  {
    "id": 1,
    "name": "Tarunsai Madhari",
    "email": "tarunsai@example.com",
    "location": "Hyderabad, India",
    "skills": ["JavaScript", "React", "Node.js"]
  },
  {
    "productId": 101,
    "productName": "Chocolate Ice Cream",
    "price": 150,
    "category": "Desserts",
    "available": true
  },
  {
    "bookId": "B456",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "yearPublished": 1988
  },
  {
    "placeId": "T005",
    "placeName": "Taj Mahal",
    "location": "Agra, Uttar Pradesh",
    "rating": 4.9,
    "image": "https://example.com/tajmahal.jpg"
  },
  {
    "rollNo": 1201,
    "name": "Ananya Sharma",
    "course": "B.Tech",
    "subjects": ["Math", "Physics", "Computer Science"],
    "attendancePercentage": 93.5
  },
  {
    "status": "success",
    "code": 200,
    "message": "Data retrieved successfully",
    "data": {
      "id": 45,
      "name": "Sample Data"
    }
  }
]

const getapi_data=(req,res)=>{
    return res.status(200).json(data)
    
};
module.exports={getapi_data}