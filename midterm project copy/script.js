const sanityUrl = 'https://c2s2sg6g.api.sanity.io/v2022-03-07/data/query/production';
const query = '*[_type == "post"]{ _id, title, "bodyText": pt::text(body), "imageUrl": image.asset->url }';


fetch(`${sanityUrl}?query=${encodeURIComponent(query)}`)

  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {

    console.log(data);
    // Render your data to the HTML
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = data.result
      .map(
        (post) => `
          <div>
            <h2>${post.title}</h2>
            <p>${post.bodyText}</p>
            <img src="${post.imageUrl}" alt="${post.title}">
          </div>
        `
      )
      .join('');
  })
  .catch((error) => console.error('Error fetching Sanity data:', error));

  // console.log(`${sanityUrl}?query=${encodeURIComponent(query)}`);

