import React from 'react';
import cl from 'classnames';
import { AiFillGithub, AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin, AiFillProfile } from "react-icons/ai";

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/ahmedjanwar',
    icon: AiFillGithub,
  },
  /*{
    id: 2,
    href: 'https://www.youtube.com/channel/UCdw1R35g3uDj4LVt1-aS-hA',
    icon: AiFillYoutube,
  },*/
  {
    id: 2,
    href: 'https://portfolio-703mmzk1v-ahmedjanwar.vercel.app/',
    icon: AiFillProfile
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/ahmedjanwar/',
    icon: AiFillLinkedin
  }
];

const SocialNetworks = ({
    className
}) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
          {socialNetworks.map((socialNetwork) => (
            <li
              key={socialNetwork.id}
              className={styles.listItem}
            >
              <a
                href={socialNetwork.href}
                target="_blank"
                className={styles.listLink}
                rel="noreferrer"
              >
                {React.createElement(
                  socialNetwork.icon,
                  {
                    color: 'black',
                    size: 50
                  }
                )}
              </a>
            </li>
          ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks;