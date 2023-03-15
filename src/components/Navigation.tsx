import Link from "next/link"

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
  childIds: number[],
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
      {
        pathname ? <Link href={pathname}>{name}</Link> : <div>{name}</div>
      }
      
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
    childIds: [0, 1]
  },
  {
    id: 0,
    name: 'Getting Started',
    childIds: [],
  },
  {
    id: 1,
    name: 'Components',
    childIds: [2, 3],
  },
  {
    id: 2,
    name: 'Button',
    pathname: '/button',
    childIds: [],
  },
  {
    id: 3,
    name: 'Badge',
    pathname: '/button',
    childIds: [],
  },
]
