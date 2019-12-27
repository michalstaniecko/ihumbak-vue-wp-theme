import axios from 'axios'
import SETTINGS from './../settings'


export default class API {
  static getCategories() {
    return new Promise((resolve, reject) => {
      axios
        .get(SETTINGS.API_BASE_PATH + 'categories?hide_empty=true')
        .then(response => {
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

  static getPosts(limit = 10) {
    return new Promise((resolve, reject) => {
      axios
        .get(SETTINGS.API_BASE_PATH + 'posts?per_page=' + limit)
        .then(response => {
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })

  }

  static getPostById(postId, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'posts/' + postId)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  }

  static getPostBySlug(postSlug, type) {
    return new Promise((resolve, reject) => {
      axios
        .get(SETTINGS.API_BASE_PATH + type + '/?slug=' + postSlug)
        .then(response => {
          resolve(response.data[0])
        })
        .catch(e => {
          reject(e)
        })
    })

  }

  static getMediaById(mediaId) {
    return new Promise((resolve, reject) => {
      axios
        .get(SETTINGS.API_BASE_PATH + 'media/' + mediaId)
        .then(response => {
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })

  }

  static getPostsWithMedia(limit = 10) {
    return new Promise(resolve => {
      this.getPosts(limit)
        .then(response => {
          return response
        })
        .then(posts => {
          resolve(posts.map(post => {
            if (post.featured_media) {
              this.getMediaById(post.featured_media)
                .then(response => {
                  post.featured_media = response
                  return post
                })
            }
            return post
          }))
        })
    })


  }

}
