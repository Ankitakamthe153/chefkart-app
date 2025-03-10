
import React, { useState } from "react";

const ChefDirectory = () => {
  const chefs = [
    {
      name: "Mr. Shankar Prasad",
      rating: 4.8,
      reviews: 586,
      city: "Gurgaon",
      area: "Sector 56",
      locality: "HUDA CGHS Housing",
      experience: 7,
      phone: "+91-95XXXXXXX",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Navin Singh Samant",
      rating: 4.4,
      reviews: 479,
      city: "Gurgaon",
      area: "Sector 50",
      locality: "Nirvana Country",
      experience: 14,
      phone: "+91-93XXXXXXX",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Shatrughan",
      rating: 4.8,
      reviews: 416,
      city: "Gurgaon",
      area: "Sector 65",
      locality: "M3M Golfestate Fairway East",
      experience: 7,
      phone: "+91-98XXXXXXX",
      img: "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Rakesh Kumar",
      rating: 4.7,
      reviews: 320,
      city: "Delhi",
      area: "South Delhi",
      locality: "Green Park",
      experience: 10,
      phone: "+91-99XXXXXXX",
      img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Suresh Chand",
      rating: 4.5,
      reviews: 200,
      city: "Mumbai",
      area: "Bandra West",
      locality: "Pali Hill",
      experience: 12,
      phone: "+91-97XXXXXXX",
      img: "https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Ms. Anita Joshi",
      rating: 4.6,
      reviews: 450,
      city: "Pune",
      area: "Koregaon Park",
      locality: "North Main Road",
      experience: 8,
      phone: "+91-96XXXXXXX",
      img: "https://img.freepik.com/premium-photo/brunette-girl-with-glasses_58409-16204.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Rajiv Malhotra",
      rating: 4.9,
      reviews: 600,
      city: "Chennai",
      area: "Adyar",
      locality: "Gandhi Nagar",
      experience: 15,
      phone: "+91-98XXXXXXX",
      img: "https://img.freepik.com/premium-photo/man-cheerful-studio-portrait-concept_53876-45003.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Ms. Sunita Verma",
      rating: 4.3,
      reviews: 300,
      city: "Hyderabad",
      area: "Gachibowli",
      locality: "Financial District",
      experience: 11,
      phone: "+91-94XXXXXXX",
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Mr. Kunal Shah",
      rating: 4.2,
      reviews: 150,
      city: "Ahmedabad",
      area: "Navrangpura",
      locality: "CG Road",
      experience: 9,
      phone: "+91-92XXXXXXX",
      img: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
    {
      name: "Ms. Priya Nair",
      rating: 4.4,
      reviews: 420,
      city: "Bangalore",
      area: "Whitefield",
      locality: "ITPL Main Road",
      experience: 13,
      phone: "+91-91XXXXXXX",
      img: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?ga=GA1.1.2003670716.1741624320&semt=ais_hybrid",
    },
  ];

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    area: "",
    locality: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredChefs = chefs.filter((chef) => {
    const matchesGlobalSearch =
      chef.name.toLowerCase().includes(search.toLowerCase()) ||
      chef.phone.includes(search);
    const matchesCity =
      filters.city === "" || chef.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchesArea =
      filters.area === "" || chef.area.toLowerCase().includes(filters.area.toLowerCase());
    const matchesLocality =
      filters.locality === "" || chef.locality.toLowerCase().includes(filters.locality.toLowerCase());

    return matchesGlobalSearch && matchesCity && matchesArea && matchesLocality;
  });

  return (
    <div className="p-4 bg-gray-100 min-h-screen mt-16">
      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Global Search..."
          className="p-2 border rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          className="p-2 border rounded shadow-sm"
          value={filters.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Search by Area"
          className="p-2 border rounded shadow-sm"
          value={filters.area}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Search by Locality"
          className="p-2 border rounded shadow-sm"
          value={filters.locality}
          onChange={handleFilterChange}
        />
      </div>

      {/* Chefs List */}.
      <h1>Trending cooks</h1>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        
        {filteredChefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          > 
              <div className="flex items-center space-x-4">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{chef.name}</h3>
                <p className="text-sm text-gray-500">
                  {chef.city}, {chef.area}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">⭐ {chef.rating} ({chef.reviews} Ratings)</p>
              <p className="text-sm">📞 {chef.phone}</p>
              <p className="text-sm">Experience: {chef.experience} years</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDirectory;
