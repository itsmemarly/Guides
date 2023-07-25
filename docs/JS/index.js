const categoriesData = [
    // Git Starter Guide
    { category: "tech", title: "Git Starter Guide", description: "Want to get started with Git? Let's learn together!", imageUrl: "./Images/Git_Starter_Guide.png", url: "./Guides/GitStarterGuide.html" },

    // Git Guide
    { category: "tech", title: "The Ultimate Git Guide", description: "The ultimate Git guide is a guide that will help you get started with Git commands.", imageUrl: "./Images/The_ultimate_Git_Guide.png", url: "./Guides/TheUltimateGitGuide.html" },
    
    // Python Guide
    { category: "tech", title: "The Ultimate Python Guide", description: "The ultimate Python guide is a guide that will help you get started with Python.", imageUrl: "./Images/The_ultimate_Python_Guide.png", url: "./Guides/TheUltimatePythonGuide.html" },

  ];
  
  // Function to create category cards
  function createCategoryCards(data) 
  {
    const categoryCardsContainer = document.getElementById("categoryCards");
    categoryCardsContainer.innerHTML = "";
  
    data.forEach((item) => 
    {
      const cardHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <a href="${item.url}" class="btn btn-dark">Read here</a>
            </div>
          </div>
        </div>
      `;
      categoryCardsContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
}

  // Filter category cards based on user input
  function filterCategories(inputValue) 
  {
    const filteredData = categoriesData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    createCategoryCards(filteredData);
  }
  
  // Add event listener to search bar
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", (event) => 
  {
    const inputValue = event.target.value;
    filterCategories(inputValue);
  });
  
  // Initial card creation on page load
  createCategoryCards(categoriesData);
  
  // Add event listeners to category buttons
  const categoryButtons = document.querySelectorAll(".footer-category-button");
  categoryButtons.forEach((button) => 
  {
    button.addEventListener("click", () => 
    {
      const category = button.dataset.category;
      if (category === "") 
      {
        // Show all categories
        createCategoryCards(categoriesData);
      }
       else 
      {
        // Filter and show cards for the selected category
        const filteredData = categoriesData.filter((item) => item.category === category);
        createCategoryCards(filteredData);
      }
    });
  });