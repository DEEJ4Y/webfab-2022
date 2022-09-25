export default function InstagramEmbed({ url }) {
  const postId = url.split("/")[4];

  if (!postId) return "";

  return (
    <iframe
      src={`https://instagram.com/p/${postId}/embed/`}
      width="100%"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
      style={{ minHeight: "24.25rem" }}
    ></iframe>
  );
}
