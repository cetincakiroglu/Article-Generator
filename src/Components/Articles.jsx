import React from 'react'
import {Row} from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function Articles({ saveEdit, formInput , matchedArticle, setid}) {
    return (
        <>
            <Row>
                <ArticleCard 
                formInput={formInput}
                matchedArticle = {matchedArticle}
                saveEdit = {saveEdit}
                setid = {setid}
                />
            </Row>
        </>
    )
}

export default Articles
