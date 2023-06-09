import Link from 'next/link'

const Navigation = () => {
  const root = navigationData[0]
  const childIds = root.childIds
  return (
    <nav className="p-2 col-[1_/_2] bg-blue-200 w-[200px]">
      <ul>
        {childIds.map(id => (
          <NavigationList
            key={id}
            id={id}
            list={navigationData}
          />
        ))}
      </ul>
    </nav>
  )
}

export type NavigationItem = {
  id: number
  name: string
  childIds: number[]
  pathname?: string
}

export type NavigationListProps = {
  id: number
  list: NavigationItem[]
}

const NavigationList = ({ id, list }: NavigationListProps) => {
  const { childIds, name, pathname } = list.find(item => item.id === id)!
  return (
    <li>
      {pathname ? <Link href={pathname}>{name}</Link> : <div>{name}</div>}

      {childIds.length > 0 && (
        <ul className="pl-3 text-sm font-medium">
          {childIds.map(id => (
            <NavigationList
              id={id}
              key={id}
              list={list}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default Navigation

const navigationData = [
  {
    id: -1,
    name: 'Root',
    childIds: [0, 1],
  },
  {
    id: 0,
    name: 'Getting Started',
    childIds: [],
  },
  {
    id: 1,
    name: 'Components',
    childIds: [8, 2, 9],
  },
  {
    id: 2,
    name: 'Buttons',
    childIds: [3, 4, 5, 6, 7],
  },
  {
    id: 3,
    name: 'Common buttons',
    pathname: '/buttons/common-buttons',
    childIds: [],
  },
  {
    id: 4,
    name: 'FAB',
    pathname: '/buttons/fab',
    childIds: [],
  },
  {
    id: 5,
    name: 'Extended FAB',
    pathname: '/buttons/extended-fab',
    childIds: [],
  },
  {
    id: 6,
    name: 'Icon buttons',
    pathname: '/buttons/icon-buttons',
    childIds: [],
  },
  {
    id: 7,
    name: 'Segmented buttons',
    pathname: '/buttons/segmented-buttons',
    childIds: [],
  },
  {
    id: 8,
    name: 'Badges',
    pathname: '/badges',
    childIds: [],
  },
  {
    id: 9,
    name: 'Chips',
    pathname: '/chips',
    childIds: [],
  },
]
