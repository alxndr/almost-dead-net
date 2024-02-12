import React, {useMemo} from 'react'
import {useRowState, useSortBy, useTable} from 'react-table'
import {Tooltip} from 'react-tippy'
import {graphql, Link, StaticQuery} from 'gatsby'
import {filter, groupBy, prop, propEq, sortBy} from 'ramda'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './songs.css'

const removeCertainSongs = ({title}) => title && !['[unknown]', 'Drums', 'Jam', 'Space'].includes(title)
const sortByTitle = sortBy(prop('title')) // TODO ignore "A", "The", etc

function Author({name}) {
  if (!name || name === 'traditional') {
    return false
  }
  return <span className="song__author">
    {name}
  </span>
}
function PerformanceCount({perfIds, text = 'performed'}) {
  if (!perfIds || !perfIds.length) {
    return false
  }
  const message = `${text} ${perfIds.length} time${perfIds.length === 1 ? '' : 's'}`
  return <Tooltip title={message} trigger="mouseenter focus click">
    <span className="song__perfcount" aria-label="notes" role="img">×{perfIds.length}
      <span className="hidden">{message}</span>
    </span>
  </Tooltip>
}
function SongLink({data: {author, core_gd, cover_gd, id, suite, title, performances}, full}) {
  return <Link to={`/song/${id}`}>
    "{title}"
    {full && <>
      {' '}
      {suite && <span className="song__suite">{suite} suite</span>}
      {' '}
      {(!core_gd || cover_gd) && <Author name={author} />}
    </>}
  </Link>
}

function SortableTable({columns, data, link=true}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns, data}, useRowState, useSortBy)
  return <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup =>
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column =>
            <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{borderBottom: 'solid 3px gray', background: 'aliceblue', fontWeight: 'bold'}}>
              {column.render('Header')}
              <span className="songs__performed-table__column-sort">
                {column.isSorted ? column.isSortedDesc ? '⬇︎' : '⬆︎' : '⇅'}
              </span>
            </th>
          )}
        </tr>
      )}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row) // no return value; mutates `row`?
        return <tr {...row.getRowProps()}>
          {row.cells.map(cell =>
            <td {...cell.getCellProps()}>
              {cell.column?.id === 'title' && link
                ? <SongLink data={cell.row.original} />
                : cell.render('Cell')}
            </td>
          )}
        </tr>
      })}
    </tbody>
  </table>
}

function SongsComponent({data: {allSongsCsv: {nodes: songs}, allTeasesCsv: {nodes: teases}}}) {
  const groupedByPerformed = groupBy((songData) => Boolean(songData.performances), songs.filter(removeCertainSongs))
  const performedData = useMemo(
    () => groupedByPerformed[true].map(songData => ({
      ...songData,
      performances: String(songData.performances).split(':').length,
    })),
    []
  )
  const performedColumns = useMemo(
    () => [
      { Header: "title", accessor: "title" },
      { Header: "author", accessor: "author" },
      { Header: "suite", accessor: "suite" },
      { Header: "plays", accessor: "performances" },
    ],
    []
  )

  const allSongIdsFromTeases = teases.reduce((a,e) => a.concat(e.song_id), [])
  const groupedByTeased = groupBy(songData => allSongIdsFromTeases.includes(songData.id), groupedByPerformed[false])
  const teasedData = useMemo(
    () => groupedByTeased[true].map(songData => ({
      ...songData,
      teases: filter(propEq(songData.id, 'song_id'))(teases).map((row) => row.performance_id).length,
    })),
    []
  )
  const teasedColumns = useMemo(
    () => [
      { Header: "title", accessor: "title" },
      { Header: "author", accessor: "author" },
      { Header: "teases", accessor: "teases" },
    ],
    []
  )

  return <Layout className="songs">
    <SEO
      title="JRAD songs played or teased"
      description="Repertoire of songs and teases performed by Joe Russo's Almost Dead, plus setlists of each concert"
    />

    <div id="songs__toc" className="tableofcontents">
      <p>Table of Contents</p>
      <ol>
        <li><a href="#songs__performed-headline">Songs Performed / Jammed</a></li>
        <li><a href="#songs__teased-headline">Songs Teased</a></li>
      </ol>
    </div>

    <h1 href="#songs__performed-headline">Songs Performed / Jammed</h1>
    <p>These songs have been performed in their entirety, or played as an extended theme by the entire band.</p>
    <SortableTable columns={performedColumns} data={performedData} />

    <h1 id="songs__teased-headline">Songs Teased</h1>
    <p>These are songs which have been hinted at by one or more members of the band while playing another song.</p>
    <SortableTable columns={teasedColumns} data={teasedData} />

    {'#notyet' === global?.window?.location?.hash /* TODO this can trigger a runtime error in browser */ && <>
      <h1 id="songs__notyet-headline">Not Yet Played from the GD Repertoire</h1>
      <p>This is an incomplete list of songs which the Grateful Dead or their members recorded or played live (either together or in other projects), but have been neither played nor teased by JRAD...</p>
      <SortableTable
        columns={useMemo(() => [{Header: "title", accessor: "title"}, {Header: "author", accessor: "author"}], [])}
        data={useMemo(() => groupedByTeased[false], [])}
        link={false}
      />
    </>}
  </Layout>
}

const SongsPage = () => <StaticQuery
  query={graphql`
    query SongsPageData {
      allSongsCsv { nodes {
        author
        core_gd
        core_jrad
        cover_gd
        id
        performances
        suite
        title
      } }
      allTeasesCsv { nodes {
        id
        by
        notes
        performance_id
        song_id
        song_name
        within
      } }
    }
  `}
  render={data => <SongsComponent data={data} />}
/>
export default SongsPage
