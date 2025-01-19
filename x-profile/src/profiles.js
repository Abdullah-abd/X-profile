// src/profiles.js
let profiles = [
  {
    id: 1,
    name: "John Doe",
    photo:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp",
    description: "Software Engineer from San Francisco.",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    contact: "john.doe@email.com",
    interest: "Technology, Reading, Cycling",
    age: 28,
    gender: "male",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo:
      "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=",
    description: "Data Scientist from New York.",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    contact: "jane.smith@email.com",
    interest: "Data Science, Traveling, Cooking",
    age: 32,
    gender: "male",
  },
  {
    id: 3,
    name: "Mechael",
    photo:
      "https://media.istockphoto.com/id/1169329835/photo/he-loves-his-job.jpg?s=1024x1024&w=is&k=20&c=7wfr103TtLmQ-hIUkjGO5RUab7aIk4pjP9ihD_21QPI=",
    description: "Data Scientist from New York.",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    contact: "mechael@email.com",
    interest: "AI, Music, Hiking",
    age: 29,
    gender: "male",
  },
  {
    id: 4,
    name: "Sarah Lee",
    photo:
      "https://media.istockphoto.com/id/1172727624/photo/young-handsome-businessman-in-a-modern-office.jpg?s=1024x1024&w=is&k=20&c=yi1WWH3Zu6gvI02AxqEelytYToQ_na6GB1wrDczlMMg=",    description: "UX Designer from Toronto.",
    address: "123 Main St, New York, NY 10001",
    contact: "sarah.lee@email.com",
    interest: "Design, Art, Yoga",
    age: 27,
    gender: "female",
  },
  {
    id: 5,
    name: "Michael Scott",
    photo:
      "https://media.istockphoto.com/id/131543811/photo/successful-young-businessman.jpg?s=1024x1024&w=is&k=20&c=M5XE5Vnwst5KOzZqUandAEuVE7Eyc7cMLk5DDe8LhWI=",    description: "Sales Manager from Chicago.",
    address: "123 Main St, New York, NY 10001",
    contact: "michael.scott@email.com",
    interest: "Sales, Football, Mentoring",
    age: 34,
    gender: "male",
  },
  {
    id: 6,
    name: "Olivia Brown",
    photo:
      "https://media.istockphoto.com/id/145129239/photo/close-up-of-a-businessman-smiling.jpg?s=1024x1024&w=is&k=20&c=u_7MSvs1CJ1Mq9yC69HC8hQ5k6XTU6J_7oH-LA-97rU=",    description: "Product Manager from San Francisco.",
    address: "123 Main St, New York, NY 10001",
    contact: "olivia.brown@email.com",
    interest: "Technology, Music, Hiking",
    age: 31,
    gender: "male",
  },
  {
    id: 7,
    name: "Ethan Turner",
    photo:
      "https://media.istockphoto.com/id/171281297/photo/attending-a-business-workshop.jpg?s=1024x1024&w=is&k=20&c=7v6rySEFnvssdPr4LQtd3NxdI2K2OEFEQGI4Vur7D_w=",    description: "Marketing Director from Los Angeles.",
    address: "456 Rue de Paris, Paris, France 75001",
    contact: "ethan.turner@email.com",
    interest: "Marketing, Photography, Traveling",
    age: 40,
    gender: "male",
  },
  {
    id: 8,
    name: "Sophia Williams",
    photo:
      "https://media.istockphoto.com/id/175815522/photo/happy-executive-standing-with-team-in-background.jpg?s=1024x1024&w=is&k=20&c=j50op6LDAA11SgsvvbtBBtpbG3yEuFLhXDyW02ntJl4=",    description: "Graphic Designer from Boston.",
    address: "456 Rue de Paris, Paris, France 75001",
    contact: "sophia.williams@email.com",
    interest: "Design, Fashion, Writing",
    age: 26,
    gender: "female",
  },
  {
    id: 9,
    name: "David Johnson",
    photo:
      "https://media.istockphoto.com/id/183410974/photo/leader-with-his-team-in-background.jpg?s=1024x1024&w=is&k=20&c=koMgir808Nc_1YR3iMuacLe-7iBbNJOCFuNeir_tBbU=",
    address: "456 Rue de Paris, Paris, France 75001",
    contact: "david.johnson@email.com",
    interest: "Analytics, Reading, Traveling",
    age: 35,
    gender: "male",
  },
  {
    id: 10,
    name: "Emma Davis",
    photo:
      "https://media.istockphoto.com/id/183410974/photo/leader-with-his-team-in-background.jpg?s=1024x1024&w=is&k=20&c=koMgir808Nc_1YR3iMuacLe-7iBbNJOCFuNeir_tBbU=",    description: "HR Specialist from Dallas.",
    address: "789 George St, Sydney, NSW 2000, Australia",
    contact: "emma.davis@email.com",
    interest: "People Management, Reading, Traveling",
    age: 29,
    gender: "male",
  },
  {
    id: 11,
    name: "James Green",
    photo:
      "https://media.istockphoto.com/id/107692639/photo/confident-smart-businessman-with-colleague.jpg?s=1024x1024&w=is&k=20&c=d-Fc2NKXairllVeUQalqu4GkNpj113Q_ozQwloNeUVQ=",    description: "Financial Analyst from Miami.",
    address: "789 George St, Sydney, NSW 2000, Australia",
    contact: "james.green@email.com",
    interest: "Finance, Sports, Traveling",
    age: 38,
    gender: "male",
  },
  {
    id: 12,
    name: "Lucas White",
    photo:
      "https://media.istockphoto.com/id/107692639/photo/confident-smart-businessman-with-colleague.jpg?s=1024x1024&w=is&k=20&c=d-Fc2NKXairllVeUQalqu4GkNpj113Q_ozQwloNeUVQ=",    description: "Software Developer from Phoenix.",
    address: "789 George St, Sydney, NSW 2000, Australia",
    contact: "lucas.white@email.com",
    interest: "Coding, Hiking, Traveling",
    age: 30,
    gender: "male",
  },
  {
    id: 13,
    name: "Ava Martinez",
    photo:
      "https://media.istockphoto.com/id/107692641/photo/handsome-businessman-with-colleagues.jpg?s=1024x1024&w=is&k=20&c=fMik_yjVZs-_Yx9F26j50I_MvuuWDsET242NaIEd1wo=",    description: "Project Manager from Austin.",
    address: "789 George St, Sydney, NSW 2000, Australia",
    contact: "ava.martinez@email.com",
    interest: "Project Management, Yoga, Music",
    age: 33,
    gender: "male",
  },
  {
    id: 14,
    name: "Oliver Lewis",
    photo:
      "https://media.istockphoto.com/id/107692639/photo/confident-smart-businessman-with-colleague.jpg?s=1024x1024&w=is&k=20&c=d-Fc2NKXairllVeUQalqu4GkNpj113Q_ozQwloNeUVQ=",   description: "Web Developer from Atlanta.",
    address: "101 Shibuya, Tokyo 150-0002, Japan",
    contact: "oliver.lewis@email.com",
    interest: "Web Development, Football, Reading",
    age: 28,
    gender: "male",
  },
  {
    id: 15,
    name: "Mia Taylor",
    photo:
      "https://media.istockphoto.com/id/107692641/photo/handsome-businessman-with-colleagues.jpg?s=1024x1024&w=is&k=20&c=fMik_yjVZs-_Yx9F26j50I_MvuuWDsET242NaIEd1wo=",    description: "Software Architect from Denver.",
    address: "101 Shibuya, Tokyo 150-0002, Japan",
    contact: "mia.taylor@email.com",
    interest: "Software Architecture, Music, Cycling",
    age: 36,
    gender: "male",
  },
  {
    id: 16,
    name: "Daniel King",
    photo:
      "https://media.istockphoto.com/id/183410974/photo/leader-with-his-team-in-background.jpg?s=1024x1024&w=is&k=20&c=koMgir808Nc_1YR3iMuacLe-7iBbNJOCFuNeir_tBbU=",    description: "Business Development Manager from Portland.",
    address: "101 Shibuya, Tokyo 150-0002, Japan",
    contact: "daniel.king@email.com",
    interest: "Business Development, Music, Traveling",
    age: 39,
    gender: "male",
  },
];


// Function to delete a profile by ID
export const deleteProfile = (id) => {
  profiles = profiles.filter((profile) => profile.id !== id);
};

// Function to add a new profile
export const addProfile = (newProfile) => {
  profiles.push(newProfile);
};

// Function to update an existing profile
export const updateProfile = (id, updatedProfile) => {
  const index = profiles.findIndex((profile) => profile.id === id);
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...updatedProfile };
  }
};

export default profiles;
