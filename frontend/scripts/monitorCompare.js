// Retrieve data from localStorage
let monitorsToCompare = localStorage.getItem("monitorsToCompare");

if (monitorsToCompare) {
  try {
    // Attempt to parse the retrieved data as JSON
    monitorsToCompare = JSON.parse(monitorsToCompare);
    console.log("Parsed data:", monitorsToCompare);
    const postMethods = () => {
      const postContainer = document.querySelector(".all-Product");
      // console.log("g");
      monitorsToCompare.map((postData) => {
        var postElement = document.createElement("div");

        postElement.classList.add("zip-product");
        postElement.innerHTML = `
        <p class="zip-productName">
        ${postData.productName}
      </p>
      <img
        src="${postData.image}"
        alt=""
        srcset=""
        class="zip-productImage"
      />
      <p class="zip-productPrice"> ${postData.price}</p>
      <p class="zip-productResolution"> ${postData.resolution}</p>
      <p class="zip-productDisplay"> ${postData.displaySize}</p>
      <p class="zip-productPanel"> ${postData.panelType}</p>
      <p class="zip-productShop"> ${postData.shop}</p>
      <div class="zip-productDescriptionDiv">
        <p class="zip-productDescription">
        ${postData.description}
        </p>
      </div>
        `;
        console.log(postContainer);
        if (postContainer != null) {
          postContainer.appendChild(postElement);
        }
      });
    };
    postMethods();

    // Use the parsed data (parsedCartItems) as needed
  } catch (error) {
    console.log("Error parsing JSON:", error);
    // Handle the parsing error, possibly due to invalid JSON
  }
} else {
  console.log("No data found in localStorage for 'monitorsToCompare'");
  // Handle the case where no data is present in localStorage
}
