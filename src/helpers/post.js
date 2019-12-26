export default {
  postImageUrl(post, size) {
    let img = post.featured_media.media_details ? post.featured_media.media_details.sizes[size].source_url : this.imgPlaceholder
    return img
  }
}
