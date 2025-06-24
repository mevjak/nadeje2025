import * as React from "react"

const ArticleMeta = ({article}) => {
    return (
        <p className="author">
            Autor {article.frontmatter.author} &bull; Publikováno {article.frontmatter.date}
        </p>
    )
}

export default ArticleMeta
