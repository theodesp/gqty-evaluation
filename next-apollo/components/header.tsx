import React from 'react';
import '../styles/components/Header.module.scss';
import Link from 'next/link';

interface Props {
  title?: string;
  description?: string;
}

function Header({
                  title = 'Headless by WP Engine',
                  description,
                }: Props): JSX.Element {
  // const { menuItems } = client.useQuery()
  // const links = menuItems({
  //   where: { location: MenuLocationEnum.PRIMARY },
  // }).nodes;
  const links = [];

  return (
    <header>
      <div>
        <div>
          <p>
            <Link href="/">
              <a>{title}</a>
            </Link>
          </p>
          {description && <p>{description}</p>}
        </div>
        <div>
          <ul>
            {links?.map((link) => (
              <li key={`${link.label}$-menu`}>
                <Link href={link.url ?? ''}>
                  <a href={link.url}>{link.label}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="https://github.com/wpengine/faustjs">
                <a
                  className="button"
                  href="https://github.com/wpengine/faustjs">
                  GitHub
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
