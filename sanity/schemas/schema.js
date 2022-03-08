import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

import { home_page } from './home_page'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home_page,
  ]),
})
