const sanityUrl = 'https://c2s2sg6g.api.sanity.io/v2022-03-07/data/query/production';
const query = '*[_type == "work"]{ _id, title, yearCreated, medium, "bodyText": pt::text(body), "imageUrl": image1.asset->url }';


// fetch(`${sanityUrl}?query=${encodeURIComponent(query)}`)

//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     // Render your data to the HTML
//     const postsDiv = document.getElementById('posts');
//     postsDiv.innerHTML = data.result
//       .map(
//         (work) => `
//           <div>
//             <h2>${work.title}</h2>
//             <h4>${work.yearCreated}</h4>
//             <h4>${work.medium}</h4>
//             <p>${work.bodyText}</p>
//             <img src="${work.imageUrl}" alt="${work.title}">
//           </div>
//         `
//       )
//       .join('');
//   })
//   .catch((error) => console.error('Error fetching Sanity data:', error));

  // console.log(`${sanityUrl}?query=${encodeURIComponent(query)}`);

  fetch(`${sanityUrl}?query=${encodeURIComponent(query)}`)

  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    // Render your data to the HTML
    const worksDiv = document.getElementById('worksGrid');
    worksDiv.innerHTML += data.result
      .map(
        (work, index) => {
          // Create a class name based on the index (e.g., one, two, three, etc.)
          const className = ['one', 'two', 'three', 'four', 'five'][index % 5]; // Repeat classes after 5 items
          return `
            <div>
              <img src="${work.imageUrl}" alt="${work.title}">
            </div>
            <div class="${className}">
              <a href="#"><img src="${work.imageUrl}" alt="${work.title}"></a>
            </div>
            <div class="text-${className}">_____${work.title}</div>
          `;
        }
      )
      .join('');
  })
  .catch((error) => console.error('Error fetching Sanity data:', error));