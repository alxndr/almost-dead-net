import React, {useMemo} from 'react'
import {useSortBy, useTable} from 'react-table'
import {graphql} from 'gatsby'
import {find, propEq} from 'ramda'
import classnames from 'classnames'

import {pluralize} from '../helpers/string_helpers'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from '../components/link-with-previous-url'

import './song.css'

function authorInfo(author = null) {
  switch (author) {
    case null:
    case '':
      return false
    case 'traditional':
      return <p>(traditional)</p>
    default:
      return <p>by {author}</p>
  }
}

const SET_MAPPING = { // 'show table column name' to 'human readable set name'
  soundcheck: 'soundcheck',
  set1: 'set 1',
  set2: 'set 2',
  set3: 'set 3',
  encore1: 'encore',
  encore2: 'double encore',
}

function ListItem({date, performancesOnDate, previousUrl}) {
  const [{performanceData, showData, variation, whichSet}, ...otherPerformances] = performancesOnDate
  const url = `/show/${showData.id}`
  return <li key={performanceData.id} className={classnames({highlight: previousUrl?.endsWith(url)})}>
    <Link to={url}>
      {date}
      {' '}
      {variation} in {whichSet}
      {otherPerformances.length
        ? otherPerformances[0].whichSet !== whichSet
          ? ` & ${otherPerformances[0].whichSet}`
          : '…'
        : ''
      }
    </Link>
  </li>
}

export const query = graphql`
  query SongTemplate($songId: String!) {
    songsCsv(id: {eq: $songId}) {
      id
      author
      suite
      title
      performances
    }
    allSeguesCsv { nodes {
      id
      from_perf_id
      to_perf_id
      type
    }}
    allSetsCsv { nodes {
      id
      setlist
    } }
    allShowsCsv { nodes {
      id
      date
      encore1
      encore2
      set1
      set2
      set3
      soundcheck
    } }
    allSongperformancesCsv { nodes {
      id
      song_id
      song_name
    } }
    allTeasesCsv(filter: {song_id: {eq: $songId}}) { nodes {
      id
      performance_id
      within
    } }
  }
`

function SortableTable({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns, data}, useSortBy)
  // global.console.log({previousUrl: location?.state?.previousUrl}) // TODO why not working??
  return <table {...getTableProps()} className="sortable">
    <thead>
      {headerGroups.map(headerGroup =>
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column =>
            <th {...column.getHeaderProps(column.getSortByToggleProps())}
                className={`sortable__cell-${column.id} ${column.isSorted ? column.isSortedDesc ? 'sorted-desc' : 'sorted-asc' : ''}`}>
              {column.render('Header')}
            </th>
          )}
        </tr>
      )}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row) // no return value; mutates `row`?
        return <tr {...row.getRowProps()}>
          {row.cells.map(cell => {
            const url = `/show/${cell.row.original.fullData.showData.id}`
            const classNameTd = classnames({
              blank: cell.value === '[opener]' || cell.value === '[closer]',
              highlight: location?.state?.previousUrl?.endsWith(url),
              [`sortable__cell-${cell.column.id}`]: true,
            })
            return <td {...cell.getCellProps()} className={classNameTd}>
              {cell.column.id === 'show'
                ? <Link to={url}>{cell.render('Cell')}</Link>
                : cell.render('Cell')
              }
            </td>
          })}
        </tr>
      })}
    </tbody>
  </table>
}

export default function Song({data: {
  songsCsv: song,
  allSeguesCsv: {nodes: allSegues},
  allSetsCsv: {nodes: allSets},
  allShowsCsv: {nodes: allShows},
  allSongperformancesCsv: {nodes: allSongPerformances},
  allTeasesCsv: {nodes: teases},
}, location}) {
  if (!song) {
    return <p>Uh oh, no song data found...</p>
  }
  const onlyThisSongsPerformanceIds = song.performances.split(':')
  if (!allSongPerformances.length) {
    throw new Error('No data for allSongPerformances')
  }
  if (!allShows.length) {
    throw new Error('No data for allShows')
  }
  if (!allSets.length) {
    throw new Error('No data for allSets')
  }
  if (!allSegues.length) {
    throw new Error('No data for allSegues')
  }
  const onlyThisSongsPerformancesData = allSongPerformances
    .filter((songPerformance) => onlyThisSongsPerformanceIds.includes(songPerformance.id))
    .map((performanceData) => {
      const performanceIdStr = performanceData.id.toString()
      const setData = find((set) =>
        set.setlist && set.setlist.toString().split(':').includes(performanceIdStr)
      )(allSets)
      if (!setData) return;
      const showData = find((show) => [
        show.soundcheck,
        show.set1,
        show.set2,
        show.set3,
        show.encore1,
        show.encore2
      ].includes(setData.id))(allShows)
      if (!showData) {
        console.warn('Missing showData...', {song, performanceData, setData})
      }
      const setIdsInts = String(setData.setlist).split(':')
      const perfPositionInSet = setIdsInts.indexOf(performanceIdStr)
      let prior;
      if (perfPositionInSet > 0) {
        const perfPriorId = setIdsInts[perfPositionInSet - 1]
        prior = allSongPerformances.find(songPerf => songPerf.id === perfPriorId) // TODO refactor to use an object lookup
        prior.segue = find(propEq('to_perf_id', performanceIdStr))(allSegues)
      } else prior = {song_name: '[opener]'}
      let after;
      if (perfPositionInSet < setIdsInts.length - 1) {
        after = allSongPerformances.find(songPerf => songPerf.id === setIdsInts[perfPositionInSet + 1])
        after.segue = find(propEq('from_perf_id', performanceIdStr))(allSegues)
      } else after = {song_name: '[closer]'}
      const whichSet = Object.entries(SET_MAPPING)
        .find(([col_name, readable_name]) => showData[col_name] === setData.id)[1]
      const variation = performanceData.variation
        ? `(${performanceData.variation})`
        : false
      return {
        show: showData.date,
        prior: prior?.song_name,
        'segue_prior': prior?.segue?.type,
        title: song.title,
        'segue_after': after?.segue?.type,
        after: after?.song_name,
        whichSet,
        fullData: {performanceData, showData, variation, whichSet, prior, after}
      }
    })

  const performancesData = useMemo(() => onlyThisSongsPerformancesData, [])
  const performancesColumns = useMemo(
    () => [
      {accessor: 'show', Header: 'show', sortType: (a,b) => new Date(a.values.show).getTime() - new Date(b.values.show).getTime()}, // TODO memoize this fn
      {accessor: 'prior', Header: 'prior song'},
      {accessor: 'segue_prior', Header: '>'},
      {accessor: 'title', disableSortBy: true},
      {accessor: 'segue_after', Header: '>'},
      {accessor: 'after', Header: 'following song'},
      {accessor: 'whichSet', Header: 'where'},
    ],
    []
  )

  return <Layout className="songpage">
    <SEO
      title={`"${song.title}" performed or teased by JRAD`}
      description={`List of each time Joe Russo's Almost Dead has performed or teased the song "${song.title}" ${song.author && song.author !== 'traditional' ? `by ${song.author}` : ''}`}
    />

    <h1 className="songpage__name">{song.title}</h1>
    <div className="songpage__info">
      {authorInfo(song.author)}
      {song.suite && <p>Part of the {song.suite} suite</p>}
    </div>

    {Boolean(performancesData.length) && // TODO verify that this count is accurate if a song is played twice in one show...
      <div className="songpage__performances">
        <h2>Performed at {pluralize(performancesData.length, 'Show')}</h2>
        <SortableTable data={performancesData} columns={performancesColumns} />
      </div>
    }

    {Boolean(teases.length) &&
      <div className="songpage__teases">
        <h2>Teases</h2>
        <ul>
          {teases.map(teaseData => {
            const performanceData = find(propEq('id', teaseData.performance_id))(allSongPerformances)
            if (!(performanceData?.id)) {
              return false
            }
            const setData = find((set) => set.setlist.toString().split(':').includes(performanceData.id.toString()))(allSets)
            const showData = find((show) => [show.soundcheck, show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(allShows)
            const url = `/show/${showData.id}`
            return <li key={teaseData.id} className={classnames({highlight: location?.state?.previousUrl?.endsWith(url)})}>
              <Link to={url}>{showData.date} within {teaseData.within} {performanceData.variation && `(${performanceData.variation})`}</Link>
            </li>
          })}
        </ul>
      </div>
    }
  </Layout>
}
