import Link from 'next/link'
import React, { Fragment } from 'react'

export default function NewsPage() {
  return (
    <Fragment>
      <ul>
        <li><Link href="/news/link1" >Go to link1</Link></li>
        {/* just with an <a> tag it would re-send the request for a new html, thus defeats the purpose of SPA with react*/}
        <li><a href="/news/link2">Go to link2</a></li>
      </ul>
    </Fragment>
  )
}
