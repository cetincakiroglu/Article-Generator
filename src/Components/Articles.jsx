import React from 'react'
import {Row} from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function Articles({ saveEdit, formInput , matchedArticle}) {
    return (
        <>
            <Row>
                <ArticleCard 
                formInput={formInput}
                matchedArticle = {matchedArticle}
                saveEdit = {saveEdit}
                />
            </Row>
        </>
    )
}

export default Articles
