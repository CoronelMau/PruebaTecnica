//Function to fetch comments
async function fetchComments() {
  //Try-Catch fetch
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
  } catch (err) {
    console.log(err);
  }
}

//Function to show posts per user
async function postsPerUser() {
  //Get posts
  const posts = await fetchComments();
  const postsPerUser = {};

  //Add posts and count
  for (const post of posts) {
    postsPerUser[post.userId]
      ? postsPerUser[post.userId]++
      : (postsPerUser[post.userId] = 1);
  }

  console.log(postsPerUser);
}

//Function to show longuest titles with id
async function longuestTitles() {
  //Get posts
  const posts = await fetchComments();
  const titlesWithId = [];

  //Add posts and post id
  for (const [id, post] of posts.entries()) {
    titlesWithId.push({
      id,
      title: post.title,
    });
  }

  //Sort posts
  titlesWithId.sort((a, b) => b.title.length - a.title.length);

  //Get only the 3 longuest posts
  const longuestTitles = titlesWithId.slice(0, 3);

  console.log(longuestTitles);
}

//Call functions
postsPerUser();
longuestTitles();
