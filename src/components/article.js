import * as React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ArticleMeta from './article-meta'

const Article = ({article}) => {

    const image = getImage(article.frontmatter.featuredImage)
    return (
        <article>
            <div className="featured-image">
                <GatsbyImage image={image} alt="Featured image" />
            </div>

            <Link to={article.fields.slug}><h2>{article.frontmatter.title}</h2></Link>

            <ArticleMeta article={article}/>

            <p>{article.frontmatter.description}</p>

            <p>
                <Link to={article.fields.slug}>Celý článek <span aria-hidden="true">&rarr;</span></Link>
            </p>
        </article>
    )
}

export default Article
