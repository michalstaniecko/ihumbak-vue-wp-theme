import SETTINGS from '../settings'

export default {
  postImageUrl(post, size) {
    let img = post.featured_media.media_details ? post.featured_media.media_details.sizes[size].source_url : SETTINGS.IMG_PLACEHOLDER
    return img
  }
}
