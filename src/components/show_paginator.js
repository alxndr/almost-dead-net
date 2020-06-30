import React from 'react'
import { Link } from 'react-router-dom'

import routes, {url} from '../routes';

import './show_paginator.css'

export default function ShowPaginator({prev, next}) {
  if (!prev && !next) {
    return false
  }
  return <ul className="showpaginator">
    {prev && <li className="showpaginator__prev">
      <Link to={url(routes.show, {id: prev.id})}>
        Previous show: {prev.date}
      </Link>
    </li>}
    {next && <li className="showpaginator__next">
      <Link to={url(routes.show, {id: next.id})}>
        Next show: {next.date}
      </Link>
    </li>}
  </ul>
}
