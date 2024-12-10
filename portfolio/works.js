const sanityUrl = 'https://c2s2sg6g.api.sanity.io/v2022-03-07/data/query/production';
const query = '*[_type == "work"] | order(order asc) {title, order, slug, "imageUrl": image1.asset->url }';

  fetch(`${sanityUrl}?query=${encodeURIComponent(query)}`)

  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    // Render data to the HTML
    const worksDiv = document.getElementById('worksGrid');
    worksDiv.innerHTML += data.result
      .map(
        (work, index) => {
          // Create a class name based on the index (e.g., one, two, three, etc.)
          const className = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][index % 12];

          // Check if the index is odd
          const isOdd = index % 2 !== 0;

          const textContent = `
            <div class="text-${className}" 
              style="text-align: ${isOdd ? 'right' : 'left'};">
              ${isOdd ? work.title + '_____' : '_____' + work.title}
            </div>
          `;
          return `
            <div class="${className}">
              <a href="workPage.html?slug=${work.slug.current}">
                <img src="${work.imageUrl}" alt="${work.title}">
              </a>
            </div>
            ${textContent}
          `;
        }
      )
      .join('');
  })
  .catch((error) => console.error('Error fetching Sanity data:', error));