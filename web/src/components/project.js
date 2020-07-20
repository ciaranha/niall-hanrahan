import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'

function Project (props) {
  const {_rawBody, _rawImages, title, categories, mainImage, members, software, publishedAt, relatedProjects} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>

            {props.mainImage && mainImage.asset && (
              <div className={styles.mainImage}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    .width(1560)
                    .height(Math.floor((9 / 16) * 1560))
                    .fit('crop')
                    .url()}
                  alt={mainImage.alt}
                />
              </div>
            )}

            <div className={styles.metaContent}>
              <div>
                <div className={styles.label}>
                  Date
                </div>
                {publishedAt && (
                  <div className={styles.publishedAt}>
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? distanceInWords(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), 'MMMM Do YYYY')}
                  </div>
                )}
              </div>

              <div className={styles.metaContainer}>
                <div className={styles.label}>
                  Filed Under
                </div>
                {categories && categories.length > 0 && (
                  <div className={styles.categories}>
                    {categories.map(category => (
                      <div key={category._id}>{category.title}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.metaContainer}>
                {software && software.length > 0 && (
                  <div className={styles.software}>
                    <div className={styles.label}>
                      Software
                    </div>

                    <div className={styles.softwareItems}>
                      {software.map(software => (
                        <div className={styles.softwareItem} key={software._id}>
                          {software}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.projectMembers}>
              {members && members.length > 0 && <RoleList items={members} title='Project Team' />}
            </div>

            <div className={styles.body}>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </div>
          </div>
        </div>
      </Container>
      {_rawImages && <BlockContent blocks={_rawImages || []} />}

      {relatedProjects && relatedProjects.length > 0 && (
        <div className={styles.relatedProjects}>
          <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
          <ul>
            {relatedProjects.map(project => (
              <li key={`related_${project._id}`}>
                {project.slug ? (
                  <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                ) : (
                  <span>{project.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Project
