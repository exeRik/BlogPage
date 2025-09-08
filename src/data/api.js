// import { useState, useEffect } from "react";
// import { slugify } from "../utils/slugify";

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((data) => {
//         // Add slug for each blog
//         const blogsWithSlug = data.map((blog) => ({
//           ...blog,
//           slug: slugify(blog.title),
//         }));
//         setBlogs(blogsWithSlug);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading blogs...</p>;

//   return (
//     <div>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
