import Link from 'next/link';
import React, { useState } from 'react';
import { ACCOUNT_LINKS } from '../../../data/links';
import { LANGS } from '../../../data/main';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Button from '../../elements/Button';
import Dropdown from '../../elements/Dropdown';
import MobileMenu from '../../modules/MobileMenu';
import Sidebar from '../../modules/Sidebar';

import styles from './AccountLayout.module.scss';

const AccountLayout = (props) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  // Get window width
  const { width } = useWindowDimensions();

  return (
    <>
      <header
        className={[
          styles.accountHeader,
          isToggleOn && width <= 992 ? styles.mobileActive : ''
        ].join(' ')}
      >
        <div className={styles.leftWrapper}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/logo-dark.svg" />
            </a>
          </Link>
          <div className={styles.dropdown}>
            <Dropdown items={LANGS} />
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.buttons}>
            <Link href="/game">
              <a>
                <Button icon="play-cards" type="white" small>
                  Play
                </Button>
              </a>
            </Link>
            <div className={styles.dropdown}>
              <Dropdown name="Eyvaz" img="avatar" items={ACCOUNT_LINKS} />
            </div>
          </div>
          <div className={styles.mobileButton}>
            <Button
              clicked={() => setIsToggleOn((prevState) => !prevState)}
              type="white"
              style={{ border: 'none' }}
            >
              <div className={styles.user}>
                <img src="/img/avatar.png" />
                <span>Eyvaz</span>
              </div>
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        show={width <= 992}
        onClose={() => setIsToggleOn(false)}
        isActive={isToggleOn}
        isAccount
      />
      <Sidebar show={width > 992} />
      <main className={styles.accountContent}>{props.children}</main>
    </>
  );
};

export default AccountLayout;