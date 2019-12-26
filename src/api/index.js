import axios from 'axios'
import SETTINGS from './../settings'


export default class API {
  static getCategories(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'categories?hide_empty=true')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  }

  static getPosts(limit = 10, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'posts?per_page=' + limit)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
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

  static getPostBySlug(postSlug, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'posts/?slug=' + postSlug)
      .then(response => {
        cb(response.data[0])
      })
      .catch(e => {
        cb(e)
      })
  }

  static getMediaById(mediaId, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'media/' + mediaId)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  }

  static getPostsWithMedia(limit=10, cb) {

  }

}
