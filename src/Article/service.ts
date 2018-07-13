import { Api } from "../Api";

export const api = new Api('//tu.duowan.com/index.php?r=show/getByGallery/?')

import { Storage } from "../Storage";

export const storage = new Storage<number>('article_view_history')
