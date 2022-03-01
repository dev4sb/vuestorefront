const middleware = {}

middleware['authenticated'] = require('../_theme/middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['checkout'] = require('../_theme/middleware/checkout.js')
middleware['checkout'] = middleware['checkout'].default || middleware['checkout']

middleware['is-authenticated'] = require('../_theme/middleware/is-authenticated.js')
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated']

export default middleware
