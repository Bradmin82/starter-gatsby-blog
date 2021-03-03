import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Button from '@material-ui/core/Button'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/"><Button variant="contained" color="primary">Home</Button></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/"><Button variant="contained" color="primary">Blog</Button></Link>
      </li>
    </ul>
  </nav>
)
