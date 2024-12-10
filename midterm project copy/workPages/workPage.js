// Get the `slug` value from the query parameter
const params = new URLSearchParams(window.location.search);
const workSlug = params.get('slug');

// Fetch the work data based on the `slug`
const sanityUrl = 'https://c2s2sg6g.api.sanity.io/v2022-03-07/data/query/production';
const query = `*[_type == "work" && slug.current == "${workSlug}"] {
  title,
  yearCreated,
  medium,
  "description": pt::text(body),
  "imageUrl": image1.asset->url
}`;

fetch(`${sanityUrl}?query=${encodeURIComponent(query)}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.result.length > 0) {
      const work = data.result[0];
      document.getElementById('workTitle').innerText = work.title;
      document.getElementById('workYear').innerText = work.yearCreated;
      document.getElementById('workMedium').innerText = work.medium;
      document.getElementById('workDescription').innerText = work.description;
      document.getElementById('workImage').src = work.imageUrl;
    } else {
      document.getElementById('workDetails').innerText = 'Work not found!';
    }
  })
  .catch((error) => console.error('Error fetching work data:', error));
