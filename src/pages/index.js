/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import LayoutProvider from '@theme/Layout/Provider';
import ColorModeToggle from '@theme/Navbar/ColorModeToggle';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_building_blocks.svg',
    description: (
      <>
          Very simple and intuitive API.
          Increase the robustness with reduced amount of code.
      </>
    ),
  },
  {
    title: <>Immutable by default</>,
    imageUrl: 'img/undraw_security.svg',
    description: (
      <>
          Immutable data structures cannot be modified after their creation.
          Each Value in Munus is Immutable by default.
      </>
    ),
  },
  {
    title: <>Pure PHP</>,
    imageUrl: 'img/undraw_code_thinking.svg',
    description: (
      <>
          Munus is written in 100% in pure PHP.
          It does not require any additional extensions.
          Just install and use.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  const {themeConfig: {footer: {copyright, style}}} = siteConfig;

  return (
    <LayoutProvider>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className={styles.colorModeToggle}>
          <ColorModeToggle/>
        </div>
        <div className={classnames('container', styles.container)}>
          <img className={classnames(styles.heroLogo)} src="img/logo-dark.svg" alt="munus-logo"/>
          <h1 className={classnames('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={classnames('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/start')}>
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.sourceCode,
              )}
              to="https://github.com/munusphp/munus">
              Source code
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.codeExample}>
          <h2 className={styles.codeExampleTitle}>How it works?</h2>
          <div className={styles.codeExampleContainer}>
            <img className={styles.codeExampleImage} src='img/without-munus.webp' alt='Without munus' />
            <img className={styles.codeExampleImage} src='img/with-munus.webp' alt='With munus' />
          </div>
        </div>
      </main>
      <FooterLayout
        style={style}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
    </LayoutProvider>
  );
}

export default Home;
