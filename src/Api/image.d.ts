
export interface Image {
  comment_count: string
  cover_url: string
  gallery_id: string
  title: string
  updated: string
  url: string
}

export interface ImageDetail {
  gallery_title: string
  updated: string
  picInfo: Pic[]
  hiidoId: [ string ]
}

export interface Pic {
  title: string
  pic_id: string
  /**顶的数量 */
  ding: string
  /**踩 */
  cai: string
  /**老图 */
  old: string
  cover_url: string
  file_url: string
  file_width: string
  file_height: string
  url: string
  source: string
  mp4_url: string
  sort: string
  cmt_md5: string
  cmt_url: string
  add_intro: string
}
