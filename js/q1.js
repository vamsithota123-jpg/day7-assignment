async function fetchUserPostComments() {
  try {
    // 1. Fetch user
    const userRes = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userRes.json();

    // 2. Fetch posts of user
    const postsRes = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const posts = await postsRes.json();

    const firstPost = posts[0];

    // 3. Fetch comments of first post
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const comments = await commentsRes.json();

    // 4. Prepare final output
    const result = {
      userName: user.name,
      firstPostTitle: firstPost.title,
      commentCount: comments.length,
      topComment: comments[0]?.body || ""
    };

    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserPostComments();
